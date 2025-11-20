// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’

// let str1 = 'hello world';
// console.log(str1.length);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
//
// let str3 = 'javascript is cool';
// console.log(str3.length);

// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

// let str1 = 'hello world';
// console.log(str1.toUpperCase());
//
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
//
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());

// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
//
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
//
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());

// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());

// #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

// function stringToarray(str){
//     if(str){
//         return  str.split(' ');
//     }
//     return [''];
// }
//
// console.log(stringToarray('Ревуть воли як ясла повні'));

// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(value => value + ''));

// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

// function sortNums(array,direction){
//     if(direction === 'ascending'){
//         return array.sort((a, b) => a - b);
//     } else if (direction === 'descending'){
//         return array.sort((a, b) => b - a);
//     }
// }
//
// console.log(sortNums([11, 21, 3], 'descending'));
