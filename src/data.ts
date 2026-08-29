export interface StoryQuestion {
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
    stories: [
  {
    "title": "THE RED BALL",
    "image": "/story 1 RED BALL.png",
    "content": [
      "Sam has a big red ball.",
      "He plays in the sun.",
      "The ball rolls far away.",
      "Sam runs fast to get it.",
      "A little dog finds the ball.",
      "They play a fun game together."
    ],
    "questions": [
      {
        "question": "What colour is the ball?",
        "answer": "The ball is red."
      },
      {
        "question": "Where does Sam play?",
        "answer": "Sam plays in the sun."
      },
      {
        "question": "Who finds the ball?",
        "answer": "A little dog finds the ball."
      },
      {
        "question": "Do they have fun?",
        "answer": "Yes, they play a fun game."
      }
    ]
  },
  {
    "title": "A PET CAT",
    "image": "/story 2 A PET CAT.png",
    "content": [
      "Aina has a soft pet cat.",
      "The cat is very fluffy.",
      "It likes to drink fresh milk.",
      "Aina rubs the cat softly.",
      "The cat purrs very loudly.",
      "It sleeps on her warm bed."
    ],
    "questions": [
      {
        "question": "Who has a pet cat?",
        "answer": "Aina has a pet cat."
      },
      {
        "question": "Is the cat fluffy?",
        "answer": "Yes, the cat is very fluffy."
      },
      {
        "question": "What does the cat drink?",
        "answer": "The cat drinks fresh milk."
      },
      {
        "question": "Where does the cat sleep?",
        "answer": "It sleeps on her warm bed."
      }
    ]
  },
  {
    "title": "THE BIG BUS",
    "image": "/story 3 THE BIG BUS.png",
    "content": [
      "Tom waits for the big bus.",
      "The bus is bright yellow.",
      "It stops at the corner.",
      "Tom gets on the bus.",
      "He sits near the window.",
      "The bus goes to the school."
    ],
    "questions": [
      {
        "question": "What is Tom waiting for?",
        "answer": "Tom waits for the big bus."
      },
      {
        "question": "What colour is the bus?",
        "answer": "The bus is bright yellow."
      },
      {
        "question": "Where does Tom sit?",
        "answer": "He sits near the window."
      },
      {
        "question": "Where does the bus go?",
        "answer": "The bus goes to the school."
      }
    ]
  },
  {
    "title": "A RAINY DAY",
    "image": "/story 4 RAINY DAY.png",
    "content": [
      "Look at the dark grey clouds.",
      "The rain starts to fall.",
      "Leo puts on his green boots.",
      "He walks in the wet grass.",
      "Leo jumps in a big puddle.",
      "Splash goes the cold water!"
    ],
    "questions": [
      {
        "question": "What colour are the clouds?",
        "answer": "The clouds are dark grey."
      },
      {
        "question": "What does Leo put on?",
        "answer": "Leo puts on his green boots."
      },
      {
        "question": "Where does Leo jump?",
        "answer": "He jumps in a big puddle."
      },
      {
        "question": "What sound does the water make?",
        "answer": "The water goes splash."
      }
    ]
  },
  {
    "title": "THE FAST CAR",
    "image": "/story 5 THE FAST CAR.png",
    "content": [
      "Dad drives a fast blue car.",
      "We go for a long ride.",
      "The car goes up the hill.",
      "We look out the glass window.",
      "We see some tall green trees.",
      "The ride is very fun."
    ],
    "questions": [
      {
        "question": "Who drives the car?",
        "answer": "Dad drives the car."
      },
      {
        "question": "What colour is the car?",
        "answer": "The car is blue."
      },
      {
        "question": "Where does the car go?",
        "answer": "The car goes up the hill."
      },
      {
        "question": "What do they see?",
        "answer": "They see some tall green trees."
      }
    ]
  },
  {
    "title": "THE FROG",
    "image": "/story 6 THE FROG.png",
    "content": [
      "A small green frog sits there.",
      "It sits on a lily pad.",
      "A fly buzzes by the frog.",
      "The frog uses its long tongue.",
      "It catches the small fly.",
      "The frog hops into the pond."
    ],
    "questions": [
      {
        "question": "Where does the frog sit?",
        "answer": "The frog sits on a lily pad."
      },
      {
        "question": "What buzzes by the frog?",
        "answer": "A fly buzzes by the frog."
      },
      {
        "question": "What does the frog catch?",
        "answer": "It catches the small fly."
      },
      {
        "question": "Where does the frog hop?",
        "answer": "The frog hops into the pond."
      }
    ]
  },
  {
    "title": "THE SUN",
    "image": "/story 7 THE SUN.png",
    "content": [
      "The sun is up in the sky.",
      "It is very bright and hot.",
      "The plants need the sun.",
      "A flower opens its petals.",
      "A bird sings a sweet song.",
      "It is a lovely sunny day."
    ],
    "questions": [
      {
        "question": "Where is the sun?",
        "answer": "The sun is up in the sky."
      },
      {
        "question": "What do the plants need?",
        "answer": "The plants need the sun."
      },
      {
        "question": "What does the flower do?",
        "answer": "A flower opens its petals."
      },
      {
        "question": "Who sings a sweet song?",
        "answer": "A bird sings a sweet song."
      }
    ]
  },
  {
    "title": "THE MOON",
    "image": "/story 8 THE MOON.png",
    "content": [
      "The sky is very dark now.",
      "The white moon is up high.",
      "It shines all through the night.",
      "The stars twinkle in the dark.",
      "It is time to sleep.",
      "We close our tired eyes."
    ],
    "questions": [
      {
        "question": "What colour is the moon?",
        "answer": "The moon is white."
      },
      {
        "question": "When does the moon shine?",
        "answer": "It shines all through the night."
      },
      {
        "question": "What do the stars do?",
        "answer": "The stars twinkle in the dark."
      },
      {
        "question": "What is it time to do?",
        "answer": "It is time to sleep."
      }
    ]
  },
  {
    "title": "THE APPLE",
    "image": "/story 9 THE APPLE.png",
    "content": [
      "An apple is on the tree.",
      "It is a big red apple.",
      "The wind blows very hard.",
      "The apple falls to the grass.",
      "Max picks up the sweet apple.",
      "He eats the apple for a snack."
    ],
    "questions": [
      {
        "question": "Where is the apple?",
        "answer": "An apple is on the tree."
      },
      {
        "question": "What colour is the apple?",
        "answer": "It is a big red apple."
      },
      {
        "question": "Where does the apple fall?",
        "answer": "The apple falls to the grass."
      },
      {
        "question": "Who picks up the apple?",
        "answer": "Max picks up the sweet apple."
      }
    ]
  },
  {
    "title": "THE PARK",
    "image": "/story 10 THE PARK.png",
    "content": [
      "We go to the fun park.",
      "I run on the green grass.",
      "My friend pushes the high swing.",
      "I go up in the air.",
      "We slide down the slide.",
      "We love the fun park."
    ],
    "questions": [
      {
        "question": "Where do we go?",
        "answer": "We go to the fun park."
      },
      {
        "question": "What does my friend push?",
        "answer": "My friend pushes the high swing."
      },
      {
        "question": "Where do we slide?",
        "answer": "We slide down the slide."
      },
      {
        "question": "Do we like the park?",
        "answer": "Yes, we love the fun park."
      }
    ]
  },
  {
    "title": "THE BLUE FISH",
    "image": "/story 11 THE BLUE FISH.png",
    "content": [
      "A small blue fish swims fast.",
      "It lives in the cool water.",
      "The fish has a shiny tail.",
      "It looks for some food.",
      "The fish sees a green plant.",
      "It hides under the green plant.",
      "A big fish swims past it.",
      "The blue fish is safe now."
    ],
    "questions": [
      {
        "question": "What colour is the small fish?",
        "answer": "The small fish is blue."
      },
      {
        "question": "Where does the fish live?",
        "answer": "It lives in the cool water."
      },
      {
        "question": "Where does the fish hide?",
        "answer": "It hides under the green plant."
      },
      {
        "question": "Is the blue fish safe?",
        "answer": "Yes, the blue fish is safe now."
      }
    ]
  },
  {
    "title": "THE BIRD NEST",
    "image": "/story 12 THE BIRD NEST.png",
    "content": [
      "A brown bird flies up high.",
      "It carries a twig in its beak.",
      "The bird lands on a tree branch.",
      "It is making a safe nest.",
      "The nest will hold the eggs.",
      "The bird works very hard all day.",
      "Soon the nest is all done.",
      "The bird rests in its nest."
    ],
    "questions": [
      {
        "question": "What colour is the bird?",
        "answer": "The bird is brown."
      },
      {
        "question": "What does it carry?",
        "answer": "It carries a twig in its beak."
      },
      {
        "question": "What is the bird making?",
        "answer": "It is making a safe nest."
      },
      {
        "question": "Where does the bird rest?",
        "answer": "The bird rests in its nest."
      }
    ]
  },
  {
    "title": "THE KITE",
    "image": "/story 13 THE KITE.png",
    "content": [
      "The wind is blowing today.",
      "Ben takes his kite outside.",
      "The kite is red and yellow.",
      "Ben runs fast with the kite.",
      "The kite goes up in the sky.",
      "It flies higher than the trees.",
      "Ben holds the string tight.",
      "He loves to fly his kite."
    ],
    "questions": [
      {
        "question": "What is Ben doing?",
        "answer": "Ben takes his kite outside."
      },
      {
        "question": "What colour is the kite?",
        "answer": "The kite is red and yellow."
      },
      {
        "question": "Where does the kite go?",
        "answer": "The kite goes up in the sky."
      },
      {
        "question": "Does Ben hold the string tight?",
        "answer": "Yes, Ben holds the string tight."
      }
    ]
  },
  {
    "title": "A HAPPY DOG",
    "image": "/story 14 A HAPPY DOG.png",
    "content": [
      "Buster is a happy brown dog.",
      "He wags his tail very fast.",
      "Buster loves to chew his bone.",
      "He runs around the back yard.",
      "Buster barks at a small squirrel.",
      "The squirrel climbs up a tree.",
      "Buster cannot climb the tree.",
      "He goes to sleep on the grass."
    ],
    "questions": [
      {
        "question": "Who is Buster?",
        "answer": "Buster is a happy brown dog."
      },
      {
        "question": "What does Buster love to do?",
        "answer": "Buster loves to chew his bone."
      },
      {
        "question": "What does Buster bark at?",
        "answer": "He barks at a small squirrel."
      },
      {
        "question": "Where does Buster go to sleep?",
        "answer": "He goes to sleep on the grass."
      }
    ]
  },
  {
    "title": "THE SNOWMAN",
    "image": "/story 15 THE SNOWMAN.png",
    "content": [
      "Cold snow falls on the ground.",
      "The yard is very white.",
      "Emma rolls a big ball of snow.",
      "She makes a tall snowman.",
      "Emma gives him a carrot nose.",
      "She gives him a red scarf.",
      "The snowman looks very happy.",
      "Emma plays with him all day."
    ],
    "questions": [
      {
        "question": "What is falling on the ground?",
        "answer": "Cold snow falls on the ground."
      },
      {
        "question": "What does Emma make?",
        "answer": "She makes a tall snowman."
      },
      {
        "question": "What does she use for a nose?",
        "answer": "She gives him a carrot nose."
      },
      {
        "question": "What colour is the scarf?",
        "answer": "She gives him a red scarf."
      }
    ]
  },
  {
    "title": "THE LITTLE DUCK",
    "image": "/story 16 THE LITTLE DUCK.png",
    "content": [
      "A little duck walks to the pond.",
      "It has soft yellow feathers.",
      "The duck jumps into the water.",
      "It swims with its webbed feet.",
      "The duck looks for some bugs.",
      "It drinks the cool water.",
      "The duck gives a loud quack.",
      "It swims back to its mother."
    ],
    "questions": [
      {
        "question": "Where does the duck walk?",
        "answer": "A little duck walks to the pond."
      },
      {
        "question": "What colour are its feathers?",
        "answer": "It has soft yellow feathers."
      },
      {
        "question": "What does the duck look for?",
        "answer": "The duck looks for some bugs."
      },
      {
        "question": "Who does it swim back to?",
        "answer": "It swims back to its mother."
      }
    ]
  },
  {
    "title": "THE BEAR",
    "image": "/story 17 THE BEAR.png",
    "content": [
      "A big brown bear wakes up.",
      "He is very hungry today.",
      "The bear looks for some berries.",
      "He finds a bush with red berries.",
      "The bear eats a lot of berries.",
      "His tummy is full now.",
      "He sits under a tall tree.",
      "The bear takes a long nap."
    ],
    "questions": [
      {
        "question": "Who wakes up?",
        "answer": "A big brown bear wakes up."
      },
      {
        "question": "What does the bear look for?",
        "answer": "The bear looks for some berries."
      },
      {
        "question": "Are the berries red?",
        "answer": "Yes, he finds a bush with red berries."
      },
      {
        "question": "What does the bear do after eating?",
        "answer": "The bear takes a long nap."
      }
    ]
  },
  {
    "title": "THE SCHOOL BAG",
    "image": "/story 18 THE SCHOOL BAG.png",
    "content": [
      "Lily packs her school bag.",
      "She puts in a red book.",
      "She puts in two pencils.",
      "Lily takes an apple for a snack.",
      "Her bag is heavy now.",
      "She puts the bag on her back.",
      "Lily walks to her school.",
      "She is ready to learn today."
    ],
    "questions": [
      {
        "question": "What does Lily pack?",
        "answer": "Lily packs her school bag."
      },
      {
        "question": "What colour is the book?",
        "answer": "She puts in a red book."
      },
      {
        "question": "What does Lily take for a snack?",
        "answer": "Lily takes an apple for a snack."
      },
      {
        "question": "Where does Lily walk?",
        "answer": "Lily walks to her school."
      }
    ]
  },
  {
    "title": "THE NEW BIKE",
    "image": "/story 19 THE NEW BIKE.png",
    "content": [
      "Ryan has a new blue bike.",
      "The bike has two shiny wheels.",
      "Ryan wears a green helmet.",
      "He gets on the blue bike.",
      "Ryan pushes the pedals down.",
      "The bike moves very fast.",
      "He rides down the street.",
      "Ryan loves his new bike."
    ],
    "questions": [
      {
        "question": "What colour is the new bike?",
        "answer": "Ryan has a new blue bike."
      },
      {
        "question": "What does Ryan wear?",
        "answer": "Ryan wears a green helmet."
      },
      {
        "question": "What does Ryan push down?",
        "answer": "Ryan pushes the pedals down."
      },
      {
        "question": "Where does he ride?",
        "answer": "He rides down the street."
      }
    ]
  },
  {
    "title": "THE TRAIN",
    "image": "/story 20 THE TRAIN.png",
    "content": [
      "The long train comes down the track.",
      "It makes a loud whistle sound.",
      "The train stops at the station.",
      "People wait on the platform.",
      "They step onto the train.",
      "The doors close tight.",
      "The train starts to move.",
      "It travels to the city."
    ],
    "questions": [
      {
        "question": "Where does the train come from?",
        "answer": "The train comes down the track."
      },
      {
        "question": "What sound does it make?",
        "answer": "It makes a loud whistle sound."
      },
      {
        "question": "Where does the train stop?",
        "answer": "The train stops at the station."
      },
      {
        "question": "Where does the train travel to?",
        "answer": "It travels to the city."
      }
    ]
  },
  {
    "title": "THE BAKERY",
    "image": "/story 21 THE BAKERY.png",
    "content": [
      "Sara walks to the bakery.",
      "She smells the fresh bread.",
      "The baker is wearing a white hat.",
      "He pulls out a tray of buns.",
      "The buns are warm and soft.",
      "Sara buys a sweet bun.",
      "She pays with a shiny coin.",
      "The baker says thank you.",
      "Sara takes a big bite.",
      "The sweet bun is very tasty."
    ],
    "questions": [
      {
        "question": "Where does Sara walk?",
        "answer": "Sara walks to the bakery."
      },
      {
        "question": "What does she smell?",
        "answer": "She smells the fresh bread."
      },
      {
        "question": "What does Sara buy?",
        "answer": "Sara buys a sweet bun."
      },
      {
        "question": "Is the sweet bun tasty?",
        "answer": "Yes, the sweet bun is very tasty."
      }
    ]
  },
  {
    "title": "THE FARM",
    "image": "/story 22 THE FARM.png",
    "content": [
      "Jack visits the farm today.",
      "He sees a big red barn.",
      "A cow is eating the green grass.",
      "The cow says moo very loudly.",
      "Jack walks to the pig pen.",
      "The pigs roll in the brown mud.",
      "A rooster crows on the fence.",
      "Jack feeds some grain to the hens.",
      "The hens cluck and peck the ground.",
      "Jack has fun at the farm."
    ],
    "questions": [
      {
        "question": "Where does Jack visit?",
        "answer": "Jack visits the farm today."
      },
      {
        "question": "What is the cow doing?",
        "answer": "A cow is eating the green grass."
      },
      {
        "question": "Where do the pigs roll?",
        "answer": "The pigs roll in the brown mud."
      },
      {
        "question": "Who does Jack feed?",
        "answer": "Jack feeds some grain to the hens."
      }
    ]
  },
  {
    "title": "THE BEACH",
    "image": "/story 23 THE BEACH.png",
    "content": [
      "Anna goes to the sunny beach.",
      "She feels the hot sand.",
      "The waves crash on the shore.",
      "Anna finds a pretty pink shell.",
      "She puts it in her pocket.",
      "Anna builds a big sandcastle.",
      "She puts a flag on the top.",
      "A crab walks by the castle.",
      "Anna watches the crab hide.",
      "She loves the sunny beach."
    ],
    "questions": [
      {
        "question": "Where does Anna go?",
        "answer": "Anna goes to the sunny beach."
      },
      {
        "question": "What does she find?",
        "answer": "Anna finds a pretty pink shell."
      },
      {
        "question": "What does Anna build?",
        "answer": "Anna builds a big sandcastle."
      },
      {
        "question": "What walks by the castle?",
        "answer": "A crab walks by the castle."
      }
    ]
  },
  {
    "title": "THE LIBRARY",
    "image": "/story 24 THE LIBRARY.png",
    "content": [
      "Mark goes to the town library.",
      "It is very quiet inside.",
      "There are books on the shelves.",
      "Mark looks for a book about cars.",
      "He finds a big red book.",
      "Mark sits on a soft chair.",
      "He opens the book to read.",
      "He looks at the colourful pictures.",
      "The librarian smiles at Mark.",
      "Mark takes the book home."
    ],
    "questions": [
      {
        "question": "Where does Mark go?",
        "answer": "Mark goes to the town library."
      },
      {
        "question": "What kind of book does he look for?",
        "answer": "Mark looks for a book about cars."
      },
      {
        "question": "Where does Mark sit?",
        "answer": "Mark sits on a soft chair."
      },
      {
        "question": "Who smiles at Mark?",
        "answer": "The librarian smiles at Mark."
      }
    ]
  },
  {
    "title": "THE PET SHOP",
    "image": "/story 25 THE PET SHOP.png",
    "content": [
      "Zoe walks into the pet shop.",
      "She hears a parrot talk.",
      "The parrot says hello to Zoe.",
      "Zoe looks at the fish tanks.",
      "A yellow fish swims around.",
      "Zoe sees a fluffy white rabbit.",
      "The rabbit twitches its nose.",
      "She feeds a carrot to the rabbit.",
      "The rabbit eats it very fast.",
      "Zoe waves goodbye to the pets."
    ],
    "questions": [
      {
        "question": "Where does Zoe walk?",
        "answer": "Zoe walks into the pet shop."
      },
      {
        "question": "What does the parrot say?",
        "answer": "The parrot says hello to Zoe."
      },
      {
        "question": "What does the rabbit twitch?",
        "answer": "The rabbit twitches its nose."
      },
      {
        "question": "What does Zoe feed the rabbit?",
        "answer": "She feeds a carrot to the rabbit."
      }
    ]
  },
  {
    "title": "THE TOY STORE",
    "image": "/story 26 THE TOY STORE.png",
    "content": [
      "Leo goes to the toy store.",
      "The store is very big.",
      "He sees a tall robot toy.",
      "The robot has flashing lights.",
      "Leo sees a box of blocks.",
      "He wants to build a tall tower.",
      "He picks up a soft teddy bear.",
      "The bear is very cuddly.",
      "Leo buys the box of blocks.",
      "He will play with them at home."
    ],
    "questions": [
      {
        "question": "Where does Leo go?",
        "answer": "Leo goes to the toy store."
      },
      {
        "question": "What does the robot have?",
        "answer": "The robot has flashing lights."
      },
      {
        "question": "What does Leo want to build?",
        "answer": "He wants to build a tall tower."
      },
      {
        "question": "What does Leo buy?",
        "answer": "Leo buys the box of blocks."
      }
    ]
  },
  {
    "title": "THE GARDEN",
    "image": "/story 27 THE GARDEN.png",
    "content": [
      "Grace steps into the garden.",
      "She has a small watering can.",
      "The plants are very dry.",
      "Grace pours water on the soil.",
      "The flowers look very happy.",
      "A bee buzzes on a red rose.",
      "The bee is looking for nectar.",
      "Grace spots a green caterpillar.",
      "It rests on a big leaf.",
      "The garden is full of life."
    ],
    "questions": [
      {
        "question": "What does Grace have?",
        "answer": "She has a small watering can."
      },
      {
        "question": "Are the plants dry?",
        "answer": "Yes, the plants are very dry."
      },
      {
        "question": "What is the bee looking for?",
        "answer": "The bee is looking for nectar."
      },
      {
        "question": "Where does the caterpillar rest?",
        "answer": "It rests on a big leaf."
      }
    ]
  },
  {
    "title": "THE PICNIC",
    "image": "/story 28 THE PICNIC.png",
    "content": [
      "The family goes for a picnic.",
      "They sit on a blanket.",
      "The grass is very soft.",
      "Dad opens the big basket.",
      "He takes out the sandwiches.",
      "Mum pours some apple juice.",
      "They eat their tasty lunch.",
      "A small ant finds a crumb.",
      "The ant carries it away.",
      "The family has a great time."
    ],
    "questions": [
      {
        "question": "Where does the family sit?",
        "answer": "They sit on a blanket."
      },
      {
        "question": "What does Dad open?",
        "answer": "Dad opens the big basket."
      },
      {
        "question": "What does Mum pour?",
        "answer": "Mum pours some apple juice."
      },
      {
        "question": "What does the ant find?",
        "answer": "A small ant finds a crumb."
      }
    ]
  },
  {
    "title": "THE FIRE ENGINE",
    "image": "/story 29 THE FIRE ENGINE.png",
    "content": [
      "A loud siren fills the air.",
      "A red fire engine speeds by.",
      "The lights flash very bright.",
      "The firefighters are inside.",
      "They wear thick yellow coats.",
      "They are going to help people.",
      "The engine stops down the street.",
      "They pull out a long hose.",
      "They spray water on the smoke.",
      "The firefighters are very brave."
    ],
    "questions": [
      {
        "question": "What fills the air?",
        "answer": "A loud siren fills the air."
      },
      {
        "question": "Who is inside the fire engine?",
        "answer": "The firefighters are inside."
      },
      {
        "question": "What do they wear?",
        "answer": "They wear thick yellow coats."
      },
      {
        "question": "What do they spray water on?",
        "answer": "They spray water on the smoke."
      }
    ]
  },
  {
    "title": "THE MAGIC TRICK",
    "image": "/story 30 THE MAGIC TRICK.png",
    "content": [
      "Toby goes to a fun magic show.",
      "A magician stands on the stage.",
      "He holds a tall black hat.",
      "The hat looks completely empty.",
      "The magician taps it with a wand.",
      "He says the magic word loud.",
      "A white dove flies out.",
      "The crowd claps their hands.",
      "Toby smiles at the magic trick.",
      "He wants to learn magic too."
    ],
    "questions": [
      {
        "question": "Where does Toby go?",
        "answer": "Toby goes to a fun magic show."
      },
      {
        "question": "What does the magician hold?",
        "answer": "He holds a tall black hat."
      },
      {
        "question": "What flies out of the hat?",
        "answer": "A white dove flies out."
      },
      {
        "question": "What does Toby want to learn?",
        "answer": "He wants to learn magic too."
      }
    ]
  }
]
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
    stories: [
  {
    "title": "THE LOST KEY",
    "image": "/story 31 THE LOST KEY.png",
    "content": [
      "Oliver walked to his front door after school.",
      "He reached into his pocket to find his key.",
      "Oliver realised that his pocket was completely empty.",
      "He carefully retraced his steps down the path.",
      "He looked near the big oak tree.",
      "Suddenly, he saw something shiny in the grass.",
      "It was his silver key lying on the ground.",
      "Oliver picked it up and went inside happily."
    ],
    "questions": [
      {
        "question": "What did Oliver look for in his pocket?",
        "answer": "He looked for his key."
      },
      {
        "question": "Was his pocket empty?",
        "answer": "Yes, his pocket was completely empty."
      },
      {
        "question": "Where did he find the key?",
        "answer": "He found it lying on the ground in the grass."
      },
      {
        "question": "Did Oliver go inside happily?",
        "answer": "Yes, he picked it up and went inside happily."
      }
    ]
  },
  {
    "title": "THE ART CLASS",
    "image": "/story 32 THE ART CLASS.png",
    "content": [
      "Sophia wore her apron for the art class.",
      "She picked up a brush and some blue paint.",
      "She wanted to paint a picture of the ocean.",
      "Sophia painted big waves on the white canvas.",
      "She added a bright yellow sun in the sky.",
      "Her teacher praised her beautiful painting.",
      "Sophia felt very proud of her artwork.",
      "She hung the painting on the classroom wall."
    ],
    "questions": [
      {
        "question": "What did Sophia wear for art class?",
        "answer": "She wore her apron."
      },
      {
        "question": "What did she want to paint?",
        "answer": "She wanted to paint a picture of the ocean."
      },
      {
        "question": "What did she add in the sky?",
        "answer": "She added a bright yellow sun in the sky."
      },
      {
        "question": "Where did she hang the painting?",
        "answer": "She hung the painting on the classroom wall."
      }
    ]
  },
  {
    "title": "THE TREEHOUSE",
    "image": "/story 33 THE TREE HOUSE.png",
    "content": [
      "Ethan and his dad built a wooden treehouse.",
      "They used thick boards and long shiny nails.",
      "They placed it high in the old apple tree.",
      "Ethan climbed the wooden ladder to get inside.",
      "He brought his favourite books and a blanket.",
      "It was the perfect place to read quietly.",
      "He could see the whole garden from the window.",
      "Ethan loved spending time in his new treehouse."
    ],
    "questions": [
      {
        "question": "What did Ethan and his dad build?",
        "answer": "They built a wooden treehouse."
      },
      {
        "question": "Where did they place the treehouse?",
        "answer": "They placed it high in the old apple tree."
      },
      {
        "question": "What did Ethan bring inside?",
        "answer": "He brought his favourite books and a blanket."
      },
      {
        "question": "What could he see from the window?",
        "answer": "He could see the whole garden from the window."
      }
    ]
  },
  {
    "title": "THE BAKING DAY",
    "image": "/story 34 THE BAKING DAY.png",
    "content": [
      "Lily decided to bake some chocolate chip cookies.",
      "She mixed the flour, sugar, and butter together.",
      "Lily added a lot of sweet chocolate chips.",
      "She rolled the dough into small round balls.",
      "Her mum put the tray into the hot oven.",
      "Soon, the kitchen smelled wonderfully sweet.",
      "They waited for the cookies to cool down.",
      "Lily ate a warm cookie with a glass of milk."
    ],
    "questions": [
      {
        "question": "What did Lily decide to bake?",
        "answer": "She decided to bake chocolate chip cookies."
      },
      {
        "question": "What did she add to the dough?",
        "answer": "She added a lot of sweet chocolate chips."
      },
      {
        "question": "Who put the tray in the oven?",
        "answer": "Her mum put the tray into the hot oven."
      },
      {
        "question": "What did Lily drink with her cookie?",
        "answer": "She drank a glass of milk."
      }
    ]
  },
  {
    "title": "THE SCHOOL TRIP",
    "image": "/story 35 THE SCHOOL TRIP.png",
    "content": [
      "The class went on a trip to the zoo.",
      "They rode on a big yellow school bus.",
      "First, they saw the tall giraffes eating leaves.",
      "Next, they watched the monkeys swinging on ropes.",
      "The monkeys were very noisy and funny.",
      "Then, they visited the reptile house to see snakes.",
      "Everyone ate lunch together in the picnic area.",
      "It was an exciting and fun day for the class."
    ],
    "questions": [
      {
        "question": "Where did the class go on a trip?",
        "answer": "The class went on a trip to the zoo."
      },
      {
        "question": "What were the giraffes doing?",
        "answer": "The tall giraffes were eating leaves."
      },
      {
        "question": "Where did they see snakes?",
        "answer": "They visited the reptile house to see snakes."
      },
      {
        "question": "Where did everyone eat lunch?",
        "answer": "Everyone ate lunch together in the picnic area."
      }
    ]
  },
  {
    "title": "THE BROKEN TOY",
    "image": "/story 36 THE BROKEN TOY.png",
    "content": [
      "Noah was playing with his favourite toy car.",
      "Suddenly, one of the red wheels fell off.",
      "Noah felt very sad because the car was broken.",
      "He asked his older brother to help him.",
      "His brother found some strong craft glue.",
      "He carefully glued the wheel back onto the car.",
      "They waited for the glue to dry completely.",
      "Noah was happy his car was fixed and ready."
    ],
    "questions": [
      {
        "question": "What was Noah playing with?",
        "answer": "Noah was playing with his favourite toy car."
      },
      {
        "question": "What fell off the toy car?",
        "answer": "One of the red wheels fell off."
      },
      {
        "question": "Who did Noah ask for help?",
        "answer": "He asked his older brother to help him."
      },
      {
        "question": "What did his brother use to fix the car?",
        "answer": "His brother found some strong craft glue."
      }
    ]
  },
  {
    "title": "THE WINTER MORNING",
    "image": "/story 37 THE WINTER MORNING.png",
    "content": [
      "Maya woke up and looked out her bedroom window.",
      "Everything outside was covered in a thick blanket of snow.",
      "She put on her warm coat, hat, and thick gloves.",
      "Maya stepped outside into the freezing winter air.",
      "Her boots made a crunching sound in the deep snow.",
      "She caught catching a snowflake on her pink mitten.",
      "The snowflake melted quickly into a drop of water.",
      "Maya smiled and started to build a snow fort."
    ],
    "questions": [
      {
        "question": "What was covered in snow?",
        "answer": "Everything outside was covered in snow."
      },
      {
        "question": "What did Maya put on to stay warm?",
        "answer": "She put on her warm coat, hat, and thick gloves."
      },
      {
        "question": "What sound did her boots make?",
        "answer": "Her boots made a crunching sound in the snow."
      },
      {
        "question": "What did Maya start to build?",
        "answer": "Maya started to build a snow fort."
      }
    ]
  },
  {
    "title": "THE NEW PET",
    "image": "/story 38 THE NEW PET.png",
    "content": [
      "Lucas went to the animal shelter with his parents.",
      "They wanted to adopt a new family pet.",
      "Lucas saw a small kitten with orange stripes.",
      "The kitten purred and rubbed against his hand.",
      "Lucas knew this was the perfect pet for him.",
      "They filled out the adoption papers at the desk.",
      "Lucas gently carried the kitten in a cardboard box.",
      "He named his new furry friend Tiger."
    ],
    "questions": [
      {
        "question": "Where did Lucas and his parents go?",
        "answer": "They went to the animal shelter."
      },
      {
        "question": "What did the small kitten look like?",
        "answer": "It was a small kitten with orange stripes."
      },
      {
        "question": "How did Lucas carry the kitten?",
        "answer": "Lucas carried the kitten in a cardboard box."
      },
      {
        "question": "What did Lucas name his new friend?",
        "answer": "He named his new furry friend Tiger."
      }
    ]
  },
  {
    "title": "THE SOCCER MATCH",
    "image": "/story 39 THE SOCCER MATCH.png",
    "content": [
      "Chloe played in a big soccer match on Saturday.",
      "Her team wore bright green shirts and socks.",
      "The game was very close and exciting to watch.",
      "Chloe ran fast to get the black and white ball.",
      "She kicked the ball hard towards the goal net.",
      "The goalie tried to block it, but missed.",
      "Chloe scored the winning point for her team.",
      "Her teammates cheered and gave her a high five."
    ],
    "questions": [
      {
        "question": "What did Chloe's team wear?",
        "answer": "Her team wore bright green shirts and socks."
      },
      {
        "question": "What did Chloe run fast to get?",
        "answer": "Chloe ran fast to get the ball."
      },
      {
        "question": "Did the goalie block the ball?",
        "answer": "No, the goalie tried to block it, but missed."
      },
      {
        "question": "What did her teammates do when she scored?",
        "answer": "Her teammates cheered and gave her a high five."
      }
    ]
  },
  {
    "title": "THE VEGETABLE PATCH",
    "image": "/story 40 THE VEGETABLE PATCH.png",
    "content": [
      "Grandpa showed Ben his growing vegetable patch.",
      "There were rows of carrots, beans, and fresh lettuce.",
      "Ben helped to pull the pesky weeds from the soil.",
      "He watered the plants using a long green hose.",
      "Grandpa pulled a large, orange carrot from the ground.",
      "He washed the dirt off the carrot with water.",
      "Ben took a big bite of the crunchy carrot.",
      "It tasted very sweet and delicious."
    ],
    "questions": [
      {
        "question": "What did Grandpa show Ben?",
        "answer": "Grandpa showed Ben his vegetable patch."
      },
      {
        "question": "What did Ben help to do?",
        "answer": "Ben helped to pull weeds from the soil."
      },
      {
        "question": "What did Grandpa pull from the ground?",
        "answer": "Grandpa pulled a large, orange carrot from the ground."
      },
      {
        "question": "How did the carrot taste?",
        "answer": "It tasted very sweet and delicious."
      }
    ]
  },
  {
    "title": "THE ROBOT CONTEST",
    "image": "/story 41 THE ROBOT CONTEST.png",
    "content": [
      "Harper wanted to build a robot for the school contest.",
      "She gathered old cardboard boxes and plastic bottles.",
      "Harper carefully glued the pieces together to form a body.",
      "She attached two silver bottle caps for the robot's eyes.",
      "Then, she painted the entire robot with bright silver paint.",
      "Harper named her shiny new creation Sparky the Robot.",
      "On the day of the contest, she carried Sparky to school.",
      "The judges looked at all the different student projects.",
      "They loved how Harper used recycled materials for her robot.",
      "Harper won a blue ribbon for her creative and unique design."
    ],
    "questions": [
      {
        "question": "What did Harper want to build?",
        "answer": "She wanted to build a robot for the school contest."
      },
      {
        "question": "What did she use for the robot's eyes?",
        "answer": "She attached two silver bottle caps for the eyes."
      },
      {
        "question": "What did she name her robot?",
        "answer": "She named her robot Sparky."
      },
      {
        "question": "Why did Harper win a blue ribbon?",
        "answer": "She won for her creative and unique design using recycled materials."
      }
    ]
  },
  {
    "title": "THE STARRY NIGHT",
    "image": "/story 42 THE STARRY NIGHT.png",
    "content": [
      "Alex loved looking at the dark night sky.",
      "His parents gave him a telescope for his birthday.",
      "He took the telescope out to the backyard.",
      "The sky was very clear with no clouds.",
      "Alex looked through the lens to see the moon.",
      "The moon looked very big and full of craters.",
      "He moved the telescope to find a bright star.",
      "He saw the rings of a distant planet.",
      "Alex felt like a real space explorer.",
      "He could not wait to look at the stars again."
    ],
    "questions": [
      {
        "question": "What did Alex love looking at?",
        "answer": "Alex loved looking at the dark night sky."
      },
      {
        "question": "What did his parents give him?",
        "answer": "They gave him a telescope for his birthday."
      },
      {
        "question": "What did the moon look like?",
        "answer": "The moon looked very big and full of craters."
      },
      {
        "question": "What did Alex feel like?",
        "answer": "He felt like a real space explorer."
      }
    ]
  },
  {
    "title": "THE PAPER BOAT",
    "image": "/story 43 THE PAPER BOAT.png",
    "content": [
      "It rained heavily all morning.",
      "A small stream of water flowed down the street.",
      "Max decided to fold a boat out of newspaper.",
      "He carefully folded the corners to make it strong.",
      "Max placed the paper boat into the rushing water.",
      "The boat bobbed up and down on the small waves.",
      "It floated quickly past the neighbour's house.",
      "Max ran along the pavement to follow his boat.",
      "The boat sailed all the way to the drain.",
      "Max decided to make another boat tomorrow."
    ],
    "questions": [
      {
        "question": "What did Max fold out of newspaper?",
        "answer": "He folded a boat out of newspaper."
      },
      {
        "question": "Where did Max place the paper boat?",
        "answer": "He placed it into the rushing water."
      },
      {
        "question": "How did the boat move in the water?",
        "answer": "It bobbed up and down on the small waves."
      },
      {
        "question": "Where did the boat sail to?",
        "answer": "The boat sailed all the way to the drain."
      }
    ]
  },
  {
    "title": "THE MISSING GLASSES",
    "image": "/story 44 THE MISSING GLASSES.png",
    "content": [
      "Grandma could not find her reading glasses.",
      "She looked on the kitchen table and the counter.",
      "She checked the pockets of her favourite cardigan.",
      "Grandma asked Tommy to help her find them.",
      "Tommy looked under the sofa cushions in the living room.",
      "He searched behind the television and under the rug.",
      "Then, Tommy looked at Grandma and started to laugh.",
      "The glasses were resting on top of Grandma's head.",
      "Grandma chuckled and thanked Tommy for his help.",
      "She sat down to read her book happily."
    ],
    "questions": [
      {
        "question": "What could Grandma not find?",
        "answer": "Grandma could not find her reading glasses."
      },
      {
        "question": "Who did Grandma ask for help?",
        "answer": "She asked Tommy to help her find them."
      },
      {
        "question": "Why did Tommy start to laugh?",
        "answer": "He laughed because the glasses were on Grandma's head."
      },
      {
        "question": "What did Grandma do after finding her glasses?",
        "answer": "She sat down to read her book happily."
      }
    ]
  },
  {
    "title": "THE MAGIC SEED",
    "image": "/story 45 THE MAGIC SEED.png",
    "content": [
      "Bella found a strange, colourful seed in the park.",
      "She took it home and planted it in a pot.",
      "Bella watered the pot every single day.",
      "She put the pot near a sunny window.",
      "A week later, a small green shoot appeared.",
      "The plant grew taller and taller very quickly.",
      "Soon, a large beautiful flower bloomed.",
      "The flower petals sparkled in the sunlight.",
      "Bella showed the amazing flower to her mother.",
      "They agreed it was a truly magical plant."
    ],
    "questions": [
      {
        "question": "Where did Bella find the seed?",
        "answer": "She found a strange, colourful seed in the park."
      },
      {
        "question": "Where did she put the pot?",
        "answer": "She put the pot near a sunny window."
      },
      {
        "question": "What appeared a week later?",
        "answer": "A small green shoot appeared."
      },
      {
        "question": "What did the flower petals do in the sunlight?",
        "answer": "The flower petals sparkled in the sunlight."
      }
    ]
  },
  {
    "title": "THE FOREST HIKE",
    "image": "/story 46 THE FOREST HIKE.png",
    "content": [
      "Sam and his dad went for a hike in the forest.",
      "They wore sturdy boots and carried a backpack.",
      "The path was covered in crunchy brown leaves.",
      "Sam listened to the birds singing in the trees.",
      "They saw a small squirrel carrying an acorn.",
      "Dad pointed out a patch of wild mushrooms.",
      "They stopped to eat sandwiches on a large rock.",
      "The air smelled like fresh pine and damp earth.",
      "They walked all the way to the sparkling waterfall.",
      "It was a wonderful adventure in the deep forest."
    ],
    "questions": [
      {
        "question": "Where did Sam and his dad go for a hike?",
        "answer": "They went for a hike in the forest."
      },
      {
        "question": "What was the path covered in?",
        "answer": "The path was covered in crunchy brown leaves."
      },
      {
        "question": "What did they see a squirrel carrying?",
        "answer": "They saw a small squirrel carrying an acorn."
      },
      {
        "question": "Where did they stop to eat sandwiches?",
        "answer": "They stopped to eat sandwiches on a large rock."
      }
    ]
  },
  {
    "title": "THE SNOW FORT",
    "image": "/story 47 THE SNOW FORT.png",
    "content": [
      "The school was closed because of the heavy snow.",
      "Jake and his friends went to the nearby park.",
      "They decided to build a massive snow fort.",
      "They rolled large blocks of snow to make walls.",
      "The boys worked together for a long time.",
      "They made a secret entrance at the front.",
      "Then, they gathered snowballs to store inside.",
      "They had a fun snowball fight in the afternoon.",
      "Everyone was very cold but extremely happy.",
      "They went home to drink hot chocolate."
    ],
    "questions": [
      {
        "question": "Why was the school closed?",
        "answer": "The school was closed because of the heavy snow."
      },
      {
        "question": "What did Jake and his friends decide to build?",
        "answer": "They decided to build a massive snow fort."
      },
      {
        "question": "What did they make at the front of the fort?",
        "answer": "They made a secret entrance at the front."
      },
      {
        "question": "What did they drink when they went home?",
        "answer": "They went home to drink hot chocolate."
      }
    ]
  },
  {
    "title": "THE NEW STUDENT",
    "image": "/story 48 THE NEW STUDENT.png",
    "content": [
      "A new student named Liam joined the class today.",
      "Liam looked very shy and a little nervous.",
      "He sat quietly at his desk near the back.",
      "Emma decided to go and talk to him.",
      "She smiled and introduced herself to Liam.",
      "Emma asked if he wanted to play at playtime.",
      "Liam smiled back and said yes happily.",
      "They played tag with the other children.",
      "Liam felt much better about his new school.",
      "Emma was glad she made a new friend."
    ],
    "questions": [
      {
        "question": "Who joined the class today?",
        "answer": "A new student named Liam joined the class."
      },
      {
        "question": "How did Liam look?",
        "answer": "Liam looked very shy and a little nervous."
      },
      {
        "question": "What did Emma ask Liam?",
        "answer": "She asked if he wanted to play at playtime."
      },
      {
        "question": "How did Liam feel after playing?",
        "answer": "Liam felt much better about his new school."
      }
    ]
  },
  {
    "title": "THE MISSING DOG",
    "image": "/story 49 THE MISSING DOG.png",
    "content": [
      "Katie's dog, Max, ran out of the open gate.",
      "Katie called his name but he did not come back.",
      "She made posters with a picture of Max.",
      "Katie and her dad walked around the neighbourhood.",
      "They put the posters on trees and lamp posts.",
      "A few hours later, the telephone rang loudly.",
      "A kind neighbour had found Max in her garden.",
      "Katie ran to the neighbour's house very quickly.",
      "Max wagged his tail and licked Katie's face.",
      "She hugged Max and promised to shut the gate."
    ],
    "questions": [
      {
        "question": "How did Max escape?",
        "answer": "Max ran out of the open gate."
      },
      {
        "question": "What did Katie put on the posters?",
        "answer": "She put a picture of Max on the posters."
      },
      {
        "question": "Who found Max?",
        "answer": "A kind neighbour had found Max in her garden."
      },
      {
        "question": "What did Katie promise to do?",
        "answer": "She promised to shut the gate."
      }
    ]
  },
  {
    "title": "THE BIG RACE",
    "image": "/story 50 THE BIG RACE.png",
    "content": [
      "Leo trained every day for the school running race.",
      "He wanted to win the gold medal this year.",
      "He ran around the park to get faster and stronger.",
      "On the day of the race, Leo felt very excited.",
      "He stood at the starting line with the other runners.",
      "The teacher blew the whistle to start the race.",
      "Leo ran as fast as his legs could carry him.",
      "He crossed the finish line in first place.",
      "His friends cheered loudly from the side lines.",
      "Leo felt proud as he wore the gold medal."
    ],
    "questions": [
      {
        "question": "What did Leo train for every day?",
        "answer": "He trained for the school running race."
      },
      {
        "question": "Where did Leo run to get faster?",
        "answer": "He ran around the park."
      },
      {
        "question": "What did the teacher do to start the race?",
        "answer": "The teacher blew the whistle."
      },
      {
        "question": "What did Leo win?",
        "answer": "Leo won the gold medal."
      }
    ]
  },
  {
    "title": "THE MYSTERY BOX",
    "image": "/story 51 THE MYSTERY BOX.png",
    "content": [
      "Tom found a dusty wooden box in the attic.",
      "The box was locked with a small brass padlock.",
      "He searched through the attic for a hidden key.",
      "Tom found a small silver key inside an old vase.",
      "He put the key into the padlock and turned it.",
      "The lock clicked open with a sharp sound.",
      "Tom slowly lifted the heavy wooden lid.",
      "Inside the box were lots of old photographs.",
      "There was also a shiny pocket watch on a chain.",
      "Tom showed the amazing treasures to his grandfather.",
      "His grandfather smiled and told him stories about the past.",
      "Tom realised that family history is very precious."
    ],
    "questions": [
      {
        "question": "Where did Tom find the wooden box?",
        "answer": "Tom found a dusty wooden box in the attic."
      },
      {
        "question": "Where did Tom find the small silver key?",
        "answer": "He found the key inside an old vase."
      },
      {
        "question": "What was inside the box?",
        "answer": "Inside the box were old photographs and a pocket watch."
      },
      {
        "question": "Who did Tom show the treasures to?",
        "answer": "He showed the treasures to his grandfather."
      }
    ]
  },
  {
    "title": "THE COMMUNITY GARDEN",
    "image": "/story 52 THE COMMUNITY GARDEN.png",
    "content": [
      "Priya noticed an empty patch of dirt near her street.",
      "She wanted to turn it into a beautiful community garden.",
      "Priya asked her neighbours if they would like to help.",
      "Everyone thought it was a brilliant and kind idea.",
      "On Saturday, they all gathered with shovels and rakes.",
      "They cleared away the rubbish and dug up the soil.",
      "Priya planted bright sunflower seeds in the corner.",
      "Her neighbour planted rows of tomatoes and green beans.",
      "They took turns watering the garden every evening.",
      "A few weeks later, the garden was full of colourful plants.",
      "The neighbours shared the fresh vegetables they had grown.",
      "Working together made their neighbourhood a much better place."
    ],
    "questions": [
      {
        "question": "What did Priya want to do with the empty patch of dirt?",
        "answer": "She wanted to turn it into a community garden."
      },
      {
        "question": "What did Priya plant in the corner?",
        "answer": "Priya planted bright sunflower seeds in the corner."
      },
      {
        "question": "What did they do every evening?",
        "answer": "They took turns watering the garden every evening."
      },
      {
        "question": "What did the neighbours share?",
        "answer": "The neighbours shared the fresh vegetables they had grown."
      }
    ]
  },
  {
    "title": "THE MAGIC SHOW",
    "image": "/story 53 THE MAGIC SHOW.png",
    "content": [
      "Ben received a magic kit for his tenth birthday.",
      "He practiced the magic tricks in his bedroom every day.",
      "Ben learned how to make a coin disappear from his hand.",
      "He also learned how to pull a scarf from an empty tube.",
      "He decided to put on a show for his family.",
      "Ben made a small stage using a red curtain.",
      "He wore a black cape and a tall black hat.",
      "His family sat on the sofa to watch the performance.",
      "Ben performed his tricks perfectly without any mistakes.",
      "The coin vanished and the scarf appeared like real magic.",
      "His family clapped loudly and cheered for him.",
      "Ben bowed gracefully, feeling like a professional magician."
    ],
    "questions": [
      {
        "question": "What did Ben receive for his birthday?",
        "answer": "Ben received a magic kit for his birthday."
      },
      {
        "question": "What did he learn to make disappear from his hand?",
        "answer": "He learned to make a coin disappear from his hand."
      },
      {
        "question": "What did Ben use to make a small stage?",
        "answer": "He made a small stage using a red curtain."
      },
      {
        "question": "How did Ben feel at the end of the show?",
        "answer": "Ben felt like a professional magician."
      }
    ]
  },
  {
    "title": "THE LOST WALLET",
    "image": "/story 54 THE LOST WALLET.png",
    "content": [
      "Sarah was walking home from the local grocery store.",
      "She saw a brown leather wallet lying on the pavement.",
      "Sarah picked it up and opened it to look inside.",
      "She found some money and a driver's licence.",
      "The address on the licence was for a house nearby.",
      "Sarah walked down the street to find the correct house.",
      "She knocked on the front door of the green house.",
      "An older man answered the door looking worried.",
      "Sarah handed the brown wallet to the grateful man.",
      "He thanked her warmly for being so honest and helpful.",
      "The man offered her a small reward for her kindness.",
      "Sarah smiled and walked home feeling very proud."
    ],
    "questions": [
      {
        "question": "What did Sarah find on the pavement?",
        "answer": "She found a brown leather wallet on the pavement."
      },
      {
        "question": "What did she find inside the wallet?",
        "answer": "She found some money and a driver's licence."
      },
      {
        "question": "How did the man look when he answered the door?",
        "answer": "The man looked worried."
      },
      {
        "question": "How did Sarah feel when she walked home?",
        "answer": "Sarah walked home feeling very proud."
      }
    ]
  },
  {
    "title": "THE TREE PLANTING",
    "image": "/story 55 THE TREE PLANTING.png",
    "content": [
      "The school organised a special tree planting day.",
      "Every student was given a small green sapling.",
      "Daniel took his sapling to a spot near the fence.",
      "He used a small spade to dig a hole in the earth.",
      "The ground was quite hard and difficult to dig.",
      "Daniel placed the roots carefully into the deep hole.",
      "He covered the roots with soft, dark soil.",
      "Then, he watered the young tree with a watering can.",
      "Daniel patted the soil down to make it firm.",
      "He knew the tree would grow tall over the years.",
      "It would provide shade for children playing outside.",
      "Planting trees is an excellent way to help nature."
    ],
    "questions": [
      {
        "question": "What did the school organise?",
        "answer": "The school organised a special tree planting day."
      },
      {
        "question": "What was every student given?",
        "answer": "Every student was given a small green sapling."
      },
      {
        "question": "What did Daniel use to dig a hole?",
        "answer": "He used a small spade to dig a hole."
      },
      {
        "question": "What would the tree provide for children playing outside?",
        "answer": "It would provide shade for children playing outside."
      }
    ]
  },
  {
    "title": "THE SCIENCE PROJECT",
    "image": "/story 56 THE SCIENCE PROJECT.png",
    "content": [
      "Emily had to complete a project for the science fair.",
      "She decided to build a model of an erupting volcano.",
      "Emily used paper mache to shape the tall mountain.",
      "She painted it brown and added green paint for grass.",
      "She placed a small plastic cup inside the crater.",
      "On the day of the fair, Emily set up her display.",
      "She mixed baking soda and red food colouring in the cup.",
      "Then, she carefully poured in some clear vinegar.",
      "Red foam bubbled up and flowed down the mountain.",
      "The class watched in amazement as the volcano erupted.",
      "Her teacher said it was a fantastic demonstration.",
      "Emily was thrilled that her science experiment worked perfectly."
    ],
    "questions": [
      {
        "question": "What did Emily build for the science fair?",
        "answer": "She built a model of an erupting volcano."
      },
      {
        "question": "What did she use to shape the tall mountain?",
        "answer": "She used paper mache to shape the mountain."
      },
      {
        "question": "What did she mix in the cup?",
        "answer": "She mixed baking soda, red food colouring, and vinegar."
      },
      {
        "question": "How did Emily feel at the end?",
        "answer": "Emily was thrilled that her science experiment worked perfectly."
      }
    ]
  },
  {
    "title": "THE BEACH CLEAN",
    "image": "/story 57 THE BEACH CLEAN.png",
    "content": [
      "Noah and his family went to the beach on Sunday.",
      "They noticed that the sand was covered in plastic rubbish.",
      "Noah felt sad that the beach looked so messy.",
      "His family decided to spend the morning cleaning it up.",
      "They found some large rubbish bags in their car.",
      "Noah wore gloves to protect his hands from sharp items.",
      "He picked up plastic bottles, food wrappers, and old cans.",
      "His sister helped him collect all the scattered pieces.",
      "They filled three entire bags with rubbish from the sand.",
      "When they finished, the beach looked beautiful and clean again.",
      "They sat down to enjoy a picnic looking at the sea.",
      "Keeping nature clean helps protect the marine animals."
    ],
    "questions": [
      {
        "question": "What was the sand covered in?",
        "answer": "The sand was covered in plastic rubbish."
      },
      {
        "question": "What did Noah wear to protect his hands?",
        "answer": "Noah wore gloves to protect his hands."
      },
      {
        "question": "How many bags did they fill with rubbish?",
        "answer": "They filled three entire bags with rubbish."
      },
      {
        "question": "Why is keeping nature clean important?",
        "answer": "Keeping nature clean helps protect the marine animals."
      }
    ]
  },
  {
    "title": "THE CAMPFIRE",
    "image": "/story 58 THE CAMPFIRE.png",
    "content": [
      "The family pitched their tent in the quiet woods.",
      "As the sun set, the air began to feel chilly.",
      "Dad decided it was time to build a warm campfire.",
      "He gathered dry leaves and small twigs for the base.",
      "Chloe helped collect larger logs from the surrounding forest.",
      "Dad carefully struck a match to light the small twigs.",
      "Soon, a bright, crackling fire was burning steadily.",
      "They sat on wooden logs around the warm flames.",
      "Mum brought out marshmallows to roast on long sticks.",
      "The marshmallows turned brown and gooey in the heat.",
      "They ate the sweet treats while looking at the stars.",
      "Camping in the woods is a wonderful family adventure."
    ],
    "questions": [
      {
        "question": "Where did the family pitch their tent?",
        "answer": "The family pitched their tent in the quiet woods."
      },
      {
        "question": "What did Chloe help collect?",
        "answer": "Chloe helped collect larger logs from the forest."
      },
      {
        "question": "What did they roast on the campfire?",
        "answer": "They roasted marshmallows on long sticks."
      },
      {
        "question": "What did they look at while eating the sweet treats?",
        "answer": "They looked at the stars while eating the sweet treats."
      }
    ]
  },
  {
    "title": "THE BAKING CONTEST",
    "image": "/story 59 THE BAKING CONTEST.png",
    "content": [
      "Grace entered the village baking contest with her grandmother's recipe.",
      "She wanted to bake a classic apple pie with cinnamon.",
      "Grace peeled and sliced the apples very carefully.",
      "She mixed the apple slices with sugar and warm spices.",
      "Then, she rolled out the pastry dough on the table.",
      "Grace placed the apples inside and covered them with pastry.",
      "She pinched the edges to seal the delicious pie.",
      "The pie baked in the oven until it was golden brown.",
      "At the contest, the judges tasted a slice of her pie.",
      "They praised the flaky crust and the sweet apple filling.",
      "Grace won the second prize ribbon for her tasty effort.",
      "She proudly displayed the ribbon in her family kitchen."
    ],
    "questions": [
      {
        "question": "What did Grace bake for the contest?",
        "answer": "Grace baked a classic apple pie with cinnamon."
      },
      {
        "question": "What did she mix the apple slices with?",
        "answer": "She mixed them with sugar and warm spices."
      },
      {
        "question": "What did the judges praise about the pie?",
        "answer": "They praised the flaky crust and sweet apple filling."
      },
      {
        "question": "What prize did Grace win?",
        "answer": "Grace won the second prize ribbon."
      }
    ]
  },
  {
    "title": "THE BUTTERFLY",
    "image": "/story 60 THE BUTTERFLY.png",
    "content": [
      "Jack found a green caterpillar on a leaf in his garden.",
      "He put it gently inside a large glass jar.",
      "Jack placed some fresh leaves inside for it to eat.",
      "The caterpillar ate a lot and grew very fat.",
      "One day, it spun a hard chrysalis around its body.",
      "Jack watched the jar patiently every day for two weeks.",
      "Finally, the chrysalis started to crack open slowly.",
      "A beautiful orange and black butterfly emerged from it.",
      "Jack took the jar outside and opened the glass lid.",
      "The butterfly rested on his finger for a brief moment.",
      "Then, it fluttered away into the bright blue sky.",
      "Watching nature change and grow is a magical experience."
    ],
    "questions": [
      {
        "question": "What did Jack find on a leaf?",
        "answer": "Jack found a green caterpillar on a leaf."
      },
      {
        "question": "What did the caterpillar spin around its body?",
        "answer": "It spun a hard chrysalis around its body."
      },
      {
        "question": "What emerged from the chrysalis?",
        "answer": "A beautiful orange and black butterfly emerged."
      },
      {
        "question": "What did the butterfly do before fluttering away?",
        "answer": "The butterfly rested on his finger for a brief moment."
      }
    ]
  }
]
  }
];
