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

//Task 36

const rowWeights = arr => {
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
  return [valueArr1, valueArr2];
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
  return Math.max.apply(null, sums);
};

//Task 39

const uniqueInOrder = value => {
  let arr = typeof value === "string" ? value.split("") : value;
  return arr.filter((element, ind) => arr.indexOf(element) == ind);
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
  sum = arr.reduce((acc, elem) => acc + elem);
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
};
