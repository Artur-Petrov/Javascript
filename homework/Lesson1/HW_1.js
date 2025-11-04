//#dYQNrBV
//
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
// Вивести кожну змінну за допомогою: console.log
let msg1 = 'hello';
let msg2 = 'owu';
let msg3 = 'com';
let msg4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;

console.log(msg1, msg2, msg3,msg4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);

//#6Qb97gsv
//
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
let firstName = 'Artur';
let middleName = 'Oleksandrovych';
let lastName = 'Petrov';

let pearson = lastName + ' ' + firstName + ' ' + middleName;
console.log(pearson);


//– За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
//   let a = 100; let b = ‘100’; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

//#ruUtWDUI
//
// Додаткове для тих, хто цікавився prompt`oм
//
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

let name = prompt('What is your name?');
let middle = prompt('What is your middle name?');
let age = prompt('What is your age?');

console.log(name + ' ' + middle + ', ' + age);