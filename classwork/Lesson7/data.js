// конструктор дати
// let now = new Date(); // тут нічого не приймає то дасть поточний час
// console.log(now);
//
// console.log(now.getFullYear());
// console.log(now.getMonth()); // рахунок місяців починаються з 0
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
//
// console.log(now.getTime()); // кількість мілісекунд починаючи з 1 січня 1970 року
//
// // let date1 = new Date(1763980166266);
// // let date1 = new Date("June 10 1991 12:20:34");
// let date1 = new Date(1987, 0, 30, 12, 30, 50, 0);// рік, місяць, день, година, хвилина, секунда, мілісекунда
// console.log(date1);
//
// date1.setDate(22); // сетаємо день, максимум 31
// console.log(date1);

let user = {
    id: 1,
    name: 'John',
    bday: new Date(1763980166266)
}
console.log(user);