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
    name: String,
    age: number,
    address: String
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
    name: String,
    college: String
}

type Details = {
    rollNo: String,
    mailId: String
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

const map = new Map<number, String>();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");


const readOnlyMap: ReadonlyMap<number, String> = map;

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

