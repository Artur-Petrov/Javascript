// let target = document.getElementById('target');
// console.log(target);
// console.log(target.innerText);

// target.style.backgroundColor = 'red'; // всі можливі значення css
// ці стилі перебити буде важко бо воно робить їх inline
// console.log(target.classList); // повертає всі класи які в нас є
// target.classList.add('foo');
// target.classList.add('bar');
// console.log(target.classList.item(0)); // певний клас за певним індексом
// console.log(target.classList.contains('foo')); // true or false
// target.classList.toggle('asd'); // перемикач якщо існує вже такий клас то ми видалимо його а якщо не існує то створимо

// target.getAttribute('xxx'); //повертає атрибут
// console.log(target.getAttribute('id'));
// console.log(target.getAttribute('class'));
// console.log(target.getAttribute('style'));
//
// //set attribute
// // target.setAttribute('id', 'qwduytqwtuyqw');
// // console.log(target.getAttribute('id'));
//
// console.log(target.previousElementSibling); // виведе h1
// console.log(target.nextElementSibling); // виведе h2
// console.log(target.children); // виведе дітей, теги які в середині HTML objects
// console.log(target.childNodes); // вузли, nodes
//
// target.innerText = '<b>12eq2eqweqweqw</b>'; // виведе <b>12eq2eqweqweqw</b>
// target.innerHTML = '<b>12eq2eqweqweqw</b>'; // виведе 12eq2eqweqweqw але болдове
//
// console.log(target.outerHTML); // покаже наші теги і атрибути але не покаже їх наповнення

// далі якщо є три діви а не один і нема можливості достукатися за допомогою id

let collectionOfDiv = document.getElementsByClassName('point'); // колекція дівів
for (const divElement of collectionOfDiv) {
    divElement.innerText = 'eqfdasfaewfqweafqawef';
    divElement.classList.add('qwqwq');
}