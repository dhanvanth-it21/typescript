"use strict";
//1. number
// -> both integers and floating point
const integerNum = 10;
const floatingNum = 10.5;
const negativeNum = -10;
const hexNum = 0x2a;
const binaryNum = 0b111;
const octalNum = 0o20;
const infinityNum = Infinity;
const negInfinityNum = -Infinity;
console.log("-----------------Number-----------------");
console.log(`
    integerNum: ${integerNum}
    floatingNum: ${floatingNum}
    negativeNum: ${negativeNum}
    hexNum: ${hexNum}
    binaryNum: ${binaryNum}
    octalNum: ${octalNum}
    infinityNum: ${infinityNum}
    negInfinityNum: ${negInfinityNum}`);
// -Omit<T, K>
console.log("-----------------Omit-----------------");
const person1 = {
    name: "Dhanvanth",
    age: 21,
    address: "Coimbatore"
};
console.log(`person1: ${JSON.stringify(person1)}, type: Person`);
const person2 = {
    name: "Ram",
    age: 21
};
console.log(`person2: ${JSON.stringify(person2)}, type: PersonAddress`);
//-Intersection (T & U)
console.log("-----------------Intersection-----------------");
const me = {
    name: "Dhanavnth",
    college: "BIT",
    rollNo: "7376212IT126",
    mailId: "dhanvanth.it21@bitsathy.ac.in"
};
console.log(`My details : ${JSON.stringify(me)}`);
// ReadonlyMap<K, V>
console.log("-----------------ReadonlyMap-----------------");
const map = new Map();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");
const readOnlyMap = map;
console.log(`readOnlyMap: ${JSON.stringify(readOnlyMap)}`);
readOnlyMap.forEach((key, value) => {
    console.log(`key: ${key}, value: ${value}`);
});
console.log([...readOnlyMap]);
console.log([...readOnlyMap.keys()]);
console.log([...readOnlyMap.values()]);
// readOnlyMap.set(1, "Four");
// map.set(1, "Four");
// console.log([...readOnlyMap]);
// RegExp
console.log("-----------------RegExp-----------------");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const mail1 = "dhanvanth.it21@bitsathy.ac.in";
const mail2 = "dhanvanth.it21@bitsathy";
console.log(`mail1: ${emailRegex.test(mail1)}`);
console.log(`mail2: ${emailRegex.test(mail2)}`);
// Indexed access types (T[K])
console.log("-----------------Indexed access types-----------------");
const typeB = "Hello";
const typeC = {
    d: 10,
    e: "World"
};
const typeD = 10;
console.log(`typeB: ${typeB}`);
console.log(`typeC: ${JSON.stringify(typeC)}`);
console.log(`typeD: ${typeD}`);
// Iterable<T>
console.log("-----------------Iterable-----------------");
const numArr = [1, 2, 3, 4, 5, 6];
const numMap = map;
for (const [key, value] of numMap) {
    console.log(`key: ${key}, value: ${value}`);
}
for (const num of numArr) {
    console.log(num);
}
// Extract<T, U>
console.log("-----------------Extract-----------------");
const example1obj1 = "Hello";
const example1obj2 = 42;
const example1obj3 = true;
const extract1Obj1 = 10;
const extract1Obj2 = true;
console.log(`extract1Obj1: ${extract1Obj1}`);
console.log(`extract1Obj2: ${extract1Obj2}`);
// WeakMap<K extends object, V>
console.log("-----------------WeakMap-----------------");
const myMap = new WeakMap();
let obj1 = { a: 1 };
let obj2 = { a: 2 };
myMap.set(obj1, "1");
myMap.set(obj2, "2");
// Namespaces.
console.log("-----------------Namespace-----------------");
var mySpace;
(function (mySpace) {
    const person = {
        name: "Dhanvanth S B"
    };
    function printPerson() {
        console.log(person);
    }
    mySpace.printPerson = printPerson;
})(mySpace || (mySpace = {}));
const person = {
    name: "Hello"
};
mySpace.printPerson();
