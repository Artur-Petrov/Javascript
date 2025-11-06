// let arr = [111, 21, 123123, -55];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[0]);
// console.log(arr.length);
//
// arr[0] = 'new value';
// console.log(arr);
//
// arr[4] = 'okten';
// console.log(arr);
//
// arr[arr.length] = 'new';
// console.log(arr);
//
// let user1 = {
//     name: 'John',
//     email: 'john@gmail.com',
//     age: 31,
//     skills: ['html', 'js', 'java'],
//     wife: {
//         name: 'olya',
//         age: 28
//     }
// };
// console.log(user1);
// console.log(user1.email);
// console.log(user1['email']);
// console.log(user1.skills);
// console.log(user1.skills[2]);
//
// console.log(user1.wife['name']);

// масиви з об'єктами

//
// let users = [
//     {id: 1, name: 'vasya', age: 31, status: true, skills: ['html', 'mongo', 'mysql']},
//     {id: 1, name: 'petya', age: 33, status: false, skills: ['html', 'js']},
//     {id: 1, name: 'anna', age: 28, status: true, skills: ['html', 'js']},
//     {id: 1, name: 'olya', age: 29, status: false, skills: ['html', 'mongo', 'mysql']}
// ];
//
// console.log(users);
// console.log(users[2]);
// console.log(users[1]['age']);
//
// console.log(users[0].skills[2]);
// console.log(users[0]['skills'][2]);
//
// let user0 = users[0];
// let skills = user0['skills'];
// console.log(user0.skills);

// let user = {
//     name: 'John',
//     id: 1
// }
// console.log(user);
// user.age = 31;
// console.log(user);
// user['status'] = true;
// console.log(user);
//
// //для видалення
// delete user.id;
// console.log(user);
//
// let color = prompt('Enter color');
// if(color === 'green' && confirm('is the road clear')){
//     console.log('go');
// }

// let color = prompt("Enter color");

// switch (color) {
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('error');
// }

// switch (color) {
//     case 'green':
//     case 'yellow':
//         console.log('go');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('error');
// }

let obj = {
    id: 1,
    name: "John",
    age: 19
}

// let access;
// if (obj.age > 18){
//     access = 'Yes'
// } else {
//     access = 'No'
// }
// console.log(access)

let access = obj.age > 18 ? 'Yes' : 'No';
console.log(access)
