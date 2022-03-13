// const str1 = "hero";
// const str2 = "alom";
// console.log(str1 + str2);

// spreed operator
// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// const number2 = [9, 10];
// // const result = number.push([9, 10]);

// console.log(...number, ...number2);

// let animal = {
//     name: "dog",
//     color: "brown",
//     age: 7,
// };
// // const { age, ...rest } = animal || {};
// // console.log(rest);


// const sum = ({ name, age }) => {
//     console.log(age);
//     console.log(name);
// }
// sum(animal);

// optioan chain
// const dreamGirl = [
//     {
//         dream1: {
//             name: "bbu",
//             height: "5.4",
//             family: [{ father: "rock", mother: "shila", sister: "chinki" }],
//             age: undefined,
//             contactInfo: [
//                 {
//                     facebook: {
//                         link: "https://www.facebook.com/",
//                         followers: "12545",
//                         status: "single",
//                         friendsList: [
//                             { name: "rofik" },
//                             { name: "jobbar" },
//                             { name: "salam" },
//                             { name: "borkot" },
//                             undefined,
//                         ],
//                     },
//                 },
//                 { instagram: "https://www.instagram.com/" },
//                 { twitter: "https://twitter.com/" },
//                 { github: "https://github.com/" },
//                 { phone: ["01254823212", "02152457"] },
//             ],
//         },
//     },
// ];

// // console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);
// const friends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;

// console.log(friends);
// for (const friend of friends) {
//     console.log(friend)
    // for (let i = 0; i < friend; i++) {
    //     const element = friend[i];
    //     console.log(element.name)

    // }
    // const name = friend.name;
    // console.log(name)
// }

// for of loop
// const numbers = [
//     "hero",
//     "manna vai",
//     "salman sha",
//     "ghositi begum",
//     "miss taina"
// ]

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }

// for (const element of numbers) {
//     console.log(element);
// }


// for in loop

// const object = { a: 1, b: 2, c: 3, name: "broo" }
// console.log(object['name']);


// for (const property in object) {
//     // console.log(property);

//     console.log(`${property}: ${object[property]}`)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const temp = [];
// // const sum = (num) => {
// //     return num * num;
// // }
// // for (const element of numbers) {
// //     const square = element * element;
// //     temp.push(square);
// // }
// // console.log(temp);


// const result = numbers.map((x) => x * x);
// console.log(result);


// filter - find

// const products = [
//     { id: 1, name: "apple", price: 500, color: "golden" },
//     { id: 2, name: "xiaomi", price: 124, color: "black" },
//     { id: 3, name: "samsung", price: 200, color: "black" },
//     { id: 4, name: "samsung2", price: 200, color: "black" },
//     { id: 5, name: "lenovo", price: 300, color: "pink" },
//     { id: 6, name: "xiaomi", price: 100, color: "pink" },
//     { id: 7, name: "lenovo", price: 300, color: "pink" },
// ];



// // const result = products.filter((pd) => pd.id != 1);
// // console.log(result);

// const result = products.find((pd) => pd.color == "black");
// console.log(result);



const data = () =>{
    
}