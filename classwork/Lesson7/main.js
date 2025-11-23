// конструктори з великої букви пишемо
// this це побудований обєкт лише в конструкторах

// function User (name, age, status){
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// //виклик конструктора за допомогою new
// let user1 = new User('asd', 123, true);
// let user2 = new User('qwe', 321, false);
// console.log(user1, user2);

// про композицію та агрегацію
// типу як обєкт в обєкті
//перший варіант
// function User (name, age, status, wife){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
// // і вже тут ми передаємо всі поля для нового обєкту wife
// let user1 = new User('asd', 123, true, {name: 'qwe', age: 222, status: true});
// console.log(user1);

// другий варіант тут одразу передаємо що має мати wife

// function User (name, age, status, wifeName, wifeAge){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge};
// }
// let user1 = new User('asd', 123, true, 'qwe', 321);
// console.log(user1);

// можна в середину вкладати функції які будуть використовуватися лише при виклику цього конструктора

// function User (name, age, status, wifeName, wifeAge){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge};
//     this.greeting = function() {
//         console.log('hi');
//     }
// }
// let user1 = new User('asd', 123, true, 'qwe', 321);
// console.log(user1);



// next lesson
//що робити якщо треба змінити щось в конструкторі але не має можливості його відредагувати
function User(name, age){
    this.name = name;
    this.age = age;
}
// перщий варіант це прототип prototype
//
// User.prototype.greeting = function() {
//     return `Hello my name is ${this.name}`;
// }
// let user1 = new User('vasya', 22);
// console.log(user1.greeting());

// другий варіант
// let user1 = new User('vasya', 22);
// // тут власноруч дописали функцію, але тут вона спрацює лише раз тільки для user1
// user1.greeting = function () {
//     return `Hello my name is ${this.name}`;
// };
// console.log(user1.greeting());
//
// let user2 = new User('dima', 33);
// // apply це функція яка дозволяє підмінити контекст this
// // якщо в нашого user1 існує greeting то виконай його і до user2
// console.log(user1.greeting.apply(user2)); // -> user2.greeting();

// якщо функція user1 ще щось приймає то це також не проблема так як можна передати безліч аргументів в apply

// let user1 = new User('vasya', 22);
// user1.greeting = function (msg, asd) { // тут приймає два аргументи
//     return `${msg} my name ${asd} is ${this.name}`;
// };
// console.log(user1.greeting('hello'));
//
// let user2 = new User('dima', 33);

// console.log(user1.greeting.apply(user2,['hello', 'asd'])); // а тут ми ті два аргументи передаємо обовязково масивом
// console.log(user1.greeting.call(user2,'hello', 'asd')); // передає через кому а apply масивом

// тепер спосіб через bind
// тут все так само як було вище тільки переписано під стрілочну функцію
let user1 = new User('vasya', 22);
user1.greeting = function (msg) { // тут приймає два аргументи
    return `${msg} my name is ${this.name}`;
};
let user2 = new User('dima', 33);
let greetingCopy = user1.greeting.bind(user2); // так само як call, apply приймає аргумент перщий замість this типу кому ми передаємо властивості
// для передачі аргументу msg ми просто через кому передаємо
// bind використовуємо через змінну
console.log(greetingCopy('hola'));// або передаємо все сюди, сюди аргументи