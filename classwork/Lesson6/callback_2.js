// function foo(bar) {
//     console.log(bar);
// }
// foo(100);

// function foo(bar) {
//     console.log(bar);
// }
// // function h() {
// //     return 100;
// // }
// //
// // foo(h());
//
// function h() {
//     return 100;
// }
//
// foo(function h() {
//     return 100;
// }());

// function foo(callback) {
//     console.log(callback());
// }
//
// foo(function h() {
//     return 100;
// });

function calc(a ,b, callback) {
   return  callback(a, b); // тут ми звязуємо функцію calc і нашу функцію callback
}

console.log(calc(10, 20, (a, b) => {  //тут або стрілочна функція або сама дефолтна function (){} // a, b тут вже зовсім інші не ті самі що у функції calc
    return a + b;
}));

console.log(calc(10, 20, (a, b) => a - b));
console.log(calc(10, 20, (a, b) => a / b));