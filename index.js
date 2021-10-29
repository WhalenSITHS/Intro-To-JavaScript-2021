/* const numbersArr = [1, 2, 3, 4, 5]; */

/* numbersArr.forEach((number) => {
  //iterate through the array and run function on each element
  //pass each element into the function as a parameter
  console.log(number * 2);
  console.log(numbersArr);
}); */

/* const newArr = numbersArr.map((number) => {
  return number * 2;
});
const newArr = numbersArr.map((number) => number * 2);

console.log(newArr);
 */

const characters = [
  {
    name: "Superman",
    powers: ["Flight", "Strength", "Heat Vision"],
    hero: true,
  },
  {
    name: "Batman",
    powers: ["Capitalism", "focused"],
    hero: true,
  },
  {
    name: "Spiderman",
    powers: ["Spider-sense", "Strength", "smart"],
    hero: true,
  },
  {
    name: "Joker",
    powers: ["crazy"],
    hero: false,
  },
  {
    name: "Lex Luthor",
    powers: ["Capitalism", "smart"],
    hero: false,
  },
  {
    name: "Russell Koshkin",
    powers: [
      "Smells like a butt",
      "disliked by his peers",
      "bad at soccer",
      "can't read the room",
    ],
    hero: false,
  },
  {
    name: "Daniel",
    powers: ["Loud", "Sussy Web Design", "Afraid of hair colors"],
    hero: false,
  },
];

characters
  .filter((character) => character.hero === false)
  .forEach((villainn) => {
    console.log(villain.name);
  });
