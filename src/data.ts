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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_big_red_ball%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=174521",
    "content": [
      "Alex has a big red ball.",
      "He plays in the sun.",
      "The ball rolls far away.",
      "Alex runs fast to get it.",
      "A little dog finds the ball.",
      "They play a fun game together."
    ],
    "questions": [
      {
        "question": "What colour is the ball?",
        "answer": "The ball is red."
      },
      {
        "question": "Where does Alex play?",
        "answer": "Alex plays in the sun."
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_cute_fluffy_cat%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=883444",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_bright_yellow_school_bus%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=24664",
    "content": [
      "Wei Jie waits for the big bus.",
      "The bus is bright yellow.",
      "It stops at the corner.",
      "Wei Jie gets on the bus.",
      "He sits near the window.",
      "The bus goes to the school."
    ],
    "questions": [
      {
        "question": "What is Wei Jie waiting for?",
        "answer": "Wei Jie waits for the big bus."
      },
      {
        "question": "What colour is the bus?",
        "answer": "The bus is bright yellow."
      },
      {
        "question": "Where does Wei Jie sit?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_pair_of_green_rain_boots%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=725312",
    "content": [
      "Look at the dark grey clouds.",
      "The rain starts to fall.",
      "Kavin puts on his green boots.",
      "He walks in the wet grass.",
      "Kavin jumps in a big puddle.",
      "Splash goes the cold water!"
    ],
    "questions": [
      {
        "question": "What colour are the clouds?",
        "answer": "The clouds are dark grey."
      },
      {
        "question": "What does Kavin put on?",
        "answer": "Kavin puts on his green boots."
      },
      {
        "question": "Where does Kavin jump?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_fast_blue_car%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=774832",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_small_green_frog%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=317889",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_bright_yellow_SUN_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=727832",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_FULL_MOON_with_visible_moon_craters%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=442529",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_big_red_apple%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=134573",
    "content": [
      "An apple is on the tree.",
      "It is a big red apple.",
      "The wind blows very hard.",
      "The apple falls to the grass.",
      "Haziq picks up the sweet apple.",
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
        "answer": "Haziq picks up the sweet apple."
      }
    ]
  },
  {
    "title": "THE PARK",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_park_swing%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=828213",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_small_blue_fish%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=960732",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_bird_nest_with_twigs%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=690357",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_red_and_yellow_kite%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=535128",
    "content": [
      "The wind is blowing today.",
      "Aqil takes his kite outside.",
      "The kite is red and yellow.",
      "Aqil runs fast with the kite.",
      "The kite goes up in the sky.",
      "It flies higher than the trees.",
      "Aqil holds the string tight.",
      "He loves to fly his kite."
    ],
    "questions": [
      {
        "question": "What is Aqil doing?",
        "answer": "Aqil takes his kite outside."
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
        "question": "Does Aqil hold the string tight?",
        "answer": "Yes, Aqil holds the string tight."
      }
    ]
  },
  {
    "title": "A HAPPY DOG",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_brown_dog%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=835094",
    "content": [
      "Buddy is a happy brown dog.",
      "He wags his tail very fast.",
      "Buddy loves to chew his bone.",
      "He runs around the back yard.",
      "Buddy barks at a small squirrel.",
      "The squirrel climbs up a tree.",
      "Buddy cannot climb the tree.",
      "He goes to sleep on the grass."
    ],
    "questions": [
      {
        "question": "Who is Buddy?",
        "answer": "Buddy is a happy brown dog."
      },
      {
        "question": "What does Buddy love to do?",
        "answer": "Buddy loves to chew his bone."
      },
      {
        "question": "What does Buddy bark at?",
        "answer": "He barks at a small squirrel."
      },
      {
        "question": "Where does Buddy go to sleep?",
        "answer": "He goes to sleep on the grass."
      }
    ]
  },
  {
    "title": "THE SNOWMAN",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_snowman_with_a_carrot_nose%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=316010",
    "content": [
      "Cold snow falls on the ground.",
      "The yard is very white.",
      "Mei Ling rolls a big ball of snow.",
      "She makes a tall snowman.",
      "Mei Ling gives him a carrot nose.",
      "She gives him a red scarf.",
      "The snowman looks very happy.",
      "Mei Ling plays with him all day."
    ],
    "questions": [
      {
        "question": "What is falling on the ground?",
        "answer": "Cold snow falls on the ground."
      },
      {
        "question": "What does Mei Ling make?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_little_yellow_duck%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=967211",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_brown_bear%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=927248",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_school_backpack%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=244418",
    "content": [
      "Aisyah packs her school bag.",
      "She puts in a red book.",
      "She puts in two pencils.",
      "Aisyah takes an apple for a snack.",
      "Her bag is heavy now.",
      "She puts the bag on her back.",
      "Aisyah walks to her school.",
      "She is ready to learn today."
    ],
    "questions": [
      {
        "question": "What does Aisyah pack?",
        "answer": "Aisyah packs her school bag."
      },
      {
        "question": "What colour is the book?",
        "answer": "She puts in a red book."
      },
      {
        "question": "What does Aisyah take for a snack?",
        "answer": "Aisyah takes an apple for a snack."
      },
      {
        "question": "Where does Aisyah walk?",
        "answer": "Aisyah walks to her school."
      }
    ]
  },
  {
    "title": "THE NEW BIKE",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_blue_bicycle%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=905865",
    "content": [
      "Danish has a new blue bike.",
      "The bike has two shiny wheels.",
      "Danish wears a green helmet.",
      "He gets on the blue bike.",
      "Danish pushes the pedals down.",
      "The bike moves very fast.",
      "He rides down the street.",
      "Danish loves his new bike."
    ],
    "questions": [
      {
        "question": "What colour is the new bike?",
        "answer": "Danish has a new blue bike."
      },
      {
        "question": "What does Danish wear?",
        "answer": "Danish wears a green helmet."
      },
      {
        "question": "What does Danish push down?",
        "answer": "Danish pushes the pedals down."
      },
      {
        "question": "Where does he ride?",
        "answer": "He rides down the street."
      }
    ]
  },
  {
    "title": "THE TRAIN",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_long_passenger_train%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=237522",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_loaf_of_fresh_bread%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=333222",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_BROWN_COW_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=930410",
    "content": [
      "Arun visits the farm today.",
      "He sees a big red barn.",
      "A cow is eating the green grass.",
      "The cow says moo very loudly.",
      "Arun walks to the pig pen.",
      "The pigs roll in the brown mud.",
      "A rooster crows on the fence.",
      "Arun feeds some grain to the hens.",
      "The hens cluck and peck the ground.",
      "Arun has fun at the farm."
    ],
    "questions": [
      {
        "question": "Where does Arun visit?",
        "answer": "Arun visits the farm today."
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
        "question": "Who does Arun feed?",
        "answer": "Arun feeds some grain to the hens."
      }
    ]
  },
  {
    "title": "THE BEACH",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_sandcastle_with_a_flag%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=223988",
    "content": [
      "Priya goes to the sunny beach.",
      "She feels the hot sand.",
      "The waves crash on the shore.",
      "Priya finds a pretty pink shell.",
      "She puts it in her pocket.",
      "Priya builds a big sandcastle.",
      "She puts a flag on the top.",
      "A crab walks by the castle.",
      "Priya watches the crab hide.",
      "She loves the sunny beach."
    ],
    "questions": [
      {
        "question": "Where does Priya go?",
        "answer": "Priya goes to the sunny beach."
      },
      {
        "question": "What does she find?",
        "answer": "Priya finds a pretty pink shell."
      },
      {
        "question": "What does Priya build?",
        "answer": "Priya builds a big sandcastle."
      },
      {
        "question": "What walks by the castle?",
        "answer": "A crab walks by the castle."
      }
    ]
  },
  {
    "title": "THE LIBRARY",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_big_red_book%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=885632",
    "content": [
      "Jun Hao goes to the town library.",
      "It is very quiet inside.",
      "There are books on the shelves.",
      "Jun Hao looks for a book about cars.",
      "He finds a big red book.",
      "Jun Hao sits on a soft chair.",
      "He opens the book to read.",
      "He looks at the colourful pictures.",
      "The librarian smiles at Jun Hao.",
      "Jun Hao takes the book home."
    ],
    "questions": [
      {
        "question": "Where does Jun Hao go?",
        "answer": "Jun Hao goes to the town library."
      },
      {
        "question": "What kind of book does he look for?",
        "answer": "Jun Hao looks for a book about cars."
      },
      {
        "question": "Where does Jun Hao sit?",
        "answer": "Jun Hao sits on a soft chair."
      },
      {
        "question": "Who smiles at Jun Hao?",
        "answer": "The librarian smiles at Jun Hao."
      }
    ]
  },
  {
    "title": "THE PET SHOP",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_fluffy_white_rabbit%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=263319",
    "content": [
      "Devi walks into the pet shop.",
      "She hears a parrot talk.",
      "The parrot says hello to Devi.",
      "Devi looks at the fish tanks.",
      "A yellow fish swims around.",
      "Devi sees a fluffy white rabbit.",
      "The rabbit twitches its nose.",
      "She feeds a carrot to the rabbit.",
      "The rabbit eats it very fast.",
      "Devi waves goodbye to the pets."
    ],
    "questions": [
      {
        "question": "Where does Devi walk?",
        "answer": "Devi walks into the pet shop."
      },
      {
        "question": "What does the parrot say?",
        "answer": "The parrot says hello to Devi."
      },
      {
        "question": "What does the rabbit twitch?",
        "answer": "The rabbit twitches its nose."
      },
      {
        "question": "What does Devi feed the rabbit?",
        "answer": "She feeds a carrot to the rabbit."
      }
    ]
  },
  {
    "title": "THE TOY STORE",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_toy_robot%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=789684",
    "content": [
      "Kavin goes to the toy store.",
      "The store is very big.",
      "He sees a tall robot toy.",
      "The robot has flashing lights.",
      "Kavin sees a box of blocks.",
      "He wants to build a tall tower.",
      "He picks up a soft teddy bear.",
      "The bear is very cuddly.",
      "Kavin buys the box of blocks.",
      "He will play with them at home."
    ],
    "questions": [
      {
        "question": "Where does Kavin go?",
        "answer": "Kavin goes to the toy store."
      },
      {
        "question": "What does the robot have?",
        "answer": "The robot has flashing lights."
      },
      {
        "question": "What does Kavin want to build?",
        "answer": "He wants to build a tall tower."
      },
      {
        "question": "What does Kavin buy?",
        "answer": "Kavin buys the box of blocks."
      }
    ]
  },
  {
    "title": "THE GARDEN",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_small_watering_can%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=969532",
    "content": [
      "Sofea steps into the garden.",
      "She has a small watering can.",
      "The plants are very dry.",
      "Sofea pours water on the soil.",
      "The flowers look very happy.",
      "A bee buzzes on a red rose.",
      "The bee is looking for nectar.",
      "Sofea spots a green caterpillar.",
      "It rests on a big leaf.",
      "The garden is full of life."
    ],
    "questions": [
      {
        "question": "What does Sofea have?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_picnic_basket%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=409398",
    "content": [
      "The family goes for a picnic.",
      "They sit on a blanket.",
      "The grass is very soft.",
      "Dad opens the big basket.",
      "He takes out the sandwiches.",
      "Mom pours some apple juice.",
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
        "question": "What does Mom pour?",
        "answer": "Mom pours some apple juice."
      },
      {
        "question": "What does the ant find?",
        "answer": "A small ant finds a crumb."
      }
    ]
  },
  {
    "title": "THE FIRE ENGINE",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_red_fire_engine%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=539225",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_magician's_black_hat%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=792422",
    "content": [
      "Ali goes to a fun magic show.",
      "A magician stands on the stage.",
      "He holds a tall black hat.",
      "The hat looks completely empty.",
      "The magician taps it with a wand.",
      "He says the magic word loud.",
      "A white dove flies out.",
      "The crowd claps their hands.",
      "Ali smiles at the magic trick.",
      "He wants to learn magic too."
    ],
    "questions": [
      {
        "question": "Where does Ali go?",
        "answer": "Ali goes to a fun magic show."
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
        "question": "What does Ali want to learn?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_shiny_silver_key%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=837778",
    "content": [
      "Hao Ming walked to his front door after school.",
      "He reached into his pocket to find his key.",
      "Hao Ming realised that his pocket was completely empty.",
      "He carefully retraced his steps down the path.",
      "He looked near the big oak tree.",
      "Suddenly, he saw something shiny in the grass.",
      "It was his silver key lying on the ground.",
      "Hao Ming picked it up and went inside happily."
    ],
    "questions": [
      {
        "question": "What did Hao Ming look for in his pocket?",
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
        "question": "Did Hao Ming go inside happily?",
        "answer": "Yes, he picked it up and went inside happily."
      }
    ]
  },
  {
    "title": "THE ART CLASS",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_paint_palette_and_brush%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=207991",
    "content": [
      "Xin Yi wore her apron for the art class.",
      "She picked up a brush and some blue paint.",
      "She wanted to paint a picture of the ocean.",
      "Xin Yi painted big waves on the white canvas.",
      "She added a bright yellow sun in the sky.",
      "Her teacher praised her beautiful painting.",
      "Xin Yi felt very proud of her artwork.",
      "She hung the painting on the classroom wall."
    ],
    "questions": [
      {
        "question": "What did Xin Yi wear for art class?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_wooden_treehouse%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=766497",
    "content": [
      "Kai Wen and his dad built a wooden treehouse.",
      "They used thick boards and long shiny nails.",
      "They placed it high in the old apple tree.",
      "Kai Wen climbed the wooden ladder to get inside.",
      "He brought his favourite books and a blanket.",
      "It was the perfect place to read quietly.",
      "He could see the whole garden from the window.",
      "Kai Wen loved spending time in his new treehouse."
    ],
    "questions": [
      {
        "question": "What did Kai Wen and his dad build?",
        "answer": "They built a wooden treehouse."
      },
      {
        "question": "Where did they place the treehouse?",
        "answer": "They placed it high in the old apple tree."
      },
      {
        "question": "What did Kai Wen bring inside?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_tray_of_chocolate_chip_cookies%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=294324",
    "content": [
      "Aisyah decided to bake some chocolate chip cookies.",
      "She mixed the flour, sugar, and butter together.",
      "Aisyah added a lot of sweet chocolate chips.",
      "She rolled the dough into small round balls.",
      "Her mom put the tray into the hot oven.",
      "Soon, the kitchen smelled wonderfully sweet.",
      "They waited for the cookies to cool down.",
      "Aisyah ate a warm cookie with a glass of milk."
    ],
    "questions": [
      {
        "question": "What did Aisyah decide to bake?",
        "answer": "She decided to bake chocolate chip cookies."
      },
      {
        "question": "What did she add to the dough?",
        "answer": "She added a lot of sweet chocolate chips."
      },
      {
        "question": "Who put the tray in the oven?",
        "answer": "Her mom put the tray into the hot oven."
      },
      {
        "question": "What did Aisyah drink with her cookie?",
        "answer": "She drank a glass of milk."
      }
    ]
  },
  {
    "title": "THE SCHOOL TRIP",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_MONKEY_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=483860",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_toy_car_with_a_red_wheel%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=452304",
    "content": [
      "Hakim was playing with his favourite toy car.",
      "Suddenly, one of the red wheels fell off.",
      "Hakim felt very sad because the car was broken.",
      "He asked his older brother to help him.",
      "His brother found some strong craft glue.",
      "He carefully glued the wheel back onto the car.",
      "They waited for the glue to dry completely.",
      "Hakim was happy his car was fixed and ready."
    ],
    "questions": [
      {
        "question": "What was Hakim playing with?",
        "answer": "Hakim was playing with his favourite toy car."
      },
      {
        "question": "What fell off the toy car?",
        "answer": "One of the red wheels fell off."
      },
      {
        "question": "Who did Hakim ask for help?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_Snowflakes_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=397455",
    "content": [
      "Nabila woke up and looked out her bedroom window.",
      "Everything outside was covered in a thick blanket of snow.",
      "She put on her warm coat, hat, and thick gloves.",
      "Nabila stepped outside into the freezing winter air.",
      "Her boots made a crunching sound in the deep snow.",
      "She caught catching a snowflake on her pink mitten.",
      "The snowflake melted quickly into a drop of water.",
      "Nabila smiled and started to build a snow fort."
    ],
    "questions": [
      {
        "question": "What was covered in snow?",
        "answer": "Everything outside was covered in snow."
      },
      {
        "question": "What did Nabila put on to stay warm?",
        "answer": "She put on her warm coat, hat, and thick gloves."
      },
      {
        "question": "What sound did her boots make?",
        "answer": "Her boots made a crunching sound in the snow."
      },
      {
        "question": "What did Nabila start to build?",
        "answer": "Nabila started to build a snow fort."
      }
    ]
  },
  {
    "title": "THE NEW PET",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_an_ORANGE_STRIPED_KITTEN_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=698357",
    "content": [
      "Rahul went to the animal shelter with his parents.",
      "They wanted to adopt a new family pet.",
      "Rahul saw a small kitten with orange stripes.",
      "The kitten purred and rubbed against his hand.",
      "Rahul knew this was the perfect pet for him.",
      "They filled out the adoption papers at the desk.",
      "Rahul gently carried the kitten in a cardboard box.",
      "He named his new furry friend Tiger."
    ],
    "questions": [
      {
        "question": "Where did Rahul and his parents go?",
        "answer": "They went to the animal shelter."
      },
      {
        "question": "What did the small kitten look like?",
        "answer": "It was a small kitten with orange stripes."
      },
      {
        "question": "How did Rahul carry the kitten?",
        "answer": "Rahul carried the kitten in a cardboard box."
      },
      {
        "question": "What did Rahul name his new friend?",
        "answer": "He named his new furry friend Tiger."
      }
    ]
  },
  {
    "title": "THE SOCCER MATCH",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_BLACK_AND_WHITE_SOCCER_BALL_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=513176",
    "content": [
      "Nurin played in a big soccer match on Saturday.",
      "Her team wore bright green shirts and socks.",
      "The game was very close and exciting to watch.",
      "Nurin ran fast to get the black and white ball.",
      "She kicked the ball hard towards the goal net.",
      "The goalie tried to block it, but missed.",
      "Nurin scored the winning point for her team.",
      "Her teammates cheered and gave her a high five."
    ],
    "questions": [
      {
        "question": "What did Nurin's team wear?",
        "answer": "Her team wore bright green shirts and socks."
      },
      {
        "question": "What did Nurin run fast to get?",
        "answer": "Nurin ran fast to get the ball."
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_CARROT_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=936013",
    "content": [
      "Grandpa showed Aqil his growing vegetable patch.",
      "There were rows of carrots, beans, and fresh lettuce.",
      "Aqil helped to pull the pesky weeds from the soil.",
      "He watered the plants using a long green hose.",
      "Grandpa pulled a large, orange carrot from the ground.",
      "He washed the dirt off the carrot with water.",
      "Aqil took a big bite of the crunchy carrot.",
      "It tasted very sweet and delicious."
    ],
    "questions": [
      {
        "question": "What did Grandpa show Aqil?",
        "answer": "Grandpa showed Aqil his vegetable patch."
      },
      {
        "question": "What did Aqil help to do?",
        "answer": "Aqil helped to pull weeds from the soil."
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_toy_robot_with_flashing_lights%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=617304",
    "content": [
      "Li Xuan wanted to build a robot for the school contest.",
      "She gathered old cardboard boxes and plastic bottles.",
      "Li Xuan carefully glued the pieces together to form a body.",
      "She attached two silver bottle caps for the robot's eyes.",
      "Then, she painted the entire robot with bright silver paint.",
      "Li Xuan named her shiny new creation Sparky the Robot.",
      "On the day of the contest, she carried Sparky to school.",
      "The judges looked at all the different student projects.",
      "They loved how Li Xuan used recycled materials for her robot.",
      "Li Xuan won a blue ribbon for her creative and unique design."
    ],
    "questions": [
      {
        "question": "What did Li Xuan want to build?",
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
        "question": "Why did Li Xuan win a blue ribbon?",
        "answer": "She won for her creative and unique design using recycled materials."
      }
    ]
  },
  {
    "title": "THE STARRY NIGHT",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_telescope%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=171974",
    "content": [
      "Sanjay loved looking at the dark night sky.",
      "His parents gave him a telescope for his birthday.",
      "He took the telescope out to the backyard.",
      "The sky was very clear with no clouds.",
      "Sanjay looked through the lens to see the moon.",
      "The moon looked very big and full of craters.",
      "He moved the telescope to find a bright star.",
      "He saw the rings of a distant planet.",
      "Sanjay felt like a real space explorer.",
      "He could not wait to look at the stars again."
    ],
    "questions": [
      {
        "question": "What did Sanjay love looking at?",
        "answer": "Sanjay loved looking at the dark night sky."
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
        "question": "What did Sanjay feel like?",
        "answer": "He felt like a real space explorer."
      }
    ]
  },
  {
    "title": "THE PAPER BOAT",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_folded_paper_boat%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=624624",
    "content": [
      "It rained heavily all morning.",
      "A small stream of water flowed down the street.",
      "Haziq decided to fold a boat out of newspaper.",
      "He carefully folded the corners to make it strong.",
      "Haziq placed the paper boat into the rushing water.",
      "The boat bobbed up and down on the small waves.",
      "It floated quickly past the neighbour's house.",
      "Haziq ran along the pavement to follow his boat.",
      "The boat sailed all the way to the drain.",
      "Haziq decided to make another boat tomorrow."
    ],
    "questions": [
      {
        "question": "What did Haziq fold out of newspaper?",
        "answer": "He folded a boat out of newspaper."
      },
      {
        "question": "Where did Haziq place the paper boat?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_an_OLD_LADY_WEARING_GLASSES_only%2C_plain_white_background%2C_single_subject%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=888363",
    "content": [
      "Grandma could not find her reading glasses.",
      "She looked on the kitchen table and the counter.",
      "She checked the pockets of her favourite cardigan.",
      "Grandma asked Yusuf to help her find them.",
      "Yusuf looked under the sofa cushions in the living room.",
      "He searched behind the television and under the rug.",
      "Then, Yusuf looked at Grandma and started to laugh.",
      "The glasses were resting on top of Grandma's head.",
      "Grandma chuckled and thanked Yusuf for his help.",
      "She sat down to read her book happily."
    ],
    "questions": [
      {
        "question": "What could Grandma not find?",
        "answer": "Grandma could not find her reading glasses."
      },
      {
        "question": "Who did Grandma ask for help?",
        "answer": "She asked Yusuf to help her find them."
      },
      {
        "question": "Why did Yusuf start to laugh?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_blooming_flower_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=189708",
    "content": [
      "Asha found a strange, colourful seed in the park.",
      "She took it home and planted it in a pot.",
      "Asha watered the pot every single day.",
      "She put the pot near a sunny window.",
      "A week later, a small green shoot appeared.",
      "The plant grew taller and taller very quickly.",
      "Soon, a large beautiful flower bloomed.",
      "The flower petals sparkled in the sunlight.",
      "Asha showed the amazing flower to her mother.",
      "They agreed it was a truly magical plant."
    ],
    "questions": [
      {
        "question": "Where did Asha find the seed?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_wild_mushroom%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=756378",
    "content": [
      "Alex and his dad went for a hike in the forest.",
      "They wore sturdy boots and carried a backpack.",
      "The path was covered in crunchy brown leaves.",
      "Alex listened to the birds singing in the trees.",
      "They saw a small squirrel carrying an acorn.",
      "Dad pointed out a patch of wild mushrooms.",
      "They stopped to eat sandwiches on a large rock.",
      "The air smelled like fresh pine and damp earth.",
      "They walked all the way to the sparkling waterfall.",
      "It was a wonderful adventure in the deep forest."
    ],
    "questions": [
      {
        "question": "Where did Alex and his dad go for a hike?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_snowball_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=327162",
    "content": [
      "The school was closed because of the heavy snow.",
      "Faris and his friends went to the nearby park.",
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
        "question": "What did Faris and his friends decide to build?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_ONE_BOY_and_ONE_GIRL_wearing_Malaysian_primary_school_uniforms%2C_plain_white_background%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=636215",
    "content": [
      "A new student named Vinod joined the class today.",
      "Vinod looked very shy and a little nervous.",
      "He sat quietly at his desk near the back.",
      "Mei Ling decided to go and talk to him.",
      "She smiled and introduced herself to Vinod.",
      "Mei Ling asked if he wanted to play at playtime.",
      "Vinod smiled back and said yes happily.",
      "They played tag with the other children.",
      "Vinod felt much better about his new school.",
      "Mei Ling was glad she made a new friend."
    ],
    "questions": [
      {
        "question": "Who joined the class today?",
        "answer": "A new student named Vinod joined the class."
      },
      {
        "question": "How did Vinod look?",
        "answer": "Vinod looked very shy and a little nervous."
      },
      {
        "question": "What did Mei Ling ask Vinod?",
        "answer": "She asked if he wanted to play at playtime."
      },
      {
        "question": "How did Vinod feel after playing?",
        "answer": "Vinod felt much better about his new school."
      }
    ]
  },
  {
    "title": "THE MISSING DOG",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_black_coloured_dog_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=622942",
    "content": [
      "Nisha's dog, Rambo, ran out of the open gate.",
      "Nisha called his name but he did not come back.",
      "She made posters with a picture of Rambo.",
      "Nisha and her dad walked around the neighbourhood.",
      "They put the posters on trees and lamp posts.",
      "A few hours later, the telephone rang loudly.",
      "A kind neighbour had found Rambo in her garden.",
      "Nisha ran to the neighbour's house very quickly.",
      "Rambo wagged his tail and licked Nisha's face.",
      "She hugged Rambo and promised to shut the gate."
    ],
    "questions": [
      {
        "question": "How did Rambo escape?",
        "answer": "Rambo ran out of the open gate."
      },
      {
        "question": "What did Nisha put on the posters?",
        "answer": "She put a picture of Rambo on the posters."
      },
      {
        "question": "Who found Rambo?",
        "answer": "A kind neighbour had found Rambo in her garden."
      },
      {
        "question": "What did Nisha promise to do?",
        "answer": "She promised to shut the gate."
      }
    ]
  },
  {
    "title": "THE BIG RACE",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_gold_medal_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=239663",
    "content": [
      "Kavin trained every day for the school running race.",
      "He wanted to win the gold medal this year.",
      "He ran around the park to get faster and stronger.",
      "On the day of the race, Kavin felt very excited.",
      "He stood at the starting line with the other runners.",
      "The teacher blew the whistle to start the race.",
      "Kavin ran as fast as his legs could carry him.",
      "He crossed the finish line in first place.",
      "His friends cheered loudly from the side lines.",
      "Kavin felt proud as he wore the gold medal."
    ],
    "questions": [
      {
        "question": "What did Kavin train for every day?",
        "answer": "He trained for the school running race."
      },
      {
        "question": "Where did Kavin run to get faster?",
        "answer": "He ran around the park."
      },
      {
        "question": "What did the teacher do to start the race?",
        "answer": "The teacher blew the whistle."
      },
      {
        "question": "What did Kavin win?",
        "answer": "Kavin won the gold medal."
      }
    ]
  },
  {
    "title": "THE MYSTERY BOX",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_cardboard_box%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=150753",
    "content": [
      "Wei Jie found a dusty wooden box in the attic.",
      "The box was locked with a small brass padlock.",
      "He searched through the attic for a hidden key.",
      "Wei Jie found a small silver key inside an old vase.",
      "He put the key into the padlock and turned it.",
      "The lock clicked open with a sharp sound.",
      "Wei Jie slowly lifted the heavy wooden lid.",
      "Inside the box were lots of old photographs.",
      "There was also a shiny pocket watch on a chain.",
      "Wei Jie showed the amazing treasures to his grandfather.",
      "His grandfather smiled and told him stories about the past.",
      "Wei Jie realised that family history is very precious."
    ],
    "questions": [
      {
        "question": "Where did Wei Jie find the wooden box?",
        "answer": "Wei Jie found a dusty wooden box in the attic."
      },
      {
        "question": "Where did Wei Jie find the small silver key?",
        "answer": "He found the key inside an old vase."
      },
      {
        "question": "What was inside the box?",
        "answer": "Inside the box were old photographs and a pocket watch."
      },
      {
        "question": "Who did Wei Jie show the treasures to?",
        "answer": "He showed the treasures to his grandfather."
      }
    ]
  },
  {
    "title": "THE COMMUNITY GARDEN",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_ripe_red_tomato%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=261416",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_MAGIC_WAND_only%2C_black_wand_with_white_tips%2C_slight_magical_sparkle_around_the_wand%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects%2C_no_magician%2C_no_magic_hat%2C_no_rabbit%2C_no_cards%2C_no_stage%2C_no_other_magic_props%2C_no_people%2C_no_hands._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=384246",
    "content": [
      "Aqil received a magic kit for his tenth birthday.",
      "He practiced the magic tricks in his bedroom every day.",
      "Aqil learned how to make a coin disappear from his hand.",
      "He also learned how to pull a scarf from an empty tube.",
      "He decided to put on a show for his family.",
      "Aqil made a small stage using a red curtain.",
      "He wore a black cape and a tall black hat.",
      "His family sat on the sofa to watch the performance.",
      "Aqil performed his tricks perfectly without any mistakes.",
      "The coin vanished and the scarf appeared like real magic.",
      "His family clapped loudly and cheered for him.",
      "Aqil bowed gracefully, feeling like a professional magician."
    ],
    "questions": [
      {
        "question": "What did Aqil receive for his birthday?",
        "answer": "Aqil received a magic kit for his birthday."
      },
      {
        "question": "What did he learn to make disappear from his hand?",
        "answer": "He learned to make a coin disappear from his hand."
      },
      {
        "question": "What did Aqil use to make a small stage?",
        "answer": "He made a small stage using a red curtain."
      },
      {
        "question": "How did Aqil feel at the end of the show?",
        "answer": "Aqil felt like a professional magician."
      }
    ]
  },
  {
    "title": "THE LOST WALLET",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_brown_leather_wallet%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=339949",
    "content": [
      "Maryam was walking home from the local grocery store.",
      "She saw a brown leather wallet lying on the pavement.",
      "Maryam picked it up and opened it to look inside.",
      "She found some money and a driver's licence.",
      "The address on the licence was for a house nearby.",
      "Maryam walked down the street to find the correct house.",
      "She knocked on the front door of the green house.",
      "An older man answered the door looking worried.",
      "Maryam handed the brown wallet to the grateful man.",
      "He thanked her warmly for being so honest and helpful.",
      "The man offered her a small reward for her kindness.",
      "Maryam smiled and walked home feeling very proud."
    ],
    "questions": [
      {
        "question": "What did Maryam find on the pavement?",
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
        "question": "How did Maryam feel when she walked home?",
        "answer": "Maryam walked home feeling very proud."
      }
    ]
  },
  {
    "title": "THE TREE PLANTING",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_green_tree_sapling%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=347833",
    "content": [
      "The school organised a special tree planting day.",
      "Every student was given a small green sapling.",
      "Arif took his sapling to a spot near the fence.",
      "He used a small spade to dig a hole in the earth.",
      "The ground was quite hard and difficult to dig.",
      "Arif placed the roots carefully into the deep hole.",
      "He covered the roots with soft, dark soil.",
      "Then, he watered the young tree with a watering can.",
      "Arif patted the soil down to make it firm.",
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
        "question": "What did Arif use to dig a hole?",
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_baking_soda_volcano%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=984172",
    "content": [
      "Pei Yi had to complete a project for the science fair.",
      "She decided to build a model of an erupting volcano.",
      "Pei Yi used paper mache to shape the tall mountain.",
      "She painted it brown and added green paint for grass.",
      "She placed a small plastic cup inside the crater.",
      "On the day of the fair, Pei Yi set up her display.",
      "She mixed baking soda and red food colouring in the cup.",
      "Then, she carefully poured in some clear vinegar.",
      "Red foam bubbled up and flowed down the mountain.",
      "The class watched in amazement as the volcano erupted.",
      "Her teacher said it was a fantastic demonstration.",
      "Pei Yi was thrilled that her science experiment worked perfectly."
    ],
    "questions": [
      {
        "question": "What did Pei Yi build for the science fair?",
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
        "question": "How did Pei Yi feel at the end?",
        "answer": "Pei Yi was thrilled that her science experiment worked perfectly."
      }
    ]
  },
  {
    "title": "THE BEACH CLEAN",
    "image": "https://image.pollinations.ai/prompt/3D_render_of_a_clean_beach_scenery_with_sand_and_sea._No_people._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=137533",
    "content": [
      "Hakim and his family went to the beach on Sunday.",
      "They noticed that the sand was covered in plastic rubbish.",
      "Hakim felt sad that the beach looked so messy.",
      "His family decided to spend the morning cleaning it up.",
      "They found some large rubbish bags in their car.",
      "Hakim wore gloves to protect his hands from sharp items.",
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
        "question": "What did Hakim wear to protect his hands?",
        "answer": "Hakim wore gloves to protect his hands."
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_campfire_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=406454",
    "content": [
      "The family pitched their tent in the quiet woods.",
      "As the sun set, the air began to feel chilly.",
      "Dad decided it was time to build a warm campfire.",
      "He gathered dry leaves and small twigs for the base.",
      "Nurin helped collect larger logs from the surrounding forest.",
      "Dad carefully struck a match to light the small twigs.",
      "Soon, a bright, crackling fire was burning steadily.",
      "They sat on wooden logs around the warm flames.",
      "Mom brought out marshmallows to roast on long sticks.",
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
        "question": "What did Nurin help collect?",
        "answer": "Nurin helped collect larger logs from the forest."
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
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_an_apple_pie_only%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=164946",
    "content": [
      "Sofea entered the village baking contest with her grandma's recipe.",
      "She wanted to bake a classic apple pie with cinnamon.",
      "Sofea peeled and sliced the apples very carefully.",
      "She mixed the apple slices with sugar and warm spices.",
      "Then, she rolled out the pastry dough on the table.",
      "Sofea placed the apples inside and covered them with pastry.",
      "She pinched the edges to seal the delicious pie.",
      "The pie baked in the oven until it was golden brown.",
      "At the contest, the judges tasted a slice of her pie.",
      "They praised the flaky crust and the sweet apple filling.",
      "Sofea won the second prize ribbon for her tasty effort.",
      "She proudly displayed the ribbon in her family kitchen."
    ],
    "questions": [
      {
        "question": "What did Sofea bake for the contest?",
        "answer": "Sofea baked a classic apple pie with cinnamon."
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
        "question": "What prize did Sofea win?",
        "answer": "Sofea won the second prize ribbon."
      }
    ]
  },
  {
    "title": "THE BUTTERFLY",
    "image": "https://image.pollinations.ai/prompt/Isolated_3D_render_of_a_colorful_butterfly%2C_plain_white_background%2C_single_object%2C_vocabulary_flashcard_style._No_background%2C_no_scenery%2C_no_extra_objects._Cute_bright_child-friendly_Pixar-style.?width=800&height=800&nologo=true&seed=936830",
    "content": [
      "Arun found a green caterpillar on a leaf in his garden.",
      "He put it gently inside a large glass jar.",
      "Arun placed some fresh leaves inside for it to eat.",
      "The caterpillar ate a lot and grew very fat.",
      "One day, it spun a hard chrysalis around its body.",
      "Arun watched the jar patiently every day for two weeks.",
      "Finally, the chrysalis started to crack open slowly.",
      "A beautiful orange and black butterfly emerged from it.",
      "Arun took the jar outside and opened the glass lid.",
      "The butterfly rested on his finger for a brief moment.",
      "Then, it fluttered away into the bright blue sky.",
      "Watching nature change and grow is a magical experience."
    ],
    "questions": [
      {
        "question": "What did Arun find on a leaf?",
        "answer": "Arun found a green caterpillar on a leaf."
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
