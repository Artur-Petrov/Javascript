// оператор опціональної послідовності
// optional chain operator
// let user = {
//     name: {}
//
// };
// user?.name; // у випадку якщо user === undefined або null то ми до name навіть не звернемося, знак питання (?) перше перевіряє
// user?.name?.firstName;


// spred копіює один обєкт в інший

// let user = {
//     name: 'John',
//     age: 25
// };
// let user3 = {
//     name: 'John',
//     age: 25
// };
// let user2 = user;
// user2.age = 1050;
// console.log(user); // виведеться 1050 бо це силочний тип
// console.log(user === user2);  // true
// console.log(user === user3);  // false бо порівнюються силки на єчейки в памяті

// let user = {
//     name: 'John',
//     age: 25
// };
// let userCopy = {...user}; // посилаємося на user, userCopy це його копія
// console.log(userCopy === user); // false бо то не то саме наповнення ідентичне але силки різні, тут порівнюються силки

// копіюємо масиви

// let nums = [11, 22, 33];
// let nums2 = nums;
// console.log(nums === nums2); // true, дві різні змінні посилаються на той самий обєкт

// copy

let nums = [11, 22, 33];
let nums2 = [...nums];
console.log(nums === nums2); // false вони тепер не залежні