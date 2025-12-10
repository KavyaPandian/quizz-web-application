type Q = {
  q: string;
  options: string[];
  answer: number;
};

const questions: Q[] = [
  { q: "What sound does a cat make?", options: ["Bhau-Bhau","Meow-Meow","Oink-Oink"], answer: 1 },
  { q: "What would you probably find in your fridge?", options: ["Shoes","Ice Cream","Books"], answer: 1 },
  { q: "How many stars are in the sky?", options: ["Two","Infinite","One Hundred"], answer: 1 },
  { q: "What color are bananas?", options: ["Blue","Yellow","Red"], answer: 1 },
];

export default questions;
