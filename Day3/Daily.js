//Daily1

makeAllCaps = (array) => {
  console.log(array);
  return array.map((v) => v.toUpperCase());
};

sortWords = (array) => {
  console.log(array);
  return array.sort();
};

//Test:
Promise.resolve(["cucumber", "tomatos", "avocado"])
  .then(makeAllCaps)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

//Daily2

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

let toJs = (json) => {
  return new Promise((resolve, reject) => {
    if (Object.entries(JSON.parse(json)).length > 0) {
      resolve(JSON.parse(json));
    } else {
      reject("Empty!");
    }
  });
};


let toMorse = (morseJS) => {
  let wordArr = prompt(
    "write couple of words to translate to morse"
  )
    .toLowerCase()
    .replaceAll(" ", "")
    .split("");

  return new Promise((resolve, reject) => {
    if (wordArr.every((v) => v in morseJS)) {

      resolve(wordArr.map((v) => morseJS[v]));
    } else {

      reject("The word/s are not exist, sorry");
    }
  });
};

let joinWords = (arr) => arr.join("\n");

toJs(morse)
  .then(toMorse)
  .then(joinWords)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
