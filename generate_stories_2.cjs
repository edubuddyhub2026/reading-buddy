const fs = require('fs');

const stories = [];

// LEVEL 1 - STAGE 3 (10 stories, 10 sentences, short length)
stories.push({
  title: "The Badminton Match",
  content: [
    "Aqil plays badminton at the community hall.",
    "He holds a new racket tightly.",
    "His friend Jun Hao hits the shuttlecock.",
    "The shuttlecock flies high in the air.",
    "Aqil jumps and hits it back fast.",
    "They play a very exciting match.",
    "Both boys sweat a lot from running.",
    "Jun Hao scores the winning point.",
    "They shake hands after the long game.",
    "They are good and fair players."
  ],
  questions: [
    { question: "Where does Aqil play badminton?", answer: "He plays badminton at the community hall." },
    { question: "What does Aqil hold tightly?", answer: "He holds a new racket tightly." },
    { question: "Who scores the winning point?", answer: "Jun Hao scores the winning point." },
    { question: "What do they do after the game?", answer: "They shake hands after the long game." }
  ]
});

stories.push({
  title: "Visiting the Mosque",
  content: [
    "Iman goes to the mosque with his father.",
    "He wears a clean white baju melayu.",
    "They take off their shoes at the door.",
    "The mosque is very large and beautiful.",
    "Many people gather inside for the prayer.",
    "Iman stands quietly next to his father.",
    "They listen to the imam speak clearly.",
    "After praying, they greet their friends warmly.",
    "Iman feels very calm and happy.",
    "They walk home together feeling peaceful."
  ],
  questions: [
    { question: "Who does Iman go to the mosque with?", answer: "He goes to the mosque with his father." },
    { question: "What does Iman wear?", answer: "He wears a clean white baju melayu." },
    { question: "What do they take off at the door?", answer: "They take off their shoes at the door." },
    { question: "How does Iman feel?", answer: "Iman feels very calm and happy." }
  ]
});

stories.push({
  title: "The Chinese New Year Dinner",
  content: [
    "Xin Yi is excited for the reunion dinner.",
    "Her family sits around a large round table.",
    "There is a lot of delicious food to eat.",
    "They toss the yee sang high in the air.",
    "Her grandfather gives her a red packet.",
    "She says thank you with a big smile.",
    "After dinner, they watch the fireworks outside.",
    "The bright fireworks light up the dark sky.",
    "Xin Yi wishes everyone a happy new year.",
    "It is a very joyful family celebration."
  ],
  questions: [
    { question: "What is Xin Yi excited for?", answer: "She is excited for the reunion dinner." },
    { question: "What do they toss high in the air?", answer: "They toss the yee sang high in the air." },
    { question: "What does her grandfather give her?", answer: "Her grandfather gives her a red packet." },
    { question: "What do they watch outside?", answer: "They watch the fireworks outside." }
  ]
});

stories.push({
  title: "A Visit to the Temple",
  content: [
    "Divya visits the beautiful Hindu temple.",
    "She wears a colourful traditional dress.",
    "Her mother carries a tray of fresh flowers.",
    "They walk up the stone stairs slowly.",
    "The temple is decorated with bright statues.",
    "Divya hears the lovely sound of bells ringing.",
    "They offer the sweet flowers to the priest.",
    "Divya prays quietly for her family's health.",
    "She receives a red dot on her forehead.",
    "The temple is a very peaceful place."
  ],
  questions: [
    { question: "Where does Divya visit?", answer: "Divya visits the beautiful Hindu temple." },
    { question: "What does her mother carry?", answer: "Her mother carries a tray of fresh flowers." },
    { question: "What does Divya hear?", answer: "She hears the lovely sound of bells ringing." },
    { question: "What does she receive on her forehead?", answer: "She receives a red dot on her forehead." }
  ]
});

stories.push({
  title: "The School Garden",
  content: [
    "Humaira joins the school gardening club.",
    "She helps to plant some bright sunflower seeds.",
    "Her classmate Kavin brings a green watering can.",
    "He waters the dry soil very carefully.",
    "They pull out the wild weeds together.",
    "A small butterfly lands on a green leaf.",
    "The teacher is proud of their hard work.",
    "The garden looks neat and beautiful now.",
    "They wash their dirty hands at the sink.",
    "Gardening is a fun way to learn."
  ],
  questions: [
    { question: "Which club does Humaira join?", answer: "She joins the school gardening club." },
    { question: "What does she help to plant?", answer: "She helps to plant some bright sunflower seeds." },
    { question: "What does Kavin bring?", answer: "He brings a green watering can." },
    { question: "What lands on a green leaf?", answer: "A small butterfly lands on a green leaf." }
  ]
});

stories.push({
  title: "The Nasi Lemak Stall",
  content: [
    "Rayyan wakes up early on Sunday morning.",
    "He walks to the famous nasi lemak stall.",
    "Many people are queuing up to buy food.",
    "The stall smells like fragrant coconut rice.",
    "He buys two packets wrapped in banana leaves.",
    "He also buys some spicy sambal and egg.",
    "Rayyan walks home quickly to eat breakfast.",
    "His sister Aina is waiting at the table.",
    "They eat the tasty nasi lemak together.",
    "It is their favourite breakfast meal."
  ],
  questions: [
    { question: "When does Rayyan wake up?", answer: "He wakes up early on Sunday morning." },
    { question: "What does the stall smell like?", answer: "It smells like fragrant coconut rice." },
    { question: "What is the food wrapped in?", answer: "It is wrapped in banana leaves." },
    { question: "Who is waiting at the table?", answer: "His sister Aina is waiting at the table." }
  ]
});

stories.push({
  title: "The Science Experiment",
  content: [
    "Jia Jun has a science class today.",
    "The teacher shows them a fun experiment.",
    "They mix vinegar and red food colouring.",
    "Adam adds some white baking soda slowly.",
    "The mixture bubbles up like a real volcano.",
    "The red foam flows over the plastic cup.",
    "All the students watch in great amazement.",
    "They learn how a chemical reaction works.",
    "Jia Jun writes the results in his book.",
    "Science class is always very exciting."
  ],
  questions: [
    { question: "What does the teacher show them?", answer: "The teacher shows them a fun experiment." },
    { question: "What does Adam add?", answer: "Adam adds some white baking soda slowly." },
    { question: "What does the mixture bubble up like?", answer: "It bubbles up like a real volcano." },
    { question: "Where does Jia Jun write the results?", answer: "He writes the results in his book." }
  ]
});

stories.push({
  title: "The Lost Kitten",
  content: [
    "Priya finds a small kitten near the drain.",
    "The kitten is wet and crying softly.",
    "She gently wraps it in a warm towel.",
    "Priya takes the kitten into her house.",
    "She gives it some fresh milk in a bowl.",
    "The kitten drinks the milk very fast.",
    "Later, her neighbour comes looking for the pet.",
    "Priya returns the cute kitten safely.",
    "The neighbour thanks Priya for her kindness.",
    "Priya feels happy to help the little animal."
  ],
  questions: [
    { question: "Where does Priya find the kitten?", answer: "She finds a small kitten near the drain." },
    { question: "What does she wrap the kitten in?", answer: "She gently wraps it in a warm towel." },
    { question: "What does the kitten drink?", answer: "It drinks fresh milk from a bowl." },
    { question: "Who does she return the kitten to?", answer: "She returns it to her neighbour." }
  ]
});

stories.push({
  title: "The Traditional Dance",
  content: [
    "Balqis practices a beautiful traditional dance.",
    "She wears a stunning golden headpiece.",
    "The music plays a slow, graceful rhythm.",
    "She moves her hands smoothly through the air.",
    "Mei Ling and Kavitha dance beside her.",
    "They practice hard for the school concert.",
    "On the concert night, they perform perfectly.",
    "The audience claps loudly for the talented girls.",
    "Their parents feel very proud of them.",
    "Dancing brings friends from different cultures together."
  ],
  questions: [
    { question: "What does Balqis practice?", answer: "She practices a beautiful traditional dance." },
    { question: "What does she wear on her head?", answer: "She wears a stunning golden headpiece." },
    { question: "Who dances beside her?", answer: "Mei Ling and Kavitha dance beside her." },
    { question: "Why do they practice hard?", answer: "They practice hard for the school concert." }
  ]
});

stories.push({
  title: "The Fishing Trip",
  content: [
    "Zaid goes fishing with his uncle today.",
    "They sit by a calm, quiet river.",
    "Zaid puts a small worm on his hook.",
    "He throws the line into the deep water.",
    "They wait patiently under a shady tree.",
    "Suddenly, Zaid feels a strong pull on his line.",
    "He reels it in with all his strength.",
    "He catches a large, shiny silver fish.",
    "His uncle smiles and pats his back.",
    "They bring the big fish home for dinner."
  ],
  questions: [
    { question: "Who does Zaid go fishing with?", answer: "He goes fishing with his uncle today." },
    { question: "What does Zaid put on his hook?", answer: "He puts a small worm on his hook." },
    { question: "What does he catch?", answer: "He catches a large, shiny silver fish." },
    { question: "What do they do with the big fish?", answer: "They bring the big fish home for dinner." }
  ]
});

// LEVEL 2 - STAGE 1 (10 stories, 8 sentences, slightly more advanced but simple)
stories.push({
  title: "The Mango Tree",
  content: [
    "Aiman looks at the tall mango tree in his garden.",
    "The yellow mangoes look very ripe and sweet.",
    "He uses a long bamboo pole to reach the high branches.",
    "Aiman carefully hooks a large mango and pulls it down.",
    "He catches the fruit before it hits the ground.",
    "His sister Alya helps him wash the sticky mangoes.",
    "They cut the fresh fruit into small, bite-sized pieces.",
    "The juicy mangoes are a perfect afternoon snack."
  ],
  questions: [
    { question: "What tree is in Aiman's garden?", answer: "There is a tall mango tree in his garden." },
    { question: "What does he use to reach the branches?", answer: "He uses a long bamboo pole." },
    { question: "Who helps him wash the mangoes?", answer: "His sister Alya helps him wash the mangoes." },
    { question: "What are the juicy mangoes perfect for?", answer: "They are a perfect afternoon snack." }
  ]
});

stories.push({
  title: "The Lost Wallet",
  content: [
    "Arjun was walking home from the local grocery shop.",
    "He noticed a brown leather wallet on the pavement.",
    "Arjun picked it up and saw an identity card inside.",
    "The card belonged to a man who lived nearby.",
    "He walked to the address and knocked on the door.",
    "A relieved uncle thanked Arjun for returning his wallet.",
    "He praised Arjun for being an honest and good boy.",
    "Arjun felt very proud to help someone in his neighbourhood."
  ],
  questions: [
    { question: "What did Arjun notice on the pavement?", answer: "He noticed a brown leather wallet on the pavement." },
    { question: "What did he see inside the wallet?", answer: "He saw an identity card inside." },
    { question: "Who did the wallet belong to?", answer: "It belonged to a man who lived nearby." },
    { question: "How did the uncle feel?", answer: "He felt relieved and thanked Arjun." }
  ]
});

stories.push({
  title: "The Batik Painting",
  content: [
    "Hana attended a fun batik painting class during the holidays.",
    "She received a white cloth with beautiful wax patterns.",
    "Hana used a small brush to apply bright, colourful dyes.",
    "She painted a lovely hibiscus flower with deep red colours.",
    "The dye spread smoothly across the soft cotton fabric.",
    "Her friend Xin Yi painted a gorgeous blue butterfly design.",
    "The teacher helped them dry their amazing artwork outside.",
    "Hana hung her beautiful batik painting in her bedroom."
  ],
  questions: [
    { question: "What class did Hana attend?", answer: "She attended a fun batik painting class." },
    { question: "What did she use to apply the dyes?", answer: "She used a small brush." },
    { question: "What did Xin Yi paint?", answer: "Xin Yi painted a gorgeous blue butterfly design." },
    { question: "Where did Hana hang her painting?", answer: "She hung her beautiful batik painting in her bedroom." }
  ]
});

stories.push({
  title: "The Rainy Flood",
  content: [
    "It rained continuously for three days in the quiet village.",
    "The river water rose quickly and flooded the nearby roads.",
    "Amir and his family moved their belongings to higher ground.",
    "They stayed safely inside the community hall with other villagers.",
    "People from different races helped to distribute hot meals.",
    "Amir shared his biscuits with a young Indian boy.",
    "When the floodwater receded, everyone helped clean the dirty houses.",
    "The villagers showed great unity during the difficult time."
  ],
  questions: [
    { question: "How long did it rain continuously?", answer: "It rained continuously for three days." },
    { question: "Where did Amir's family stay?", answer: "They stayed safely inside the community hall." },
    { question: "Who did Amir share his biscuits with?", answer: "He shared his biscuits with a young Indian boy." },
    { question: "What did everyone do when the floodwater receded?", answer: "Everyone helped clean the dirty houses." }
  ]
});

stories.push({
  title: "The Spelling Bee",
  content: [
    "Nisha participated in the annual school spelling bee competition.",
    "She studied difficult words every night before she slept.",
    "On the stage, Nisha felt nervous but took a deep breath.",
    "The judge asked her to spell the word extraordinary.",
    "She spoke each letter clearly into the microphone.",
    "The judge smiled and announced that she was correct.",
    "Her classmate Adam clapped enthusiastically from the audience.",
    "Nisha won the silver trophy for her excellent spelling skills."
  ],
  questions: [
    { question: "What competition did Nisha participate in?", answer: "She participated in the annual school spelling bee." },
    { question: "When did she study difficult words?", answer: "She studied difficult words every night." },
    { question: "What word did the judge ask her to spell?", answer: "The judge asked her to spell the word extraordinary." },
    { question: "What prize did Nisha win?", answer: "Nisha won the silver trophy." }
  ]
});

stories.push({
  title: "The Kampung House",
  content: [
    "Kai Shen visited a traditional wooden kampung house.",
    "The house was built high on strong wooden stilts.",
    "He climbed the wooden stairs carefully to enter the home.",
    "His friend Hakim showed him the beautiful, carved windows.",
    "They sat on the cool bamboo floor in the living room.",
    "Hakim's mother served them some sweet coconut water.",
    "They enjoyed the gentle breeze blowing through the open windows.",
    "Kai Shen loved the peaceful atmosphere of the traditional house."
  ],
  questions: [
    { question: "What did Kai Shen visit?", answer: "He visited a traditional wooden kampung house." },
    { question: "How was the house built?", answer: "It was built high on strong wooden stilts." },
    { question: "What did Hakim's mother serve them?", answer: "She served them some sweet coconut water." },
    { question: "What did they enjoy blowing through the windows?", answer: "They enjoyed the gentle breeze blowing through the open windows." }
  ]
});

stories.push({
  title: "The Bird Park",
  content: [
    "Yasmin went to the famous Kuala Lumpur Bird Park.",
    "She walked under a giant net filled with colourful birds.",
    "A bright pink flamingo stood on one leg near the pond.",
    "Yasmin saw a magnificent hornbill with a large, curved beak.",
    "She fed some seeds to the friendly, chattering parrots.",
    "A blue peacock suddenly opened its stunning tail feathers.",
    "Yasmin quickly took a photograph of the beautiful display.",
    "It was a magical experience surrounded by wonderful wildlife."
  ],
  questions: [
    { question: "Where did Yasmin go?", answer: "She went to the famous Kuala Lumpur Bird Park." },
    { question: "What did the pink flamingo do?", answer: "It stood on one leg near the pond." },
    { question: "What did she feed the parrots?", answer: "She fed some seeds to the friendly parrots." },
    { question: "What opened its stunning tail feathers?", answer: "A blue peacock suddenly opened its stunning tail feathers." }
  ]
});

stories.push({
  title: "The Recycled Robot",
  content: [
    "Vinod collected empty plastic bottles and cardboard boxes.",
    "He wanted to build a robot for a recycling project.",
    "He glued the boxes to make the robot's body and head.",
    "Vinod used two shiny bottle caps for the robot's eyes.",
    "His friend Jia Yi helped him paint the robot silver.",
    "They presented their creative project to the science class.",
    "The teacher praised their excellent teamwork and innovative idea.",
    "They learned that recycling can be very fun and useful."
  ],
  questions: [
    { question: "What did Vinod collect?", answer: "He collected empty plastic bottles and cardboard boxes." },
    { question: "What did he want to build?", answer: "He wanted to build a robot for a recycling project." },
    { question: "Who helped him paint the robot?", answer: "His friend Jia Yi helped him paint the robot." },
    { question: "What did the teacher praise?", answer: "The teacher praised their excellent teamwork and innovative idea." }
  ]
});

stories.push({
  title: "The Roti Canai Breakfast",
  content: [
    "Ali and his father went to the busy mamak stall.",
    "They ordered two crispy roti canai for their delicious breakfast.",
    "Ali watched the man flip the dough high in the air.",
    "The dough stretched wide before landing back on the counter.",
    "The cook fried the roti until it was golden brown.",
    "They dipped the hot roti into some mild dhal curry.",
    "Ali drank a glass of sweet, frothy teh tarik.",
    "It was the perfect start to a relaxing weekend morning."
  ],
  questions: [
    { question: "Where did Ali and his father go?", answer: "They went to the busy mamak stall." },
    { question: "What did they order?", answer: "They ordered two crispy roti canai." },
    { question: "What did they dip the hot roti into?", answer: "They dipped the hot roti into some mild dhal curry." },
    { question: "What did Ali drink?", answer: "Ali drank a glass of sweet, frothy teh tarik." }
  ]
});

stories.push({
  title: "The Library Book",
  content: [
    "Sofea searched for a mystery book in the school library.",
    "She checked the shelves but could not find the title.",
    "She asked the helpful librarian, Mrs Tan, for some assistance.",
    "Mrs Tan checked the computer system to locate the book.",
    "The book was on the bottom shelf in the corner.",
    "Sofea thanked Mrs Tan politely for her kind help.",
    "She sat in a quiet corner to start reading immediately.",
    "The mystery story was very exciting from the first page."
  ],
  questions: [
    { question: "What kind of book did Sofea search for?", answer: "She searched for a mystery book." },
    { question: "Who did Sofea ask for assistance?", answer: "She asked the helpful librarian, Mrs Tan." },
    { question: "Where was the book located?", answer: "The book was on the bottom shelf in the corner." },
    { question: "How was the mystery story?", answer: "The mystery story was very exciting from the first page." }
  ]
});

fs.writeFileSync('stories_chunk_2.json', JSON.stringify(stories, null, 2));
