const fs = require('fs');

const dataPath = 'src/data.ts';
let data = fs.readFileSync(dataPath, 'utf8');

const mapping = {
  "THE MAGIC SHOW": "Isolated 3D render of a MAGIC WAND only, black wand with white tips, slight magical sparkle around the wand, plain white background, single object, vocabulary flashcard style. No background, no scenery, no extra objects, no magician, no magic hat, no rabbit, no cards, no stage, no other magic props, no people, no hands. Cute bright child-friendly Pixar-style."
};

const storyRegex = /"title":\s*"([^"]+)",\s*"image":\s*"([^"]+)"/g;
let matches;
const stories = [];

while ((matches = storyRegex.exec(data)) !== null) {
  stories.push({
    fullMatch: matches[0],
    title: matches[1],
    oldImageUrl: matches[2]
  });
}

for (const s of stories) {
  if (mapping[s.title]) {
    let newPrompt = mapping[s.title];
    newPrompt = newPrompt.replace(/\s+/g, '_');
    newPrompt = encodeURIComponent(newPrompt).replace(/%5F/g, '_');
    
    const seed = Math.floor(Math.random() * 1000000);
    const newImageUrl = `https://image.pollinations.ai/prompt/${newPrompt}?width=800&height=800&nologo=true&seed=${seed}`;
    
    const newMatch = s.fullMatch.replace(s.oldImageUrl, newImageUrl);
    data = data.replace(s.fullMatch, newMatch);
  }
}

fs.writeFileSync(dataPath, data);
console.log('Successfully updated THE MAGIC SHOW cover.');
