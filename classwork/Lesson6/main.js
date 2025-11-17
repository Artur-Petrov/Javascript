// let str = 'hello world';
// console.log(str[0]);
// for (const strElement of str) {
//     console.log(strElement);
// }
//
// let s = new String('hello world');
// console.log(s);
// console.log(typeof s);

// let str = 'hello world';
// let s = str.concat(' !!!');
// console.log(s);

// let str = 'hello world';
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.startsWith('hel')); // true
// console.log(str.endsWith('en')); // true
// console.log(str.substring(0,7)); // від 0 до 7 не включно
// console.log(str.indexOf('h')); // з ліва на право
// console.log(str.lastIndexOf('o')); // з  права на ліво
// console.log(str.indexOf('o', 5)); // починається з позиціїї 5
// console.log(str.charAt(6));
// // console.log(str.replace('o', '!'));
// console.log(str.replaceAll('o', '!'));
//
// let split = str.split(' ');
// console.log(split);

// -------------------------------------------- масиви --------------------------------------
let arr = [];
console.log(Array.isArray(arr));

// arr[arr.length] = 2;
// console.log(arr);

arr.push('hello1'); // додає в кінець
arr.push('hello2');
arr.push('hello3');
arr.push('hello4');
arr.push('hello5');
console.log(arr);

console.log(arr.pop()); // показує видалений елемент в консолі
// (arr.pop()); // видаляє елемент з масиву (останній) з кінця
console.log(arr);

// arr.unshift('111'); // додає на початок
console.log(arr.unshift('111')); // повертає нову довжину масиву
console.log(arr);

// push протилежне до pop
// shift протилежне до unshift
// arr.shift(); // видалив з початку
console.log(arr.shift()); // показує в консолі що видалив
console.log(arr);

let join = arr.join(';'); // зєднання масиву в один
console.log(join);

let nums = [11, 22, 33];
let concat = arr.concat(nums); //тут елементи масиву arr будуть перші
console.log(concat);

// console.log(nums.reverse());

console.log(concat);
let slice = concat.slice(0, 4);
console.log(slice); // тут ріжеться по ІНДЕКСАХ
// з 0 до 4 не включно тобто 0 1 2 3
// 4 5 6 обріже


// let splice = concat.splice(0, 2); // з 0 видаляємо 2 елементи
// console.log(splice); // і показує що ми вирізали тобто перші два елементи
//
// console.log(concat); // а масив з якого ми splice лишилося всьо решта
// 1 аргумент то звідки ми починаємо видаляти
// 2 аргумент то кількість аргументів які будемо видаляти
// 2-3-4... аргумент ми вказуємо що на місці видаленого елементу треба вставити
//не обов'язково щоб кількість видалених елементів співпадала з доданими новими в 3-4-5 аргументах

// let splice = concat.splice(0, 2, '111', '!!!!', '!#@%!@');
// console.log(splice);
// console.log(concat);

console.log(concat);
console.log(concat.indexOf(11)); // повертає під яким індексом знаходиться той чи інший елемент
// так можна видалити конкретний елемент
// concat.splice(concat.indexOf(11), 1); // один елемент видалимо від в нашому випадку індексу 4 де знаходиться число 11

console.log(concat.includes(11)); // чи масив містить 11, якщо так то true
// для string так само так як стрінг це також масив
console.log('hello okten'.includes('ok'));


// array js methods без лабораторних варіантів