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

//Task 76

const deepClone = obj => {
  let newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};

//Task 77

const expressionMatter = (a, b, c) =>
  Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

//Task 78

const validBraces = braces => {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return !braces.length;
};

//Task 79

function isPrimeNumber(val) {
  if (val === 1 || val === 0) return false;
  let i = 2;
  const limit = Math.sqrt(val);
  while (i <= limit) {
    if (val % i === 0 || val === 1) {
      return false;
    }
    i += 1;
  }
  return true;
}

const numPrimorial = n => {
  const numArr = [];
  counter = 1;
  do {
    counter++;
    if (isPrimeNumber(counter)) {
      numArr.push(counter);
    }
  } while (numArr.length < n);
  return numArr.reduce((a, b) => a * b);
};

//Task 80

function isPrimeVal(val) {
  if (val === 1 || val === 0) return false;
  let i = 2;
  const limit = Math.sqrt(val);
  while (i <= limit) {
    if (val % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}
const sumPrimeIndexedElements = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrimeVal(i)) {
      sum += arr[i];
    }
  }
  return sum;
};

//Task 81

const nbMonths = (
  startPriceOld,
  startPriceNew,
  savingsPerMonth,
  percentLossByMonth
) => {
  let months = 0;
  let moneySaved = 0;

  while (startPriceNew > startPriceOld + moneySaved) {
    moneySaved += savingsPerMonth;
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    months++;
    if (months % 2 == 1) {
      percentLossByMonth += 0.5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
};

//Task 82

const bouncingBall = (h, bounce, window) => {
  if (bounce >= 1 || bounce < 0 || window > h) return -1;

  let count = 0;

  while (h > window) {
    h = h * bounce;
    count += 2;
  }
  return count - 1;
};

//Task 83

const findMissing = arr => {
  const testConstant1 = arr[1] - arr[0];
  const testConstant2 = arr[2] - arr[1];
  if (testConstant1 === testConstant2) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] != testConstant1) {
        return arr[i - 1] + testConstant1;
      }
    }
  } else {
    const corConstant = Math.min(testConstant1, testConstant2);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] != corConstant) {
        return arr[i - 1] + corConstant;
      }
    }
  }
};

//Task 84

const addedChar = (str1, str2) => {
  const arr1 = str1.split("");
  const delimitedArr1 = [];
  let counter1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr1[i + 1]) {
      delimitedArr1.push(arr1.slice(counter1, i + 1).join(""));
      counter1 = i + 1;
    }
  }

  const arr2 = str2.split("");
  const delimitedArr2 = [];
  let counter2 = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] != arr2[i + 1]) {
      delimitedArr2.push(arr2.slice(counter2, i + 1).join(""));
      counter2 = i + 1;
    }
  }

  let res = [];
  delimitedArr2.filter(word => {
    if (delimitedArr1.indexOf(word) === -1) {
      res.push(word);
    }
  });
  return res[0][0];
};

//Task 85

const validate_bet = (arr, str) => {
  if (str.replace(/[[0-9 ,]/g, "").length > 0) return null;
  const arrNum = str
    .replace(/[^[0-9 ,]/g, "")
    .replace(/,/g, " ")
    .split(" ")
    .filter(elem => elem.length != "")
    .sort();
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > arr[1] || arrNum.length < arr[0]) return null;
  }
  return arrNum;
};
