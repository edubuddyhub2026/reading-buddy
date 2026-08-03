const fs = require('fs');

const stories = [];

// LEVEL 1 - STAGE 1 (10 stories, 6 sentences, VERY SHORT)
stories.push({
  title: "Ahmad at the Park",
  content: [
    "Ahmad goes to the green park.",
    "He sees his good friend Arjun.",
    "They play on the tall slide.",
    "Ahmad runs very fast.",
    "Arjun kicks a red ball.",
    "They have a fun day together."
  ],
  questions: [
    { question: "Where does Ahmad go?", answer: "Ahmad goes to the green park." },
    { question: "Who does Ahmad see?", answer: "He sees his good friend Arjun." },
    { question: "What do they play on?", answer: "They play on the tall slide." },
    { question: "What colour is the ball?", answer: "The ball is red." }
  ]
});

stories.push({
  title: "The School Canteen",
  content: [
    "Mei Ling walks to the canteen.",
    "She smells the hot noodles.",
    "She buys a bowl of soup.",
    "Aina sits at the long table.",
    "Mei Ling sits with Aina.",
    "They eat their tasty food happily."
  ],
  questions: [
    { question: "Where does Mei Ling walk to?", answer: "Mei Ling walks to the canteen." },
    { question: "What does she buy?", answer: "She buys a bowl of soup." },
    { question: "Who sits at the long table?", answer: "Aina sits at the long table." },
    { question: "How do they eat their food?", answer: "They eat their tasty food happily." }
  ]
});

stories.push({
  title: "The Village Farm",
  content: [
    "Irfan visits his grandfather's farm.",
    "He sees a big brown cow.",
    "The cow eats the green grass.",
    "Irfan feeds the noisy chickens.",
    "A small chick runs to him.",
    "He smiles at the cute chick."
  ],
  questions: [
    { question: "Who visits the farm?", answer: "Irfan visits his grandfather's farm." },
    { question: "What colour is the cow?", answer: "The cow is brown." },
    { question: "What do the chickens do?", answer: "The chickens are noisy." },
    { question: "Who runs to Irfan?", answer: "A small chick runs to him." }
  ]
});

stories.push({
  title: "A Day at the Beach",
  content: [
    "Kavin goes to the sunny beach.",
    "He builds a big sandcastle.",
    "Hao Yu helps him dig.",
    "They find a pink seashell.",
    "The sea water is very cool.",
    "They love the beautiful beach."
  ],
  questions: [
    { question: "Where does Kavin go?", answer: "Kavin goes to the sunny beach." },
    { question: "What does Kavin build?", answer: "He builds a big sandcastle." },
    { question: "Who helps Kavin dig?", answer: "Hao Yu helps him dig." },
    { question: "What do they find?", answer: "They find a pink seashell." }
  ]
});

stories.push({
  title: "The Night Market",
  content: [
    "Sara walks in the night market.",
    "The market is very busy.",
    "She sees many bright lights.",
    "Sara buys some sweet corn.",
    "She shares it with her brother.",
    "The sweet corn is very hot."
  ],
  questions: [
    { question: "Where is Sara walking?", answer: "Sara walks in the night market." },
    { question: "Is the market busy?", answer: "Yes, the market is very busy." },
    { question: "What does Sara buy?", answer: "Sara buys some sweet corn." },
    { question: "Who does she share it with?", answer: "She shares it with her brother." }
  ]
});

stories.push({
  title: "Hari Raya Cake",
  content: [
    "Nur helps her mother bake.",
    "They make a sweet Raya cake.",
    "Nur puts sugar in the bowl.",
    "She mixes the batter well.",
    "The cake smells very nice.",
    "They eat it on Hari Raya."
  ],
  questions: [
    { question: "Who does Nur help?", answer: "Nur helps her mother bake." },
    { question: "What do they make?", answer: "They make a sweet Raya cake." },
    { question: "What does Nur put in the bowl?", answer: "Nur puts sugar in the bowl." },
    { question: "When do they eat it?", answer: "They eat it on Hari Raya." }
  ]
});

stories.push({
  title: "The Lantern Festival",
  content: [
    "Jia Jun holds a red lantern.",
    "The lantern glows in the dark.",
    "He walks with his friend Adam.",
    "They look at the full moon.",
    "The moon is big and bright.",
    "It is a very beautiful night."
  ],
  questions: [
    { question: "What does Jia Jun hold?", answer: "Jia Jun holds a red lantern." },
    { question: "What colour is the lantern?", answer: "The lantern is red." },
    { question: "Who does he walk with?", answer: "He walks with his friend Adam." },
    { question: "How does the moon look?", answer: "The moon is big and bright." }
  ]
});

stories.push({
  title: "Deepavali Lights",
  content: [
    "Nisha cleans her tidy house.",
    "She lights many small clay lamps.",
    "The lamps look very pretty.",
    "Alya comes to visit Nisha.",
    "They eat some sweet treats.",
    "They have a happy Deepavali."
  ],
  questions: [
    { question: "What does Nisha do?", answer: "Nisha cleans her tidy house." },
    { question: "What does Nisha light?", answer: "She lights many small clay lamps." },
    { question: "Who comes to visit Nisha?", answer: "Alya comes to visit Nisha." },
    { question: "What do they eat?", answer: "They eat some sweet treats." }
  ]
});

stories.push({
  title: "National Day Parade",
  content: [
    "Ali waves a small flag.",
    "The flag has a bright star.",
    "He watches the big parade.",
    "The marching band plays loudly.",
    "Kai Shen cheers for the band.",
    "They celebrate National Day together."
  ],
  questions: [
    { question: "What does Ali wave?", answer: "Ali waves a small flag." },
    { question: "What does the flag have?", answer: "The flag has a bright star." },
    { question: "What plays loudly?", answer: "The marching band plays loudly." },
    { question: "Who cheers for the band?", answer: "Kai Shen cheers for the band." }
  ]
});

stories.push({
  title: "The School Library",
  content: [
    "Hana goes to the school library.",
    "She looks for a good book.",
    "Vinod is reading a thick book.",
    "Hana finds a book about cats.",
    "She sits on a soft chair.",
    "They read their books quietly."
  ],
  questions: [
    { question: "Where does Hana go?", answer: "Hana goes to the school library." },
    { question: "What kind of book does Hana find?", answer: "She finds a book about cats." },
    { question: "Who is reading a thick book?", answer: "Vinod is reading a thick book." },
    { question: "How do they read?", answer: "They read their books quietly." }
  ]
});

// LEVEL 1 - STAGE 2 (10 stories, 8 sentences, slightly longer but very simple)
stories.push({
  title: "Fruit Orchard",
  content: [
    "Amir visits an orchard with his father.",
    "They see many tall rambutan trees.",
    "The fruits are red and very sweet.",
    "Wei Ming joins them in the orchard.",
    "He brings a large bamboo basket.",
    "They pick the ripe fruits together.",
    "Amir eats a sweet, juicy rambutan.",
    "They have fun picking the fresh fruits."
  ],
  questions: [
    { question: "Where does Amir visit?", answer: "Amir visits an orchard with his father." },
    { question: "What trees do they see?", answer: "They see many tall rambutan trees." },
    { question: "What does Wei Ming bring?", answer: "He brings a large bamboo basket." },
    { question: "What does Amir eat?", answer: "Amir eats a sweet, juicy rambutan." }
  ]
});

stories.push({
  title: "The Rainy Afternoon",
  content: [
    "Dark clouds cover the afternoon sky.",
    "Heavy rain starts to fall down.",
    "Jia Yi opens her yellow umbrella.",
    "She walks home from the school.",
    "She sees a small, wet kitten.",
    "The kitten is hiding under a car.",
    "Jia Yi carries the kitten gently.",
    "She takes it home to keep warm."
  ],
  questions: [
    { question: "What covers the afternoon sky?", answer: "Dark clouds cover the afternoon sky." },
    { question: "What does Jia Yi open?", answer: "She opens her yellow umbrella." },
    { question: "What does she see hiding?", answer: "She sees a small, wet kitten." },
    { question: "Why does she take it home?", answer: "She takes it home to keep warm." }
  ]
});

stories.push({
  title: "A Trip to the Zoo",
  content: [
    "Adam goes to the National Zoo.",
    "He goes with his friend Surya.",
    "They see a large Malayan tiger.",
    "The tiger has orange and black stripes.",
    "Next, they look at the funny monkeys.",
    "The monkeys swing from the branches.",
    "They eat bananas in the tall trees.",
    "Adam and Surya take many nice photos."
  ],
  questions: [
    { question: "Where does Adam go?", answer: "Adam goes to the National Zoo." },
    { question: "Who does he go with?", answer: "He goes with his friend Surya." },
    { question: "What does the tiger look like?", answer: "The tiger has orange and black stripes." },
    { question: "What do the monkeys eat?", answer: "They eat bananas in the tall trees." }
  ]
});

stories.push({
  title: "The Supermarket Run",
  content: [
    "Kavitha helps her mother at the supermarket.",
    "She pushes the large shopping trolley.",
    "They need to buy some fresh vegetables.",
    "Kavitha picks some green spinach and carrots.",
    "She sees her classmate Zaid near the apples.",
    "They wave and say hello happily.",
    "Her mother buys a big watermelon.",
    "They pay at the front counter."
  ],
  questions: [
    { question: "Where does Kavitha help her mother?", answer: "She helps her mother at the supermarket." },
    { question: "What does Kavitha push?", answer: "She pushes the large shopping trolley." },
    { question: "Who does she see near the apples?", answer: "She sees her classmate Zaid." },
    { question: "What does her mother buy?", answer: "Her mother buys a big watermelon." }
  ]
});

stories.push({
  title: "The New Bicycle",
  content: [
    "Danish gets a new bicycle today.",
    "The bicycle is blue and very shiny.",
    "He wears a hard safety helmet.",
    "Danish rides his bike in the park.",
    "He meets his good friend Kishen.",
    "Kishen rides a red bicycle.",
    "They race each other along the path.",
    "Danish wins the fun race easily."
  ],
  questions: [
    { question: "What does Danish get today?", answer: "Danish gets a new bicycle today." },
    { question: "What colour is the bicycle?", answer: "The bicycle is blue and very shiny." },
    { question: "What does Danish wear?", answer: "He wears a hard safety helmet." },
    { question: "Who does he race with?", answer: "He races with his good friend Kishen." }
  ]
});

stories.push({
  title: "The Art Project",
  content: [
    "Pei Ling works on an art project.",
    "She draws a beautiful national flower.",
    "The hibiscus has five red petals.",
    "She uses a bright red crayon.",
    "Rayyan paints a picture of a kite.",
    "The kite is called a wau bulan.",
    "They show their lovely artwork to everyone.",
    "The teacher gives them gold stars."
  ],
  questions: [
    { question: "What does Pei Ling draw?", answer: "She draws a beautiful national flower." },
    { question: "How many petals does the hibiscus have?", answer: "The hibiscus has five red petals." },
    { question: "What does Rayyan paint?", answer: "Rayyan paints a picture of a kite." },
    { question: "What does the teacher give them?", answer: "The teacher gives them gold stars." }
  ]
});

stories.push({
  title: "Flying a Kite",
  content: [
    "The wind blows strongly in the field.",
    "Hakim brings out his large kite.",
    "The kite has a long, colourful tail.",
    "He runs fast to fly the kite.",
    "The kite goes up very high.",
    "Zi Xuan watches the kite fly.",
    "She claps her hands in joy.",
    "They watch the kite dance beautifully."
  ],
  questions: [
    { question: "Where does the wind blow strongly?", answer: "The wind blows strongly in the field." },
    { question: "What does the kite have?", answer: "The kite has a long, colourful tail." },
    { question: "Who watches the kite fly?", answer: "Zi Xuan watches the kite fly." },
    { question: "What does Zi Xuan do?", answer: "She claps her hands in joy." }
  ]
});

stories.push({
  title: "A Family Picnic",
  content: [
    "Yasmin goes for a fun picnic.",
    "Her family sits near a cool waterfall.",
    "They eat delicious fried rice and chicken.",
    "Yasmin plays in the clear water.",
    "Her friend Anjali joins them later.",
    "They build small boats from leaves.",
    "The leaf boats float down the stream.",
    "It is a perfect sunny day."
  ],
  questions: [
    { question: "Where does Yasmin's family sit?", answer: "Her family sits near a cool waterfall." },
    { question: "What do they eat?", answer: "They eat delicious fried rice and chicken." },
    { question: "Who joins them later?", answer: "Her friend Anjali joins them later." },
    { question: "What do they build from leaves?", answer: "They build small boats from leaves." }
  ]
});

stories.push({
  title: "The School Sports Day",
  content: [
    "Today is the school sports day.",
    "Aiman wears a bright yellow shirt.",
    "He gets ready for the running race.",
    "He stands at the starting line.",
    "The teacher blows the loud whistle.",
    "Aiman runs as fast as he can.",
    "He crosses the finish line first.",
    "His friends cheer for him loudly."
  ],
  questions: [
    { question: "What is happening today?", answer: "Today is the school sports day." },
    { question: "What does Aiman wear?", answer: "Aiman wears a bright yellow shirt." },
    { question: "What does the teacher do?", answer: "The teacher blows the loud whistle." },
    { question: "Who crosses the finish line first?", answer: "Aiman crosses the finish line first." }
  ]
});

stories.push({
  title: "Making Kuih",
  content: [
    "Sofea helps her grandmother in the kitchen.",
    "They make a traditional green kuih.",
    "Her grandmother mixes flour and coconut milk.",
    "Sofea adds some sweet palm sugar.",
    "They steam the kuih in a pot.",
    "The kitchen smells very delicious.",
    "They share the kuih with their neighbours.",
    "Everyone loves the tasty sweet treat."
  ],
  questions: [
    { question: "Who does Sofea help?", answer: "Sofea helps her grandmother in the kitchen." },
    { question: "What do they make?", answer: "They make a traditional green kuih." },
    { question: "What does Sofea add?", answer: "Sofea adds some sweet palm sugar." },
    { question: "Who do they share the kuih with?", answer: "They share the kuih with their neighbours." }
  ]
});

fs.writeFileSync('stories_chunk_1.json', JSON.stringify(stories, null, 2));
