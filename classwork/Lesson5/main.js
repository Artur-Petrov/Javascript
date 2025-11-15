// let greeting = function (){
//     console.log("Greeting")
// }
// greeting();
// asd();
// function asd() {
//     console.log("asd");
// }

// function calc (a,b) {
//     return a + b;
//
// let calc = (a, b) => a + b;
// console.log(calc(10, 20));

//
// function asd (){
//     let x =10;
//
//     function inner() {
//         return ++x;
//     }
//     return inner;
// }
// console.log(asd()());

// let user = {name: 'dima', age: 111};
// user.age = -100500;

// function userBuilder(name, age) {
//     let user = {name, age};
//     return{
//         getName (){
//             return user.name;
//         },
//         getAge (){
//             return user.age;
//         },
//         setAge (age){
//             if(age > 0){
//                 user.age = age;
//             }
//         }
//     }
// }
// let builder = userBuilder('dima', 31);

// function iterator (arr, i){
//     console.log(arr[i]);
//     i++;
//     if(i < arr.length){
//         iterator(arr, i);
//     }
// }
// iterator([1, 2, 3, 4, 5], 0);

// let innerArray = [];
// function flatter (array) {
//     for (const arrayElement of array) {
//         if (Array.isArray(arrayElement)) {
//             flatter(arrayElement);
//         } else {
//             innerArray.push(arrayElement);
//         }
//     }
// }
// let arr = [11, 22, 33, [44, 55, [66,77]]];
//
// flatter(arr);
// console.log(innerArray);

// function *foo(){
//     yield 100;
//     yield 200;
//     yield 300;
// }
//
// let fooGenerator = foo();
// console.log(fooGenerator);
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());

// function *cardsHolder(){
//     const cards =[
//         {value: 6, suite: 'dimond'},
//         {value: 7, suite: 'spade'},
//         {value: 8, suite: 'dimond'},
//         {value: 9, suite: 'spade'}
//     ]
//     for (const card of cards) {
//         yield card;
//     }
// }
// const cardsHolderGenerator = cardsHolder();
// const card1 = cardsHolderGenerator.next();
// console.log(card1.value);
// //...
// //....
// //....
// const card2 = cardsHolderGenerator.next();
// console.log(card2.value);
// //...
// //....
// //....

// console.log('start');
// try{
//     console.log(a);
// } catch(err){
//     console.log(err); // або console.error(err)
//     console.error(err);
// } finally {
//     console.log('finally block');
// }
// console.log('end');

function calc(a,b) {
    if (b === 0) {
        throw new Error('b is 0');
    }
    return a/b;
}
calc(10,0);