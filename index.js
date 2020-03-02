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

//Task 46

function runningAverage(num) {
  let total = 0;
  let calls = 0;
  return function(n) {
    calls++;
    total += n;
    return Math.round((total / calls) * 100) / 100;
  };
}

//Task 47

const stringExpansion = str => {
  return str.replace(/(\d)([^\d]*)/g, function(match) {
    return match.slice(1).repeat(match[0]);
  });
};

//Task 48

const followTheSpy = arr => {
  let correctRoute = [];
  arr
    .map(elem => {
      if (!arr.find(country => country[1] === elem[0])) {
        correctRoute.push(elem[0]);
        correctRoute.push(elem[1]);
      }
    })
    .map(() => {
      arr.map(elem => {
        elem[0] === correctRoute[correctRoute.length - 1] &&
          correctRoute.push(elem[1]);
      });
    });
  return correctRoute.join(",");
};

//Task 49

const humanYearsCatYearsDogYears = humYears => {
  let yearsArr = [humYears, 0, 0];
  if (humYears === 1) {
    yearsArr[1] = 15;
    yearsArr[2] = 15;
  } else if (humYears === 2) {
    yearsArr[1] = 24;
    yearsArr[2] = 24;
  } else if (humYears >= 3) {
    yearsArr[1] = 24 + 4 * (humYears - 2);
    yearsArr[2] = 24 + 5 * (humYears - 2);
  }
  return yearsArr;
};

//Task 50

String.prototype.camelCase = function() {
  return this.split(" ")
    .map(elem => {
      return elem.charAt(0).toUpperCase() + elem.slice(1);
    })
    .join("");
};

//Task 51

const abbreviatedName = name => {
  return name
    .split(" ")
    .map((elem, i) => {
      if (i > 0) {
        return elem.charAt(0) + ".";
      }
      return elem;
    })
    .join(" ");
};

//Task 52

const sumAll = arr => {
  if (arr[1] > arr[0]) {
    let summArr = [];
    let counter = arr[0] - 1;
    for (let i = arr[0]; i <= arr[1]; i++) {
      counter++;
      summArr.push(counter);
    }
    return summArr.reduce((a, b) => a + b);
  } else if (arr[0] > arr[1]) {
    let summArr = [];
    let counter = arr[1] - 1;
    for (let i = arr[1]; i <= arr[0]; i++) {
      counter++;
      summArr.push(counter);
    }
    return summArr.reduce((a, b) => a + b);
  }
};

//Task 53

const diffArray = (arr1, arr2) => {
  let filterArr1 = arr1.filter(x => arr2.indexOf(x) === -1);
  let filterArr2 = arr2.filter(x => arr1.indexOf(x) === -1);
  return filterArr1.concat(filterArr2);
};

//Task 54

const convertToRoman = num => {
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = "";
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
};

//Task 55

const whatIsInAName = (collection, source) => {
  let arr = [];
  let keys = Object.keys(source);
  let = collection.filter(obj => {
    return keys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return arr;
};
