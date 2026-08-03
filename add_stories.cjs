const fs = require('fs');

let data = fs.readFileSync('src/data.ts', 'utf8');

const newStories = `
      {
        title: "THE BLUE KITE",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_BLUE_KITE?width=800&height=800&nologo=true",
        content: [
          "I have a new blue kite.",
          "It has a long red tail.",
          "I take it to the big hill.",
          "The wind blows very hard today.",
          "My kite flies high in the sky.",
          "It looks like a dancing bird.",
          "I hold the string very tight."
        ],
        questions: [
          { question: "What colour is the kite?", answer: "The kite is blue." },
          { question: "Where does the child take the kite?", answer: "To the big hill." },
          { question: "What does the kite look like in the sky?", answer: "It looks like a dancing bird." },
          { question: "How does the child hold the string?", answer: "The child holds the string very tight." }
        ]
      },
      {
        title: "THE LITTLE SEED",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_LITTLE_SEED?width=800&height=800&nologo=true",
        content: [
          "I plant a little brown seed.",
          "I put it in the soft dirt.",
          "The rain falls on the dirt.",
          "The sun shines warm and bright.",
          "A small green shoot comes up.",
          "It grows into a tall plant.",
          "Now it has a pretty pink flower."
        ],
        questions: [
          { question: "What does the child plant?", answer: "A little brown seed." },
          { question: "What falls on the dirt?", answer: "The rain falls on the dirt." },
          { question: "What colour is the shoot?", answer: "The shoot is green." },
          { question: "What does the plant have now?", answer: "It has a pretty pink flower." }
        ]
      },
      {
        title: "MY FAST BIKE",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_MY_FAST_BIKE?width=800&height=800&nologo=true",
        content: [
          "I ride my new red bike.",
          "It has two black wheels.",
          "I wear my yellow safety helmet.",
          "I pedal fast down the path.",
          "The wind blows in my face.",
          "I ring my shiny silver bell.",
          "Riding my bike is so much fun."
        ],
        questions: [
          { question: "What colour is the bike?", answer: "The bike is red." },
          { question: "What does the child wear on their head?", answer: "A yellow safety helmet." },
          { question: "What blows in the child's face?", answer: "The wind blows in their face." },
          { question: "What kind of bell does the bike have?", answer: "A shiny silver bell." }
        ]
      },
      {
        title: "THE LOST KITTEN",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_LOST_KITTEN?width=800&height=800&nologo=true",
        content: [
          "I hear a soft meow outside.",
          "I look under the wooden stairs.",
          "There is a tiny orange kitten.",
          "It looks very cold and hungry.",
          "I give it some warm milk.",
          "The kitten drinks the milk quickly.",
          "Then it falls asleep on my lap."
        ],
        questions: [
          { question: "What does the child hear?", answer: "A soft meow." },
          { question: "Where is the kitten?", answer: "Under the wooden stairs." },
          { question: "What colour is the kitten?", answer: "It is an orange kitten." },
          { question: "What does the kitten drink?", answer: "It drinks warm milk." }
        ]
      },
      {
        title: "THE BIG PUDDLE",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_BIG_PUDDLE?width=800&height=800&nologo=true",
        content: [
          "It rains all morning today.",
          "Now the rain has finally stopped.",
          "I wear my red rubber boots.",
          "There is a big puddle outside.",
          "I jump right into the water.",
          "Splash! The water goes everywhere.",
          "I love playing in the puddles."
        ],
        questions: [
          { question: "What happens all morning?", answer: "It rains all morning." },
          { question: "What does the child wear?", answer: "Red rubber boots." },
          { question: "What is outside?", answer: "A big puddle." },
          { question: "What happens when the child jumps?", answer: "The water goes everywhere." }
        ]
      },
      {
        title: "MY FLUFFY CLOUD",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_MY_FLUFFY_CLOUD?width=800&height=800&nologo=true",
        content: [
          "I look up at the sky.",
          "I see a big white cloud.",
          "It looks like a fluffy sheep.",
          "The wind pushes the cloud slowly.",
          "Now it looks like a dragon.",
          "I watch it until it disappears.",
          "The sky is clear and blue again."
        ],
        questions: [
          { question: "What does the child see in the sky?", answer: "A big white cloud." },
          { question: "What does the cloud look like first?", answer: "It looks like a fluffy sheep." },
          { question: "What pushes the cloud?", answer: "The wind pushes the cloud." },
          { question: "What does the cloud look like next?", answer: "It looks like a dragon." }
        ]
      },
      {
        title: "THE HAPPY DUCK",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_HAPPY_DUCK?width=800&height=800&nologo=true",
        content: [
          "A yellow duck swims in the lake.",
          "It has a flat orange beak.",
          "The duck quacks very loudly.",
          "It dips its head in the water.",
          "The duck is looking for food.",
          "It finds a small green leaf.",
          "The duck eats the leaf happily."
        ],
        questions: [
          { question: "Where does the duck swim?", answer: "In the lake." },
          { question: "What colour is its beak?", answer: "Its beak is orange." },
          { question: "Why does it dip its head in the water?", answer: "It is looking for food." },
          { question: "What does the duck eat?", answer: "A small green leaf." }
        ]
      },
      {
        title: "BAKING A CAKE",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_BAKING_A_CAKE?width=800&height=800&nologo=true",
        content: [
          "Dad and I bake a cake today.",
          "We mix flour, sugar, and eggs.",
          "I stir the mixture with a spoon.",
          "We pour it into a round tin.",
          "Dad puts it in the hot oven.",
          "The kitchen smells very sweet.",
          "We eat the cake with milk."
        ],
        questions: [
          { question: "Who bakes the cake?", answer: "Dad and the child." },
          { question: "What do they mix?", answer: "Flour, sugar, and eggs." },
          { question: "Where does Dad put the tin?", answer: "In the hot oven." },
          { question: "What do they drink with the cake?", answer: "They drink milk." }
        ]
      },
      {
        title: "THE TINY ANT",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_TINY_ANT?width=800&height=800&nologo=true",
        content: [
          "I see a tiny black ant.",
          "It walks on the green leaf.",
          "The ant finds a piece of bread.",
          "The bread is bigger than the ant.",
          "But the ant is very strong.",
          "It carries the bread to its home.",
          "The ant will share the food."
        ],
        questions: [
          { question: "What colour is the ant?", answer: "The ant is black." },
          { question: "Where does the ant walk?", answer: "On the green leaf." },
          { question: "What does the ant find?", answer: "A piece of bread." },
          { question: "What will the ant do with the food?", answer: "The ant will share it." }
        ]
      },
      {
        title: "MY NIGHT LIGHT",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_MY_NIGHT_LIGHT?width=800&height=800&nologo=true",
        content: [
          "It is time to go to bed.",
          "My room is very dark now.",
          "I turn on my night light.",
          "It glows with a soft blue colour.",
          "The light makes shadows on the wall.",
          "I am not afraid of the dark.",
          "I close my eyes and sleep well."
        ],
        questions: [
          { question: "When is it time to go to bed?", answer: "Now." },
          { question: "What does the child turn on?", answer: "Their night light." },
          { question: "What colour does the light glow?", answer: "A soft blue colour." },
          { question: "Is the child afraid of the dark?", answer: "No, they are not afraid." }
        ]
      },
      {
        title: "THE BIG BALLOON",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_BIG_BALLOON?width=800&height=800&nologo=true",
        content: [
          "I have a big red balloon.",
          "It has a long white string.",
          "I run with it in the garden.",
          "Suddenly, I let go of the string.",
          "The balloon floats up high.",
          "It goes over the tall trees.",
          "I wave goodbye to my balloon."
        ],
        questions: [
          { question: "What colour is the balloon?", answer: "The balloon is red." },
          { question: "What colour is the string?", answer: "The string is white." },
          { question: "What happens when the child lets go?", answer: "The balloon floats up high." },
          { question: "What does the child do at the end?", answer: "The child waves goodbye." }
        ]
      },
      {
        title: "THE QUIET MOUSE",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_QUIET_MOUSE?width=800&height=800&nologo=true",
        content: [
          "A small grey mouse lives in the barn.",
          "He is very quiet and shy.",
          "He comes out when it is dark.",
          "The mouse looks for some food.",
          "He finds a piece of yellow cheese.",
          "He eats the cheese very quickly.",
          "Then he runs back to his hole."
        ],
        questions: [
          { question: "Where does the mouse live?", answer: "In the barn." },
          { question: "When does he come out?", answer: "When it is dark." },
          { question: "What does the mouse find?", answer: "A piece of yellow cheese." },
          { question: "Where does he run back to?", answer: "Back to his hole." }
        ]
      },
      {
        title: "MY PAINTBOX",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_MY_PAINTBOX?width=800&height=800&nologo=true",
        content: [
          "I have a new shiny paintbox.",
          "It has many bright colours inside.",
          "I dip my brush in the water.",
          "I paint a picture of a house.",
          "The house has a red roof.",
          "I paint a big yellow sun too.",
          "My picture looks very beautiful."
        ],
        questions: [
          { question: "What is inside the paintbox?", answer: "Many bright colours." },
          { question: "What does the child paint first?", answer: "A picture of a house." },
          { question: "What colour is the roof?", answer: "The roof is red." },
          { question: "What else does the child paint?", answer: "A big yellow sun." }
        ]
      },
      {
        title: "THE TALL GIRAFFE",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_TALL_GIRAFFE?width=800&height=800&nologo=true",
        content: [
          "We go to the zoo today.",
          "I see a very tall giraffe.",
          "It has a long neck and long legs.",
          "The giraffe is yellow with brown spots.",
          "It reaches up to a tall tree.",
          "The giraffe eats the green leaves.",
          "It looks at me and blinks its eyes."
        ],
        questions: [
          { question: "Where do they go today?", answer: "To the zoo." },
          { question: "What does the giraffe look like?", answer: "It is yellow with brown spots." },
          { question: "What does the giraffe reach up to?", answer: "A tall tree." },
          { question: "What does the giraffe eat?", answer: "The green leaves." }
        ]
      },
      {
        title: "THE NOISY TRAIN",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_NOISY_TRAIN?width=800&height=800&nologo=true",
        content: [
          "I stand near the train tracks.",
          "I hear a loud whistle blow.",
          "A big train comes down the track.",
          "It is painted red and yellow.",
          "The wheels make a clickety-clack sound.",
          "The train goes by very fast.",
          "I wave at the driver in the front."
        ],
        questions: [
          { question: "What does the child hear?", answer: "A loud whistle blow." },
          { question: "What colours is the train?", answer: "Red and yellow." },
          { question: "What sound do the wheels make?", answer: "A clickety-clack sound." },
          { question: "Who does the child wave at?", answer: "The driver in the front." }
        ]
      },
      {
        title: "THE LITTLE STAR",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_LITTLE_STAR?width=800&height=800&nologo=true",
        content: [
          "The sun goes down in the evening.",
          "The sky turns dark blue.",
          "I see one little star shine.",
          "It sparkles brightly in the sky.",
          "More stars come out to join it.",
          "The moon is big and round too.",
          "The night sky is very pretty."
        ],
        questions: [
          { question: "What turns dark blue?", answer: "The sky." },
          { question: "What sparkles brightly?", answer: "One little star." },
          { question: "What else comes out in the sky?", answer: "More stars and the moon." },
          { question: "How does the night sky look?", answer: "Very pretty." }
        ]
      },
      {
        title: "MY WOODEN BOAT",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_MY_WOODEN_BOAT?width=800&height=800&nologo=true",
        content: [
          "Grandpa made me a wooden boat.",
          "It has a small white sail.",
          "I take it to the little stream.",
          "I put the boat in the water.",
          "The water carries the boat away.",
          "It floats past the green rocks.",
          "I follow my boat down the stream."
        ],
        questions: [
          { question: "Who made the wooden boat?", answer: "Grandpa." },
          { question: "What kind of sail does it have?", answer: "A small white sail." },
          { question: "Where does the child put the boat?", answer: "In the water of the stream." },
          { question: "What does the boat float past?", answer: "The green rocks." }
        ]
      },
      {
        title: "THE BUSY BEE",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_BUSY_BEE?width=800&height=800&nologo=true",
        content: [
          "A busy bee flies in the garden.",
          "It wears a black and yellow coat.",
          "The bee lands on a red flower.",
          "It collects sweet nectar to drink.",
          "Then it flies to a yellow flower.",
          "The bee works hard all day long.",
          "It will make honey in the hive."
        ],
        questions: [
          { question: "Where does the bee fly?", answer: "In the garden." },
          { question: "What does the bee land on?", answer: "A red flower." },
          { question: "What does the bee collect?", answer: "Sweet nectar." },
          { question: "Where will the bee make honey?", answer: "In the hive." }
        ]
      },
      {
        title: "THE FRIENDLY SNOWMAN",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_THE_FRIENDLY_SNOWMAN?width=800&height=800&nologo=true",
        content: [
          "We made a big snowman today.",
          "He has two stones for his eyes.",
          "I gave him my blue scarf.",
          "He looks very happy and cold.",
          "A little bird lands on his hat.",
          "The snowman stands in the garden.",
          "He will stay until the sun comes."
        ],
        questions: [
          { question: "What did they make today?", answer: "A big snowman." },
          { question: "What are his eyes made of?", answer: "Two stones." },
          { question: "What lands on his hat?", answer: "A little bird." },
          { question: "When will the snowman go away?", answer: "When the sun comes." }
        ]
      },
      {
        title: "MY NEW PUPPY",
        image: "https://image.pollinations.ai/prompt/high_quality_Studio_Ghibli_inspired_cartoon_illustration_cute_childrens_storybook_style_soft_pastel_colors_warm_lighting_MY_NEW_PUPPY?width=800&height=800&nologo=true",
        content: [
          "We have a new little puppy.",
          "His fur is soft and brown.",
          "He likes to chew on my shoes.",
          "I throw a small red ball.",
          "The puppy runs to catch it fast.",
          "He brings the ball back to me.",
          "I love playing with my puppy."
        ],
        questions: [
          { question: "What does the new puppy look like?", answer: "His fur is soft and brown." },
          { question: "What does he like to chew on?", answer: "He likes to chew on shoes." },
          { question: "What does the child throw?", answer: "A small red ball." },
          { question: "What does the puppy do with the ball?", answer: "He brings it back to the child." }
        ]
      }
`;

// Find where Little Readers ends
const littleIndex = data.indexOf("id: 'little'");
if (littleIndex !== -1) {
    const startOfGrowing = data.indexOf("id: 'growing'");
    if (startOfGrowing !== -1) {
        // We find the last `]` before startOfGrowing
        const sliceStr = data.substring(littleIndex, startOfGrowing);
        const lastBracketIndex = sliceStr.lastIndexOf(']');
        if (lastBracketIndex !== -1) {
            const before = data.substring(0, littleIndex + lastBracketIndex);
            const after = data.substring(littleIndex + lastBracketIndex);
            const newData = before + ",\n" + newStories + after;
            
            // Also need to update the count in Little Readers to 30
            const finalData = newData.replace(/count: '10 Stories'/, "count: '30 Stories'");
            
            fs.writeFileSync('src/data.ts', finalData, 'utf8');
            console.log("Successfully added 20 stories to Little Readers");
        }
    }
}
