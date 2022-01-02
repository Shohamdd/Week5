//Ex1 = the sent data appear in the URL LINK


//Ex2 = server will appear the data


//Ex3
let marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

jsonElement = JSON.stringify(marioGame);
console.log(jsonElement);
//the nested object is string  
jsonElementPretty = JSON.stringify(marioGame, null, 2);
console.log(jsonElementPretty);
