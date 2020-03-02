//Variant 1
function golfScore(par, strokes) {
  if (par < 0 || strokes < 0) {
    return "Error";
  } else if (typeof par === "string" || typeof par === "string") {
    return "Error2";
  } else if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
}
//Variant 2
function golfScoreRedone(par, strokes) {
  switch (true) {
    case par < 0 || strokes < 0:
      return "Error";
      break;
    case typeof par === "string" || typeof par === "string":
      return "Error2";
      break;
    case strokes === 1:
      return "Hole-in-one!";
      break;
    case strokes <= par - 2:
      return "Eagle";
      break;
    case strokes === par - 1:
      return "Birdie";
      break;
    case strokes === par:
      return "Par";
      break;
    case strokes === par + 1:
      return "Bogey";
      break;
    case strokes === par + 2:
      return "Double Bogey";
      break;
    case strokes >= par + 3:
      return "Go Home!";
      break;
  }
}

//Task 2
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

//Task 3
function isBoolean(bool) {
  return typeof bool === "boolean";
}

//Task 4
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
//Task 5
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwards", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlok",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(firstName, prop) {
  for (let person of contacts) {
    if (person.firstName === firstName) {
      const userInform = person[prop];
      return userInform ? userInform : "No such property";
    }
  }
  return "No such contact";
}

//Task 6

const reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");

//Task 7

const randomFraction = () => Math.round(Math.random() * 10);

//Task 11

const findLongestWord = str => {
  let longestWord = str.split(" ").sort((a, b) => {
    return b.length - a.length;
  });
  return longestWord[0].length;
};

//Task 10

const trimWhiteSpaces = str => str.split(" ").join("");

//Task 9

const getNumbers = str => str.match(/[0-9]/g);

//Task 8
//Variant 1
const factorialize = n => {
  if (n == 0 || n == 1) return n;
  let result = n;
  while (n > 1) {
    n--;
    result *= n;
  }

  return result;
};

//Variant 2
const factorializeRec = n => {
  if (n == 1 || n == 0) {
    return n;
  } else {
    return n * factorializeRec(n - 1);
  }
};

//Task 15

const confirmEnding = (str, target) => {
  if (target == str.substring(str.length - target.length, str.length)) {
    return true;
  }
  return false;
};

//Task 14

const cloneArray = arr => {
  let newArr = [...arr];
  return newArr;
};

//Task 13

const largestOfFour = arr => {
  return arr.map(a => Math.max(...a));
};

//Task 12

const titleCase = str => {
  return str
    .split(/\s+/)
    .map(element => {
      return element[0].toUpperCase() + element.substring(1).toLowerCase();
    })
    .join(" ");
};

//Task 56

const myReplace = (str, before, after) => {
  let newStr = str.replace(before, after);
  if (before.charAt(0).toUpperCase() == before.charAt(0)) {
    let newAfter = after[0].toUpperCase() + after.slice(1);
    return newStr.replace(after, newAfter);
  }
  return newStr;
};

//Task 57

const translatePigLatin = str => {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
};

//Task 58

const findLetter = str => {
  let lettersArr = str.split("");
  for (let i = 0; i < lettersArr.length; i++) {
    if (lettersArr[i].charCodeAt() != lettersArr[i + 1].charCodeAt() - 1) {
      return String.fromCharCode(lettersArr[i].charCodeAt() + 1);
    } else if (i == lettersArr.length - 2) {
      return undefined;
    }
  }
};

//Task 59

const uniteUnique = (...arrs) => {
  return arrs.reduce((accum, currentArr) => {
    return accum.concat(currentArr.filter(x => accum.indexOf(x) === -1));
  });
};

//Task 60

const convertHTML = str => {
  const regExp = [/&/g, /</g, />/g, /"/g, /'/g];
  const charactersAddArr = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  for (let i = 0; i < charactersAddArr.length; i++) {
    str = regExp[i][Symbol.replace](str, charactersAddArr[i]);
  }
  return str;
};

//Task 61

const spinalCase = str => {
  return str
    .split(/\s|_|(?=[A-Z])/g)
    .join("-")
    .toLowerCase();
};

//Task 62

const swapCases = str => {
  let re = /([a-z]+)|([A-Z]+)/g;
  return str.replace(re, (match, chr) => {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
};

//Task 63

const insert = (str, insertable, position = 0) => {
  if (insertable == undefined) return str;
  const strBefore = str.substring(0, position);
  const strAfter = str.substring(position);
  const finalStr = strBefore + `${insertable} ` + strAfter;
  return finalStr;
};

//Task 64

const sumFibs = n => {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr.filter(elem => elem % 2 != 0 && elem <= n).reduce((a, b) => a + b);
};

//Task 65

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};

const range = (start, end) => {
  return [...Array(end - start + 1)].map((_, i) => start + i);
};

const smallestCommons = arr => {
  const start = Math.min(...arr);
  const end = Math.max(...arr);

  return range(start, end).reduce(function(a, b) {
    return lcm(a, b);
  });
};
