// let name = new String("Yadnesh")
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(`My name is ${name}`);
// console.log(name.toLowerCase(0))
// console.log(name.toUpperCase(0,3))
// let n99= 123.22
// let n44= 2846.66
// let n66= n99 + n44
// console.log(n66.toPrecision(5))
// let max = 10
// console.log((((Math.random())*(max) )+ 1).toPrecision(2)) ;
// let today = new Date()
// console.log(typeof new Date());
// console.log(today.getDay);

// let name = "   Yadnesh-Bagale   "
// console.log(name.split("-"));
// console.log(name.slice());
// console.log(name.substring(0,4));

let hero1 = ["im", "thor"]
let hero2 = ["bm", "spm"]
const array = [...hero1, ...hero2]
console.log(array);
console.log(Array.from({name: "Yadnesh"}));
console.log(array.length-1);

console.log(array.slice(1,3));
console.log(array.splice(1,3));
console.log(array);

const sym1 = Symbol("key1")

const obj1 = {
    name: "Yadnesh",
    email: "y@gmail.com",
    [sym1]: "key1"
}
console.log(obj1["name"]);
console.log(obj1[sym1]);
console.log(typeof obj1[sym1]);

obj1.email= "ya@gmail.com"
Object.freeze(obj1)
obj1.email= "yad@gmail.com"
console.log(obj1);

const obj2= {
    name:"nayan",
    email: "n@gmail.com",
}
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
    name :"vijay",
    email : "v@gmail.com",
},
    {
    name : "yad",
    email: "yadnesh@gmailcom",
 },
    {
    name:"nayn" ,
    email:"nayan@gmail.com",
    }
]

console.log(user[1].name)
console.log(obj1.hasOwnProperty("name"));
console.log(obj1.hasOwnProperty("key1"));


// {
//     "name1": "yadnes",
//     "price": "999",

// }
[
    {},
    {}
]