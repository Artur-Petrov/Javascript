//DOM document object model обєктна модель документа

// console.log(document);
// console.log(document.head);
// console.log(document.head.children);
// console.log(document.body);
// console.log(document.body.innerHTML);

//ID шукає по id елемент
// let ul1 = document.getElementById('list-1');
// console.log(ul1);
//
// //class буде шукати колекцію, навіть якщо елемент один то його спакує в колекцію
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
//
// // Tag
// let ulList = document.getElementsByTagName('ul');
// console.log(ulList);
//
// let liList = document.getElementsByTagName('li');
// console.log(liList);

// знаходимо конкретне

// let list1 = document.getElementById('list-1');
// let list1LiCollection = list1.getElementsByTagName('li');
// console.log(list1LiCollection);


// інший спосіб шукати елементи

// document.querySelector('.menu');// знаходить тільки один елемент по css селектору який ми вставили
// //виведе лише першу ul яку знайде
// document.querySelectorAll('ul');// всі елементи по css селектору який ми вставили
// повертає список вузлів

let elementNodeListOf = document.querySelectorAll('.menu:nth-child(2)>li');
console.log(elementNodeListOf);

for (const element of elementNodeListOf) {
    console.log(element);
}
