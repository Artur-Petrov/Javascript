// function userFactory (id, name, age, status){
//     let user = {
//         id: id,
//         name: name,
//         age: age,
//         status: status,
//     }
//     return user;
// }
// let user1 = userFactory(1, 'tom', 12, true);
// let user2 = userFactory(2, 'mike', 22, false);
// let user3 = userFactory(3, 'lui', 14, true);
//
// console.log(user1);
// console.log(user2);
// console.log(user3);

// function culc (a, b) {
//     let result = a + b;
//     return result;
// }
// let res1 = culc(10, 20);
// let res2 = culc(10, 22);
//
// console.log(res1);
// console.log(res2);

// function percentage(sum, percent) {
//     return sum/100 * percent;
// }
// function tax (sum) {
//     return sum - percentage(sum, 20) - percentage(sum, 1.5);
// }
//
// let salary = tax(10000);
// console.log(salary);
//
// function filterUsers(users) {
//     let filteredUsers = [];
//     for (let user of users) {
//         if (user.age > 30){
//             filteredUsers.push(user);
//         }
//     }
//     return filteredUsers;
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let filter = filterUsers(users);
// console.log(filter);

//arguments це псевдомасив
// function foobar() {
//     console.log(arguments);
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     } else if (arguments.length === 3) {
//         return arguments[0] + arguments[1] + arguments[2];
//     }
// }
// console.log(foobar(10, 20, 30));

//rest argument мати якусь функцію з невизначеною кількістю аргументів

function asd (y,...x) {
    console.log(x);
    console.log(Array.isArray(x));
}
asd(1, 2, 3, 4, true);