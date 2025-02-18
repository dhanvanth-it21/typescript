//1. number

// -> both integers and floating point
const integerNum: number = 10;
const floatingNum: number = 10.5;
const negativeNum: number = -10;
const hexNum: number = 0x2a;
const binaryNum: number = 0b111;
const octalNum: number = 0o20;
const infinityNum: number = Infinity;
const negInfinityNum: number = -Infinity;
console.log("-----------------Number-----------------");
console.log(`
    integerNum: ${integerNum}
    floatingNum: ${floatingNum}
    negativeNum: ${negativeNum}
    hexNum: ${hexNum}
    binaryNum: ${binaryNum}
    octalNum: ${octalNum}
    infinityNum: ${infinityNum}
    negInfinityNum: ${negInfinityNum}`
);


// -Omit<T, K>
console.log("-----------------Omit-----------------");
type Person = {
    name: string,
    age: number,
    address: string
}

const person1: Person = {
    name: "Dhanvanth",
    age: 21,
    address: "Coimbatore"
}

console.log(`person1: ${JSON.stringify(person1)}, type: Person`);

type PersonAddress = Omit<Person, "address">

const person2: PersonAddress = {
    name: "Ram",
    age: 21
}

console.log(`person2: ${JSON.stringify(person2)}, type: PersonAddress`);

//-Intersection (T & U)
console.log("-----------------Intersection-----------------");

type Student = {
    name: string,
    college: string
}

type Details = {
    rollNo: string,
    mailId: string
}

type StudentDetails = Student & Details;

const me: StudentDetails = {
    name: "Dhanavnth",
    college: "BIT",
    rollNo: "7376212IT126",
    mailId: "dhanvanth.it21@bitsathy.ac.in"
}

console.log(`My details : ${JSON.stringify(me)}`);


// ReadonlyMap<K, V>
console.log("-----------------ReadonlyMap-----------------");

const map = new Map<number, string>();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");


const readOnlyMap: ReadonlyMap<number, string> = map;

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

const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const mail1 = "dhanvanth.it21@bitsathy.ac.in";
const mail2 = "dhanvanth.it21@bitsathy";

console.log(`mail1: ${emailRegex.test(mail1)}`);
console.log(`mail2: ${emailRegex.test(mail2)}`);


// Indexed access types (T[K])

console.log("-----------------Indexed access types-----------------");

type A = {
    a: number,
    b: string,
    c: {
        d: number,
        e: string
    }
}

type B = A['b'];
type C = A['c'];
type D = A['c']['d'];

const typeB: B = "Hello";
const typeC: C = {
    d: 10,
    e: "World"
}
const typeD: D = 10;

console.log(`typeB: ${typeB}`);
console.log(`typeC: ${JSON.stringify(typeC)}`);
console.log(`typeD: ${typeD}`);

// Iterable<T>

console.log("-----------------Iterable-----------------");

const numArr: Iterable<number> = [1, 2, 3, 4, 5, 6];

const numMap: Iterable<[number, string]> = map;

for (const [key, value] of numMap) {
    console.log(`key: ${key}, value: ${value}`);
}

for (const num of numArr) {
    console.log(num);
}

// Extract<T, U>
console.log("-----------------Extract-----------------");

type example1 = string | number | boolean | {};
const example1obj1 = "Hello";
const example1obj2 = 42;
const example1obj3 = true;

type example2 = boolean | number;

type extract1 = Extract<example1, example2>;
type extract2 = Extract<example2, {}>;

const extract1Obj1: extract1 = 10;
const extract1Obj2: extract1 = true;


console.log(`extract1Obj1: ${extract1Obj1}`);
console.log(`extract1Obj2: ${extract1Obj2}`);


// WeakMap<K extends object, V>
console.log("-----------------WeakMap-----------------");

type wm = WeakMap<{}, string>;
const myMap: wm = new WeakMap<{}, string>();

let obj1 = {a:1};
let obj2 = {a:2};

myMap.set(obj1, "1");
myMap.set(obj2, "2");

// Namespaces.

console.log("-----------------Namespace-----------------");

namespace mySpace {
    const person = {
        name: "Dhanvanth S B"
    }

    export function printPerson() {
        console.log(person);
    }
}

const person = {
    name: "Hello"
}
mySpace.printPerson();