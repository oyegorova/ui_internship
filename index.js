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

//Task 96

const squares = n => {
  if (n >= 45000) return "Incorrect num";
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 4 !== 2) counter++;
  }
  return counter;
};

//Task 97

const bingo = (card, numbers) => {
  const winArrs = [
    [
      card[0][0] + card[1][0],
      card[0][1] + card[1][1],
      card[0][2] + card[1][2],
      card[0][3] + card[1][3],
      card[0][4] + card[1][4]
    ],
    [
      card[0][0] + card[2][0],
      card[0][1] + card[2][1],
      card[0][2] + card[2][2],
      card[0][3] + card[2][3],
      card[0][4] + card[2][4]
    ],
    [
      card[0][0] + card[3][0],
      card[0][1] + card[3][1],
      card[0][2] + card[3][2],
      card[0][3] + card[3][3],
      card[0][4] + card[3][4]
    ],
    [
      card[0][0] + card[4][0],
      card[0][1] + card[4][1],
      card[0][2] + card[4][2],
      card[0][3] + card[4][3],
      card[0][4] + card[4][4]
    ],
    [
      card[0][0] + card[1][0],
      card[0][0] + card[2][0],
      card[0][0] + card[3][0],
      card[0][0] + card[4][0],
      card[0][0] + card[5][0]
    ],
    [
      card[0][1] + card[1][1],
      card[0][1] + card[2][1],
      card[0][1] + card[3][1],
      card[0][1] + card[4][1],
      card[0][1] + card[5][1]
    ],
    [
      card[0][2] + card[1][2],
      card[0][2] + card[2][2],
      card[3][2],
      card[0][2] + card[4][2],
      card[0][2] + card[5][2]
    ],
    [
      card[0][3] + card[1][3],
      card[0][3] + card[2][3],
      card[0][3] + card[3][3],
      card[0][3] + card[4][3],
      card[0][3] + card[5][3]
    ],
    [
      card[0][4] + card[1][4],
      card[0][4] + card[2][4],
      card[0][4] + card[3][4],
      card[0][4] + card[4][4],
      card[0][4] + card[5][4]
    ],
    [
      card[0][0] + card[1][0],
      card[0][1] + card[2][1],
      card[3][2],
      card[0][3] + card[4][3],
      card[0][4] + card[5][4]
    ],
    [
      card[0][4] + card[1][4],
      card[0][3] + card[2][3],
      card[3][2],
      card[0][1] + card[4][1],
      card[0][0] + card[5][0]
    ]
  ];
  for (let i = 0; i < winArrs.length; i++) {
    if (contains(numbers, winArrs[i]) == true) {
      return true;
    }
  }
  return false;
};

function contains(where, what) {
  if (!what) {
    return true;
  }
  for (var i = 0; i < what.length; i++) {
    for (var j = 0; j < where.length; j++) {
      if (what[i] == where[j]) {
        break;
      }
      if (j === where.length - 1) {
        return false;
      }
    }
  }
  return true;
}

//Task 98

const board = [
  ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
  ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
  ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
  ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
  ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
  ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
  ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
  ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"]
];

const availableQueenMoves = position => {
  const row = position.substring(1);
  const colName = position.substring(0, 1);
  const conformityCols = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7
  };
  const conformityCols2 = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H"
  };
  const col = conformityCols[colName];
  const numberPos = Number(col + row);
  const resultArr = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        (board[i][j].substring(1) === row && board[i][j] != position) ||
        (board[i][j].substring(0, 1) == colName && board[i][j] != position)
      ) {
        resultArr.push(board[i][j]);
      }
    }
  }
  let numberPosPH = numberPos;
  let numberPosPL = numberPos;
  for (let i = 0; i < 7; i++) {
    if (
      numberPosPL < 68 &&
      String(numberPosPL).substring(1) < 8 &&
      String(numberPosPL).substring(0, 1) < 8
    ) {
      numberPosPL += 11;
      resultArr.push(numberPosPL);
    }
    if (
      numberPosPH < 79 &&
      String(numberPosPH).substring(1) > 1 &&
      numberPosPH > 11
    ) {
      numberPosPH -= 11;
      resultArr.push(numberPosPH);
    }
  }

  let numberPosMH = numberPos;
  let numberPosML = numberPos;

  for (let i = 0; i < 7; i++) {
    if (
      numberPosML < 69 &&
      String(numberPosML).substring(1) < 8 &&
      numberPosML > 2
    ) {
      numberPosML = numberPosML + 10 - 1;
      if (
        String(numberPosML).substring(1) > 0 &&
        String(numberPosML).substring(1) < 9
      ) {
        resultArr.push(numberPosML);
      }
    }
    if (
      numberPosMH < 78 &&
      String(numberPosMH).substring(1) < 8 &&
      numberPosMH > 11
    ) {
      numberPosMH = numberPosMH - 10 + 1;
      resultArr.push(numberPosMH);
    }
  }
  return resultArr.map(elem => {
    if (typeof elem === "number") {
      if (elem < 10) {
        elem = String("A" + elem);
        return elem;
      } else {
        elem = String(elem);
        const firstLetter = conformityCols2[elem[0]];
        elem = elem.replace(elem[0], firstLetter);
        return elem;
      }
    }
    return elem;
  });
};

//Task 99

const fatFingers = str => {
  if (typeof str !== "string") return str;
  return str
    .replace(/A/g, "a")
    .split("a")
    .map((s, i) =>
      i % 2
        ? s.replace(/./g, m =>
            /[a-z]/.test(m) ? m.toUpperCase() : m.toLowerCase()
          )
        : s
    ).join``;
};

//Task 100

const greatestCommonDivisor = (num1, num2) => {
  const smallestNum = num1 < num2 ? num1 : num2;
  let grDiv = 0;
  for (let i = 2; i <= smallestNum; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      if (i > grDiv) grDiv = i;
    }
  }
  return grDiv;
};

//Task 101

const leastCommonMultiple = (num1, num2) => {
  let i = 1;
  const largestNum = num1 > num2 ? num1 : num2;
  let multiplieNum = largestNum;
  const smallestNum = num1 < num2 ? num1 : num2;
  do {
    multiplieNum = largestNum * i;
    i++;
  } while (multiplieNum % smallestNum != 0);
  return multiplieNum;
};
