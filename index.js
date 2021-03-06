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


//Task 16

const repeatStringNumTime = (str, num) => {
  let newStr = "";
  for (let i = 0; i <= num; i++) {
    newStr += str;
  }
  return newStr;
};

//Task 17

const truncateString = (str, num) => {
  if (str.length < 3) {
    return str.slice(0, num) + "...";
  } else if (str.length > num) {
    return str.slice(0, num - 3) + "...";
  } else {
    return str;
  }
};

//Task 18

const humanize_format = num => {
  if (num === undefined) return "";
  if (num === 0) return "0";
  switch (String(num)[String(num).length - 1]) {
    case "1":
      return num + "st";
      break;
    case "2":
      return num + "nd";
      break;
    case "3":
      return num + "rd";
      break;
    default:
      return num + "th";
  }
};

//Task 19

const arrayChunks = (arr, size) => {
  let resultArr = [];
  while (arr.length > size) {
    resultArr.push(arr.splice(0, size));
  }
  if (arr.length) resultArr.push(arr);

  return resultArr;
};

//Task 20

const truncateArray = (arr, howMany) => {
  arr.splice(0, howMany);
  return arr;
};

//Task 21

const checkLetters = arr => {
  let arr1 = arr[0].toLowerCase().split("");
  let arr2 = arr[1].toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      count++;
    }
  }
  return count == arr2.length ? true : false;
};

//Task 22

const removeFalsyValues = arr => {
  return arr.filter(element => Boolean(element));
};

//Task 23

const destroyer = (arr, ...args) => {
  return arr.filter(element => {
    return args.indexOf(element) == -1;
  });
};

//Task 24

const getIndexToInsert = (arr, num) => {
  const newArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    if (num > newArr[i - 1] && num <= newArr[i]) {
      return i;
    } else if (num <= newArr[0]) {
      return 0;
    } else if (num > newArr[newArr.length - 1]) {
      return newArr.length;
    }
  }
};

//Task 25

const rot13Encoder = str => {
  let intermArr = str.split("");
  let codedArr = intermArr.map(element => {
    if (element.charCodeAt() >= 65 && element.charCodeAt() <= 77) {
      return element.charCodeAt() + 13;
    } else {
      return element.charCodeAt() - 13;
    }
  });
  return String.fromCharCode(...codedArr);
//Task 26

const getAverage = marks => {
  const allValues = marks.reduce((accum, curVal) => accum + curVal);
  return Math.round(allValues / marks.length);
};

//Task 27

class Human {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Human {
  sex = "male";
  constructor(name) {
    super(name);
  }
}
class Woman extends Human {
  sex = "female";
  constructor() {
    super(name);
  }
}

class God {
  constructor() {}
  static create(manName, womanName) {
    let man = new Man(manName);
    let woman = new Woman(womanName);
    const arr = [];
    arr.push(man);
    arr.push(woman);
    return arr;
  }
}

//Task 28

const getVowelCount = str => {
  let vowelsCount = 0;
  let internArr = str.split("");
  const neededCharacters = ["a", "e", "i", "o", "u"];
  return internArr.filter(element => neededCharacters.includes(element)).length;
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
  let biggerArr = arr1.length >= arr2.length ? arr1 : arr2;
  let smallerArr = biggerArr == arr1 ? arr2 : arr1;
  return biggerArr.map((el, ind) => {
    if (!smallerArr[ind]) {
      smallerArr[ind] = 0;
    }
    return el + smallerArr[ind];
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
