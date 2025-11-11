// #y7crMeFwHcS
//
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>qwerty</div>');
// }

// #TYj7ncx
//
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>qwerty ${i}</div>`);
// }

// #uzkt71dp
//
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello World!</h1>');
//     i++;
// }

// #OeT7t3uUMFi
//
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hello world! ${i}</h1>`);
//     i++;
// }
//
// #vLSZKMlO
//
// – Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру за шаблоном
//
// Масив:
//
//
//
//     let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (const item of listOfItems) {
    document.write(`<li>${item}</li>`)
}
document.write('</ul>');