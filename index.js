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

//Task 86

function showHumamReadableWorkingHours(arr) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const byDay = arr.reduce(
    (acc, { day, from, to }) =>
      Object.assign(acc, { [day.toUpperCase()]: `${from} - ${to}` }),
    {}
  );
  let r = [];
  let firstDay = "";
  counter = 0;
  for (let i = 0; i < days.length; i++) {
    if (byDay[days[i]] == byDay[days[i + 1]] && counter == 0) {
      firstDay = days[i];
      counter = 1;
    } else if (counter == 1 && byDay[days[i]] == byDay[days[i + 1]]) {
      continue;
    } else if (counter == 1 && byDay[days[i]] != byDay[days[i + 1]]) {
      if (firstDay == days[i]) {
        r.push(`${days[i]}: ${byDay[days[i]]}`);
        firstDay = days[i + 1];
      } else {
        r.push(`${firstDay}-${days[i]}: ${byDay[days[i]]}`);
        firstDay = days[i + 1];
      }
    }
  }
  return r;
}

//Task 87

const telephoneCheck = str => {
  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return re.test(str);
};

//Task 88

var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
const updateRecords = (id, prop, value) => {
  if (prop != "tracks" && value != "") {
    collectionCopy[id][prop] = value;
  } else if (
    prop == "tracks" &&
    collectionCopy[id].hasOwnProperty(prop) === false
  ) {
    let tracksArr = [];
    collectionCopy[id][prop] = tracksArr;
    tracksArr.push(value);
  } else if (
    prop == "tracks" &&
    collectionCopy[id].hasOwnProperty(prop) &&
    collectionCopy[id][prop] != [] &&
    value != ""
  ) {
    collectionCopy[id][prop].push(value);
  } else if (
    prop == "tracks" &&
    collectionCopy[id].hasOwnProperty(prop) == [] &&
    value == ""
  ) {
    delete collectionCopy[id][prop];
  }
  return collectionCopy[id];
};

//Task 89

const sym = (...args) => {
  const getDiff = (arr1, arr2) => {
    function filterFunction(arr1, arr2) {
      return arr1.filter(item => {
        return arr2.indexOf(item) === -1;
      });
    }
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter((item, idx, arr) => {
        return arr.indexOf(item) === idx;
      });
  };
  return args.reduce(getDiff, []).sort();
};

//Task 90

const denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

const checkCashRegister = (price, cash, cid) => {
  let output = { status: null, change: [] };
  let change = cash - price;
  let register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = "Closed";
    output.change = cid;
    return output.status;
  }
  if (register.total < change) {
    output.status = "Insufficient Funds";
    return output.status;
  }
  var change_arr = denom.reduce(function(acc, curr) {
    let value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = "Insufficient Funds";
    return output.status;
  }
  output.status = "Open";
  output.change = change_arr;
  return output.change;
};

//Taks 91

const updateInventory = (arr1, arr2) => {
  const inventory = Array.prototype.concat.apply([], arr1);
  for (let i = 0; i < arr2.length; i++) {
    const position = inventory.indexOf(arr2[i][1]);
    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += arr2[i][0];
      continue;
    }
    arr1.push([arr2[i][0], arr2[i][1]]);
  }
  arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));
  return arr1;
};

//Task 92

const countPermutations = string => {
  const perms = str => {
    const result = [];
    if (str.length < 2) return [str];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const otherChars = str.substring(0, i) + str.substring(i + 1);
      const otherPerms = perms(otherChars);
      otherPerms.forEach(x => {
        result.push(char + x);
      });
    }
    return result;
  };

  const permutations = perms(string);

  const hasRepeat = str => {
    let prevChar = str[0];
    for (let i = 1; i < str.length; i++) {
      if (prevChar === str[i]) return true;
      prevChar = str[i];
    }
    return false;
  };

  const noRepeatPerms = [];
  for (const str of permutations) {
    if (!hasRepeat(str)) {
      noRepeatPerms.push(str);
    }
  }

  return noRepeatPerms.length;
};

//Task 93

class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }
  getFullName() {
    return this.fullName;
  }
  getFirstName() {
    return this.fullName.split(" ")[0];
  }
  getLastName() {
    return this.fullName.split(" ")[1];
  }
  setFirstName(first) {
    const nameArr = this.fullName.split(" ");
    nameArr[0] = first;
    this.fullName = nameArr.join(" ");
  }
  setLastName(last) {
    const nameArr = this.fullName.split(" ");
    nameArr[1] = last;
    this.fullName = nameArr.join(" ");
  }
  setFullName(firstAndLast) {
    this.fullName = firstAndLast;
  }
}

//Task 94

const orbitalPeriod = arr => {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let { name, avgAlt } = arr[i];
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(EARTH_RADIUS + avgAlt, 3) / GM)
    );
    resultArr.push({ name, orbitalPeriod });
  }
  return resultArr;
};

//Task 95

const pairwise = (arr, arg) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == arg) {
        sum += i + j;
        arr[i] = arr[j] = NaN;
      }
    }
  }
  return sum;
};
