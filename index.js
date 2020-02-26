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

//Task 36

const rowWeights = arr => {
  const finalArr = [];
  const valueArr1 = arr
    .filter((elem, i) => {
      return i % 2 == 0;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
  const valueArr2 = arr
    .filter((elem, i) => {
      return i % 2 == 0 ? false : true;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
  finalArr.push(valueArr1, valueArr2);
  return finalArr;
};

//Task 37
function isPrime(val) {
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
const minimumNumber = arr => {
  sumArr = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  let nextPrime;
  let counter = 1;
  if (isPrime(sumArr)) return 0;
  while (!nextPrime) {
    if (isPrime(sumArr + counter)) {
      nextPrime = sumArr + counter;
    }
    counter++;
  }
  return counter - 1;
};

//Task 38

const maxProduct = arr => {
  let sums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    sums[i] = arr[i] * arr[i + 1];
  }
  sums.sort((a, b) => b - a);
  return sums[0];
};

//Task 39

const uniqueInOrder = value => {
  if (typeof value === String) {
    let arr = value.split("");
    return arr.filter((element, ind) => arr.indexOf(element) == ind);
  } else {
    return value.filter((element, ind) => value.indexOf(element) == ind);
  }
};

//Task 40

const findFriend = line => {
  let friendMask = "red";
  let counter = 0;

  for (let i = 0; i < line.length; i++) {
    let elem = line[i];
    if (elem === friendMask) {
      if (line[i - 1] === "blue" && line[i + 1] === "blue") {
        counter += 1;
      } else if (line[i + 1] === "blue" && line[i + 2] === "blue") {
        counter += 1;
      } else if (line[i - 1] === "blue" && line[i - 2] === "blue") {
        counter += 1;
      }
    }
  }
  return counter;
};

//Task 41
const sortByBits = arr => {
  return arr
    .map(a => ({ value: a, binary: a.toString(2) }))
    .sort((a, b) => {
      a = a.binary;
      b = b.binary;
      if (a.replace(/[0]+/g, "") > b.replace(/[0]+/g, "")) return 1;
      if (b.replace(/[0]+/g, "") > a.replace(/[0]+/g, "")) return -1;
      if (a.replace(/[0]+/g, "") === b.replace(/[0]+/g, "")) {
        if (parseInt(a, 2) > parseInt(b, 2)) return 1;
        else if (parseInt(a, 2) < parseInt(b, 2)) return -1;
      }
    })

    .map(v => v.value);
};

//Task 42

const firstNSmallest = (arr, num) => {
  if (num == 0) return [];
  for (let i = 0; i < arr.length + 1; i++) {
    let max = Math.max(...arr);
    if (arr.length > num) {
      arr.splice(arr.indexOf(max), 1);
    }
  }
  return arr;
};

//Task 43

const findCloseIndex = (str, index) => {
  const arr = str.split("");
  if (arr[index] != ")" && arr[index] != "(") {
    return -1;
  }
  arr.splice(0, index);
  let counter = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == ")") {
      counter--;
      if (counter == 0) return j + index;
    } else if (arr[j] == "(") {
      counter++;
    }
  }
};

//Task 44

function SimTime() {
  this.time = 0;
  this.realtime = 0;
  this.speed = 1;
  this.get = function() {
    return this.time;
  };
  this.set_speed = function(new_speed) {
    this.speed = new_speed;
    //this.realtime *= new_speed;
  };
  this.update = function(current_realtime) {
    this.time = this.time + (current_realtime - this.realtime) * this.speed;
    this.realtime = current_realtime;
  };
}

//Task 45

const findEqualIndex = arr => {
  let sum = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
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

//Task 66

const isPrimeNum = n => {
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const sumPrimes = num => {
  primeArr = [];
  for (let i = 2; i <= num; i++) {
    if (isPrimeNum(i)) primeArr.push(i);
  }
  return primeArr.reduce((a, b) => a + b);
};

//Task 67

const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i];
  }
};

//Task 68

const dropElements = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr.slice(i);
  }
  return [];
};

//Task 69

const unpackArray = arr => {
  let newArr = [];
  function unpack(arr) {
    arr.forEach(item => {
      if (!Array.isArray(item)) {
        newArr.push(item);
      } else {
        unpack(item);
      }
    });
  }
  unpack(arr);
  return newArr;
};

//Task 70

const binaryDecode = str => {
  let arrNum = str.split(" ");
  return arrNum
    .map(item => parseInt(item, 2))
    .map(item => String.fromCharCode(item))
    .join("");
};

//Task 71

const binaryEncode = str => {
  let arrWords = str.split("");
  return arrWords
    .map(item => item.charCodeAt())
    .map(item => item.toString(2))
    .join(" ");
};

//Task 72

const addTogether = (...args) => {
  let arg1 = args[0];
  let arg2 = args[1];
  if (typeof arg1 === "number" && typeof arg2 === "number") return arg1 + arg2;
  if (typeof arg1 != "number") return undefined;
  if (arg2 === undefined) {
    return function summ(n) {
      if (typeof n === "number") {
        return arg1 + n;
      }
    };
  }
};

//Task 73

const palindrome = str => {
  const simpleStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("");

  return simpleStr == reversedStr ? true : false;
};

//Task 74

const pairElement = str => {
  const resultArr = [];
  let pairArr = [];
  const incorArr = str.split("");
  for (let i = 0; i < incorArr.length; i++) {
    if (incorArr[i] == "A") {
      pairArr.push(incorArr[i]);
      pairArr.push("T");
      resultArr.push(pairArr);
      pairArr = [];
    } else if (incorArr[i] == "T") {
      pairArr.push(incorArr[i]);
      pairArr.push("A");
      resultArr.push(pairArr);
      pairArr = [];
    } else if (incorArr[i] == "C") {
      pairArr.push(incorArr[i]);
      pairArr.push("G");
      resultArr.push(pairArr);
      pairArr = [];
    } else if (incorArr[i] == "G") {
      pairArr.push(incorArr[i]);
      pairArr.push("C");
      resultArr.push(pairArr);
      pairArr = [];
    }
  }
  return resultArr;
};

//Task 75

const DNAStrand = str => {
  const incorArr = str.split("");
  for (let i = 0; i < incorArr.length; i++) {
    if (incorArr[i] == "A") {
      incorArr[i] = "T";
    } else if (incorArr[i] == "T") {
      incorArr[i] = "A";
    } else if (incorArr[i] == "C") {
      incorArr[i] = "G";
    } else if (incorArr[i] == "G") {
      incorArr[i] = "C";
    }
  }
  const correctStr = incorArr.join("");
  return correctStr;
};
