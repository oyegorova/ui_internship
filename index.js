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

const checkCashRegister = (price, cash, cid) => {};
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
  ]),
  "should return an array"
);
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  "should return a string"
);
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  "should return a string"
);
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
  ]),
  'should return [["QUARTER", 0.50]]'
);
console.log(
  checkCashRegister(3.26, 100.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
  ]),
  [
    ["TWENTY", 60.0],
    ["TEN", 20.0],
    ["FIVE", 15.0],
    ["ONE", 1.0],
    ["QUARTER", 0.5],
    ["DIME", 0.2],
    ["PENNY", 0.04]
  ]
);
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  'should return "Insufficient Funds"'
);
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  'should return "Closed"'
);
