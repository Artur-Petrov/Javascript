// let x = 0;
// x = x + 1; // x = 1
// console.log(x);
//
// x++; // x = 2
// console.log(x);
//
// x += 1; // x = 3
// console.log(x);
//
// x = x - 1; // x = 2
// console.log(x);
//
// x -= 1; // x =1
// console.log(x);
//
// x--; // x= 0
// console.log(x);
//
let weatherTemps = [
    {day: 'Monday', morning: 6, daytime: 15, evening: 8},
    {day: 'Tuesday', morning: 4, daytime: 10, evening: 5},
    {day: 'Wednesday', morning: 4, daytime: 9, evening: 2},
    {day: 'Thursday', morning: 6, daytime: 10, evening: 5},
    {day: 'Friday', morning: 8, daytime: 12, evening: 7},
    {day: 'Saturday', morning: 9, daytime: 14, evening: 6},
    {day: 'Sunday', morning: 12, daytime: 16, evening: 11}
];
// debugger;
// for (let days of weatherTemps) {
//     console.log(days.day);
// }
//
// for ( let i = 0; i < weatherTemps.length; i++){
//     // console.log(weatherTemps[i]);
//     let temp = weatherTemps[i];
//     document.write(`<h3>${temp.day} ${temp.morning} - ${temp.daytime}</h3>`);
// }
// let user = {
//     name: 'JavaScript',
//     email: 'javascript.com',
//     password: 'password',
// }
//
// for (let fieldName in user) {
//     // console.log(fieldName);
//     // console.log(user[fieldName]);
//     console.log(fieldName, user[fieldName]);
// }

for (const temp of weatherTemps) {
    // console.log(temp);
    for (const fieldName in temp) {
        console.log(fieldName, temp[fieldName]);
    }
    console.log('');
}

let i = 0;
while (i < weatherTemps.length) {
    let temp1 = weatherTemps[i];
    console.log(temp1);
    i++;
}
