//Using spreading for passing positional arguments

const array1 = [1, 2, 3];

function sum(x, y, z) {
  return x + y + z;
}

const summedUp = sum(...array1);
summedUp;

// Creating new array with spread -1

const oldArray = ["a", "b", "c"];
const newMember = "d";

const newArray = [...oldArray, newMember];
newArray;

// Creating new array with spread instead of concat -2

const oldArray2 = ["a", "b", "c"];
const newMember2 = ["d", "e", "f"];

const newArray2 = [...oldArray2, newMember2];
newArray2;

// Creating new array with spread, another way of using a new array from an old one -3

const oldArray3 = ["a", "b", "c"];

const newArray3 = ["z", ...oldArray3, "x", "y"];
newArray3;

// Creating new array with spread, comperable example -4

const oldArray4 = [2, "2", 3, ...[1, 2]];

const newArray4_1 = ["z", ...oldArray4, "x", "y", ["j", "k"]];
const newArray4_2 = ["z", ...oldArray4, "x", "y", ...["j", "k"]];
newArray4_1;
newArray4_2;

// Spread for Object literals

const object1 = { name: "eren", age: 25 };
const object2 = { name2: "elif", age2: 23 };
const object3 = { name: "ece", age: 21 };

const newObject = { ...object1, ...object2 };
const newObject2 = { ...object1, ...object3 };

newObject;
newObject2;
