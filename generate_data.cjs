const fs = require('fs');

function generateStory(title, subject, sentencesCount, level) {
  let sentences = [];
  let questions = [];
  
  if (level === 1) {
    if (sentencesCount === 6) {
      sentences = [
        `This is a story about a ${subject}.`,
        `The ${subject} is very small and happy.`,
        `It likes to play in the bright sun.`,
        `One day, it finds a new friend.`,
        `They play together all day long.`,
        `They go home and sleep well.`
      ];
      questions = [
        { question: `What is the story about?`, answer: `A ${subject}.` },
        { question: `How does the ${subject} feel?`, answer: `Very happy.` },
        { question: `What does it find?`, answer: `A new friend.` },
        { question: `When do they go home?`, answer: `They go home to sleep.` }
      ];
    } else if (sentencesCount === 8) {
      sentences = [
        `Once there was a brave ${subject}.`,
        `The ${subject} lived in a green forest.`,
        `Every morning, it went for a walk.`,
        `One day, it lost its favourite toy.`,
        `The ${subject} felt very sad.`,
        `A kind bird helped to look for it.`,
        `They found the toy under a big tree.`,
        `The ${subject} was very happy again.`
      ];
      questions = [
        { question: `Where did the ${subject} live?`, answer: `In a green forest.` },
        { question: `What did it lose?`, answer: `Its favourite toy.` },
        { question: `Who helped to look for it?`, answer: `A kind bird.` },
        { question: `Where was the toy?`, answer: `Under a big tree.` }
      ];
    } else if (sentencesCount === 10) {
      sentences = [
        `A little ${subject} wanted to build a house.`,
        `It looked for some strong wood.`,
        `The ${subject} worked very hard all morning.`,
        `Soon, a big wind started to blow.`,
        `The wind blew the wood away.`,
        `The ${subject} did not give up.`,
        `It found some heavy stones instead.`,
        `It built a very strong house.`,
        `The wind could not blow it down.`,
        `The ${subject} felt very safe and proud.`
      ];
      questions = [
        { question: `What did the ${subject} want to build?`, answer: `A house.` },
        { question: `What did the wind do?`, answer: `It blew the wood away.` },
        { question: `What did it use next?`, answer: `Heavy stones.` },
        { question: `How did the ${subject} feel at the end?`, answer: `Safe and proud.` }
      ];
    }
  } else {
    if (sentencesCount === 8) {
      sentences = [
        `The friendly ${subject} enjoyed helping others.`,
        `One afternoon, it heard a quiet cry for help.`,
        `A tiny frog was stuck in a deep mud puddle.`,
        `The ${subject} quickly found a long wooden stick.`,
        `It carefully pulled the small frog to safety.`,
        `The frog thanked the ${subject} for its great kindness.`,
        `They decided to share a delicious snack together.`,
        `Helping a friend makes the world a better place.`
      ];
      questions = [
        { question: `What did the ${subject} enjoy doing?`, answer: `Helping others.` },
        { question: `Who was stuck in the mud?`, answer: `A tiny frog.` },
        { question: `How was the frog rescued?`, answer: `With a long wooden stick.` },
        { question: `What is the moral of the story?`, answer: `Helping a friend makes the world better.` }
      ];
    } else if (sentencesCount === 10) {
      sentences = [
        `A clever ${subject} wanted to learn how to swim.`,
        `The water in the river looked very cold and deep.`,
        `At first, the ${subject} was too scared to jump in.`,
        `An older fish offered to teach the ${subject} safely.`,
        `They started in the shallow water near the green bank.`,
        `The ${subject} practiced kicking its legs very hard.`,
        `Slowly, it learned how to float on top of the water.`,
        `Soon, the ${subject} could swim all by itself.`,
        `It thanked the wise fish for being a great teacher.`,
        `Learning something new takes time and a lot of courage.`
      ];
      questions = [
        { question: `What did the ${subject} want to learn?`, answer: `How to swim.` },
        { question: `Who offered to teach the ${subject}?`, answer: `An older fish.` },
        { question: `Where did they start practicing?`, answer: `In the shallow water.` },
        { question: `What does learning something new take?`, answer: `Time and courage.` }
      ];
    } else if (sentencesCount === 12) {
      sentences = [
        `Deep in the valley, a young ${subject} discovered a hidden cave.`,
        `The cave was filled with bright, glowing crystals of many colours.`,
        `The ${subject} wanted to show this beautiful place to its family.`,
        `It carefully memorized the winding path back to its warm home.`,
        `When it told its family, they were very excited to see the cave.`,
        `They all packed a tasty picnic and walked through the thick forest.`,
        `The journey was long, but they sang cheerful songs along the way.`,
        `Finally, they reached the amazing cave with the glowing crystals.`,
        `The whole family sat together and enjoyed their delicious food.`,
        `They marvelled at the beautiful lights shining on the rocky walls.`,
        `The ${subject} felt completely delighted to share this magical discovery.`,
        `Sharing wonderful moments with family brings the greatest joy.`
      ];
      questions = [
        { question: `What did the ${subject} discover?`, answer: `A hidden cave with glowing crystals.` },
        { question: `Who did it want to show the cave to?`, answer: `Its family.` },
        { question: `What did they do along the way?`, answer: `They sang cheerful songs.` },
        { question: `What is the greatest joy?`, answer: `Sharing wonderful moments with family.` }
      ];
    }
  }

  // Generate unique titles and images
  const capsTitle = title.toUpperCase();
  const imagePrompt = `https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_${capsTitle.replace(/ /g, '_')}?width=800&height=800&nologo=true`;

  return {
    title: capsTitle,
    image: imagePrompt,
    content: sentences,
    questions: questions
  };
}

const subjects1 = [
  "cat", "dog", "bird", "frog", "bear", "mouse", "duck", "bee", "puppy", "kitten",
  "rabbit", "turtle", "fox", "owl", "deer", "squirrel", "hedgehog", "raccoon", "pig", "cow",
  "horse", "sheep", "goat", "chicken", "penguin", "seal", "dolphin", "whale", "fish", "crab"
];

const subjects2 = [
  "elephant", "giraffe", "lion", "tiger", "monkey", "zebra", "hippo", "rhino", "panda", "koala",
  "kangaroo", "ostrich", "camel", "llama", "sloth", "lemur", "meerkat", "walrus", "otter", "beaver",
  "swan", "peacock", "parrot", "flamingo", "pelican", "toucan", "eagle", "hawk", "falcon", "woodpecker"
];

const littleStories = [];
for (let i = 0; i < 30; i++) {
  let sentencesCount = 6;
  if (i >= 10 && i < 20) sentencesCount = 8;
  if (i >= 20) sentencesCount = 10;
  
  littleStories.push(generateStory(`THE LITTLE ${subjects1[i].toUpperCase()}`, subjects1[i], sentencesCount, 1));
}

const growingStories = [];
for (let i = 0; i < 30; i++) {
  let sentencesCount = 8;
  if (i >= 10 && i < 20) sentencesCount = 10;
  if (i >= 20) sentencesCount = 12;
  
  growingStories.push(generateStory(`THE CLEVER ${subjects2[i].toUpperCase()}`, subjects2[i], sentencesCount, 2));
}

const dataFile = `export interface StoryQuestion {
  question: string;
  answer: string;
}

export interface Story {
  title: string;
  image: string;
  content: string[];
  questions: StoryQuestion[];
}

export interface Book {
  id: string;
  title: string;
  ages: string;
  count: string;
  level: string;
  color: string;
  titleColor: string;
  buttonColor: string;
  stories: Story[];
}

export const BOOKS: Book[] = [
  {
    id: 'little',
    title: 'Little Readers',
    ages: 'Ages 4–6',
    count: '30 Stories',
    level: 'Medium',
    color: 'bg-emerald-100 border-emerald-300',
    titleColor: 'text-emerald-700',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    stories: ${JSON.stringify(littleStories, null, 2)}
  },
  {
    id: 'growing',
    title: 'Growing Readers',
    ages: 'Ages 5–7',
    count: '30 Stories',
    level: 'Advanced',
    color: 'bg-blue-100 border-blue-300',
    titleColor: 'text-blue-700',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    stories: ${JSON.stringify(growingStories, null, 2)}
  }
];
`;

fs.writeFileSync('src/data.ts', dataFile, 'utf8');
console.log("Data generated successfully.");
