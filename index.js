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

//Task 26

const getAverage = marks => {
  const allValues = marks.reduce((accum, curVal) => accum + curVal);
  return Math.round(allValues / marks.length);
};

//Task 27

class Human {
  constructor() {}
}
class Man extends Human {
  sex = "male";
  constructor(name) {
    super();
    this.name = name;
  }
}
class Woman extends Human {
  sex = "female";
  constructor(name) {
    super();
    this.name = name;
  }
}

class God {
  constructor() {}
  static create(manName, womanName) {
    let man = new Man();
    man.name = manName;
    let woman = new Woman();
    woman.name = womanName;
    const arr = [];
    arr.push(man);
    arr.push(woman);
    return arr;
  }
}

//Task 28

const getVowelCount = str => {
  let volwesCount = 0;
  let internArr = str.split("");
  for (let i = 0; i < internArr.length; i++) {
    if (
      internArr[i] === "a" ||
      internArr[i] === "e" ||
      internArr[i] === "i" ||
      internArr[i] === "o" ||
      internArr[i] === "u"
    ) {
      volwesCount++;
    }
  }
  return volwesCount;
};

//Task 29

const removeDuplicates = arr => {
  return arr.filter((element, ind) => arr.indexOf(element) == ind);
};

//Task 30

const peopleInBus = busStops => {
  const getInt = busStops.reduce((accum, curVal) => {
    return accum + curVal[1];
  }, 0);
  const getOut = busStops.reduce((accum, curVal) => {
    return accum + curVal[0];
  }, 0);
  return getOut - getInt;
};

//Task 31

const reverseStringInRange = (str, range) => {
  const arrOfStr = str.split("");
  const piceOfArr = arrOfStr.slice(range[0], range[1] + 1).reverse();
  arrOfStr.splice(range[0], piceOfArr.length, ...piceOfArr);
  return arrOfStr;
};

//Task 32

const numberToArray = num => {
  return String(num)
    .split("")
    .reverse();
};

//Task 33

const arrayPlusArray = (arr1, arr2) => {
  let corArr = arr1.length >= arr2.length ? arr1 : arr2;
  let anArr = corArr == arr1 ? arr2 : arr1;
  return corArr.map((el, ind) => {
    if (anArr[ind] === undefined) {
      anArr[ind] = 0;
    }
    return el + anArr[ind];
  });
};

//Task 34

const maxTripletSum = arr => {
  const sortedArrWithoutDubl = arr
    .filter((element, ind) => arr.indexOf(element) == ind)
    .sort((a, b) => b - a);
  const summ =
    sortedArrWithoutDubl[0] + sortedArrWithoutDubl[1] + sortedArrWithoutDubl[2];
  return summ;
};

//Task 35

const arrayLeaders = arr => {
  return arr.filter((elem, i) => {
    return elem > arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0);
  });
};
