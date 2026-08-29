/**
 * Sound Effects Manager for Reading Buddy
 * Uses Web Audio API for zero-latency, reliable child-friendly sound effects,
 * with graceful HTML5 Audio fallback.
 */

class SoundEffectsManager {
  private audioCtx: AudioContext | null = null;
  private clickAudio: HTMLAudioElement | null = null;
  private navAudio: HTMLAudioElement | null = null;
  private congratsAudio: HTMLAudioElement | null = null;
  private hasUserInteracted = false;

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
      return this.audioCtx;
    } catch {
      return null;
    }
  }

  /**
   * Play short, soft, cheerful child-friendly click / pop sound (~90ms, 20-25% volume)
   * Suitable for all standard interactive buttons and controls.
   */
  public playClickSound(): void {
    this.hasUserInteracted = true;
    try {
      const ctx = this.getAudioContext();
      if (ctx) {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Pleasant bubble pop with fast downward pitch envelope (850Hz -> 380Hz)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(850, now);
        osc.frequency.exponentialRampToValueAtTime(380, now + 0.08);

        // Smooth volume envelope (~22% volume)
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.22, now + 0.015);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.095);
        return;
      }
    } catch (e) {
      console.warn("Web Audio click sound notice:", e);
    }

    // Fallback to HTML5 Audio element
    try {
      if (!this.clickAudio && typeof window !== 'undefined') {
        this.clickAudio = new Audio('/sounds/click.wav');
        this.clickAudio.volume = 0.22;
      }
      if (this.clickAudio) {
        this.clickAudio.currentTime = 0;
        const playPromise = this.clickAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    } catch {
      // Ignore autoplay errors safely
    }
  }

  /**
   * Play short, gentle navigation sound for Previous / Next page turn (~150ms, 25-30% volume)
   */
  public playNavigationSound(): void {
    this.hasUserInteracted = true;
    try {
      const ctx = this.getAudioContext();
      if (ctx) {
        const now = ctx.currentTime;
        
        // Gentle two-tone melodic chime (D5 -> A5)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(880.00, now + 0.04); // A5

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.20, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(now);
        osc1.stop(now + 0.10);
        osc2.start(now + 0.04);
        osc2.stop(now + 0.16);
        return;
      }
    } catch (e) {
      console.warn("Web Audio nav sound notice:", e);
    }

    // Fallback to HTML5 Audio element
    try {
      if (!this.navAudio && typeof window !== 'undefined') {
        this.navAudio = new Audio('/sounds/nav.wav');
        this.navAudio.volume = 0.25;
      }
      if (this.navAudio) {
        this.navAudio.currentTime = 0;
        const playPromise = this.navAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    } catch {
      // Ignore autoplay errors safely
    }
  }

  /**
   * Alias for navigation sound
   */
  public playNextSound(): void {
    this.playNavigationSound();
  }

  public playPrevSound(): void {
    this.playNavigationSound();
  }

  /**
   * Play cheerful celebration fanfare sound on Congratulations / Completion screen (~1.5s, 40-50% volume)
   * Only triggers if user has interacted with the app.
   */
  public playCelebrationSound(): void {
    if (!this.hasUserInteracted) {
      // Safe browser autoplay guard: user hasn't touched the app yet
      return;
    }

    try {
      const ctx = this.getAudioContext();
      if (ctx) {
        const now = ctx.currentTime;

        // Celebratory major arpeggio fanfare (C5, E5, G5, C6, E6, G6)
        const notes = [
          { time: 0.00, freq: 523.25, dur: 0.25, vol: 0.20 }, // C5
          { time: 0.10, freq: 659.25, dur: 0.25, vol: 0.22 }, // E5
          { time: 0.20, freq: 783.99, dur: 0.25, vol: 0.24 }, // G5
          { time: 0.30, freq: 1046.50, dur: 0.85, vol: 0.28 }, // C6
          { time: 0.42, freq: 1318.51, dur: 0.75, vol: 0.20 }, // E6
          { time: 0.54, freq: 1567.98, dur: 0.85, vol: 0.18 }  // G6
        ];

        notes.forEach(({ time, freq, dur, vol }) => {
          const startTime = now + time;
          const osc = ctx.createOscillator();
          const oscHarmonic = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);

          oscHarmonic.type = 'triangle';
          oscHarmonic.frequency.setValueAtTime(freq * 2, startTime);

          gain.gain.setValueAtTime(0.001, startTime);
          gain.gain.linearRampToValueAtTime(vol, startTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur);

          osc.connect(gain);
          oscHarmonic.connect(gain);
          gain.connect(ctx.destination);

          osc.start(startTime);
          osc.stop(startTime + dur);
          oscHarmonic.start(startTime);
          oscHarmonic.stop(startTime + dur);
        });

        return;
      }
    } catch (e) {
      console.warn("Web Audio celebration sound notice:", e);
    }

    // Fallback to HTML5 Audio element
    try {
      if (!this.congratsAudio && typeof window !== 'undefined') {
        this.congratsAudio = new Audio('/sounds/congrats.wav');
        this.congratsAudio.volume = 0.45;
      }
      if (this.congratsAudio) {
        this.congratsAudio.currentTime = 0;
        const playPromise = this.congratsAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    } catch {
      // Ignore autoplay errors safely
    }
  }

  /**
   * Alias for celebration sound
   */
  public playCongratsSound(): void {
    this.playCelebrationSound();
  }
}

export const soundEffects = new SoundEffectsManager();
