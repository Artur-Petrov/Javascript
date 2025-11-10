// #67kfznmiMl
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [1, -2, 'name', '', [], [true, false], -12, 12312, 'string', {}];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr);
//
// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

// let book1 = {
//     title: 'Book Title 1',
//     pageCount: 120,
//     genre: 'horror'
// };
// let book2 = {
//     title: 'Book Title 2',
//     pageCount: 257,
//     genre: 'documentary'
// };
// let book3 = {
//     title: 'Book Title 3',
//     pageCount: 541,
//     genre: 'fantasy'
// };
//
// #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

// let book1 = {
//     title: 'Book Title 1',
//     pageCount: 120,
//     genre: 'horror',
//     authors: [
//         {
//             name: 'John',
//             age: 19
//         },
//         {
//             name: 'Tom',
//             age: 22
//         }
//     ]
// };
// let book2 = {
//     title: 'Book Title 2',
//     pageCount: 352,
//     genre: 'documentary',
//     authors: [
//         {
//             name: 'Jane',
//             age: 60
//         },
//         {
//             name: 'Lui',
//             age: 70
//         }
//     ]
// };
// let book3 = {
//     title: 'Book Title 3',
//     pageCount: 555,
//     genre: 'historical',
//     authors: [
//         {
//             name: 'Larry',
//             age: 50
//         },
//         {
//             name: 'Gary',
//             age: 66
//         },
//         {
//             name: 'Mary',
//             age: 32
//         }
//     ]
// };
//
// #jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let users = [
//     {name: 'John', username: 'Hardy', password: '1231'},
//     {name: 'Tom', username: 'Cruise', password: '1232'},
//     {name: 'Jordan', username: 'Michel', password: '1233'},
//     {name: 'Berlin', username: 'Munich', password: '1234'},
//     {name: 'Andrii', username: 'Schevchenko', password: '1235'},
//     {name: 'Ivan', username: 'Franko', password: '1236'},
//     {name: 'Lesia', username: 'Ukrainka', password: '1237'},
//     {name: 'Lionel', username: 'Messi', password: '1238'},
//     {name: 'Stepan', username: 'Giga', password: '1239'},
//     {name: 'Pavlo', username: 'Zibrov', password: '12310'}
// ];
// console.log(users[0]['password']);
// console.log(users[1]['password']);
// console.log(users[2]['password']);
// console.log(users[3]['password']);
// console.log(users[4]['password']);
// console.log(users[5]['password']);
// console.log(users[6]['password']);
// console.log(users[7]['password']);
// console.log(users[8]['password']);
// console.log(users[9]['password']);
//
// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

// let weatherTemps = [
//     {day: 'Monday', morning: 6, daytime: 15, evening: 8},
//     {day: 'Tuesday', morning: 4, daytime: 10, evening: 5},
//     {day: 'Wednesday', morning: 4, daytime: 9, evening: 2},
//     {day: 'Thursday', morning: 6, daytime: 10, evening: 5},
//     {day: 'Friday', morning: 8, daytime: 12, evening: 7},
//     {day: 'Saturday', morning: 9, daytime: 14, evening: 6},
//     {day: 'Sunday', morning: 12, daytime: 16, evening: 11}
// ];
//
// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('Write one of the available numbers (1, 0, -3)');
// if (x !== 0){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }
//
// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

// let time = +prompt('Enter the number from 0 to 59')
// if (time <= 15) {
//     console.log('Your number is in the first quarter');
// } else if (time > 15 && time <= 30) {
//     console.log('Your number is in the second quarter');
// } else if (time > 30 && time <= 45) {
//     console.log('Your number is in the third quarter');
// } else if (time > 45 && time <= 59) {
//     console.log('Your number is in the fourth quarter');
// } else {
//     console.log('Your number is not in allowed range!');
// }
//
// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('Enter the number from 1 to 31');
// if (day <= 10) {
//     console.log('You are in the first decade');
// } else if (day > 10 && day <= 20) {
//     console.log('You are in the second decade');
// } else if (day > 20 && day <= 31) {
//     console.log('You are in the third decade');
// } else {
//     console.log('Your number is out of the allowed range!');
// }
//
// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('Enter the day of the week to see the schedule (1 - 7)');
// switch (day){
//     case 1:
//         console.log('Gym');
//         console.log('Working time from 11 till 17');
//         console.log('Studying');
//         break;
//     case 2:
//         console.log('Swimming');
//         console.log('Working time from 11 till 17');
//         console.log('English lesson');
//         break;
//     case 3:
//         console.log('Gym');
//         console.log('Working time from 11 till 17');
//         console.log('Football match');
//         break;
//     case 4:
//         console.log('Diving');
//         console.log('Working time from 11 till 17');
//         console.log('English lesson');
//         break;
//     case 5:
//         console.log('Gym');
//         console.log('Working time from 11 till 17');
//         console.log('Go out with friends');
//         break;
//     case 6:
//     case 7:
//         console.log('Today is the day off, have a rest');
//         break;
// }
//
// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.

// let a = +prompt('Enter the first number');
// let b = +prompt('Enter the second number');
// if (a > b){
//     console.log('The first number is bigger!');
// } else if (a < b){
//     console.log('The second number is bigger!');
// } else if (b === b){
//     console.log('Your numbers are equal!');
// }
//
// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x = null;
// if (x === null || x === undefined || x === 0 || x === Nan || x === '') {
//     x = 'default';
// }
//
// #awLXL6TBzg
//
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
// За допомогою іф перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Супер')
}else {
    console.log('Не підходить')
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Супер')
}else {
    console.log('Не підходить')
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Супер')
}else {
    console.log('Не підходить')
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Супер')
}else {
    console.log('Не підходить')
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Супер')
}else {
    console.log('Не підходить')
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Супер')
}else {
    console.log('Не підходить')
}