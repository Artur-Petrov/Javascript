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

// #yo06d74c1C
//
// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const task = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter((a) => a.monthDuration > 5)
//     .map((value, index) => ({...value, id: index +1}));
// console.log(task);

// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.filter(item => {
//     item.modules.includes('sass')
// }));
// console.log(coursesArray.filter(item => {
//     item.modules.includes('docker')
// }));
//
// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

// let suits = ['spade', 'diamond', 'heart', 'club'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const allCards = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit : suit, cardValue : value};
//         if (suit === 'spade' || suit === 'clubs'){
//             card.color = 'black';
//         }else {
//             card.color = 'red';
//         }
//         allCards[allCards.length] = card;
//     }
// }
//
// //     – знайти піковий туз
// console.log(allCards.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace'));
//
// //  – всі шістки
// console.log(allCards.filter(card => card.cardValue === '6' ));
//
// //  – всі червоні карти
// console.log(allCards.filter(card => card.color === 'red'));
//
// //  – всі буби
// console.log(allCards.filter(card => card.cardSuit === 'diamond'));
//
// //  – всі трефи від 9 та більше
// console.log(allCards.filter(card => (card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8' && card.cardValue !== '9') && card.cardSuit === 'club'));

// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

let suits = ['spade', 'diamond', 'heart', 'club'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const allCards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit : suit, cardValue : value};
        if (suit === 'spade' || suit === 'clubs'){
            card.color = 'black';
        }else {
            card.color = 'red';
        }
        allCards[allCards.length] = card;
    }
}
const reduce = allCards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'club':
            acc.clubs.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;

    } return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(reduce);