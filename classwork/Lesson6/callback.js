// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// users.forEach(function(value/* index*/ /*array*/) {
//     console.log(value /*index*/);
//     // console.log(array);
// });
// users.forEach(value => console.log(value));
// users.forEach((value, index) => console.log(value));
// поки один аргумент як в першому ми можемо не пакувати його в (), але якщо їх більше то треба пакувати в дужки

// let filteredUsers = users.filter(function (value) {
//     return value.age > 30;
// });
// console.log(filteredUsers);

// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);

// let mapedUsers = users.map(function (value, index) {
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
//     return newUser;
// });
// console.log(mapedUsers);

// let mapedUsers = users.map(function (value, index) {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
// });
// console.log(mapedUsers);

// let mapedUsers = users.map(function (value, index) {
//     return {...value, id: index +1};
// });
// console.log(mapedUsers);
// тут ті ... означають що ми розмазуємо то, типу передаємо всі поля
// name, age, status а далі після value id це вже нове поле

// users.map((value, index) => {
//     return {id:index+1,name:value.name,age:value.age, status: value.status}
// });

// let findUser = users.find(value => value.name === 'max');
// console.log(findUser);
// тут воно знаходить тільки перше входження, навіть якщо max є 2 то виведе лише першого

// console.log(users.every(value => value.status));
// тут поверне true тільки якщо всі елементи будуть зі статусом true а так буде false

// console.log(users.some(value => value.status));
// а тут навпаки, якщо хоча б один елемент буде зі статусом true то і виведе true

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let sort = users.sort((u1, u2) => {
//     return u1.age - u2.age;
// });
// 1 or 2 arguments
// console.log(sort);
// тут посортує від меншого до більшого, менші зверху

// let sortName = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.age === b.name) {
//         return 0;
//     }
// });
// console.log(sortName);
// фільтрація від a до z

// let reduce = users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT: [], statF: []});
// console.log(reduce);

function filter (arr, callback){
    let mass = [];
    for (const item of arr) {
        if (callback(item)){
            mass[mass.length] = item;
        }
    }
    return mass;
}

console.log(filter([11,22,33,44,55], function (item){
    return item %2 === 0;
}))

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(filter(users, function (user) {
    return user.age > 30;
}));