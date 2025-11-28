let base = {
    id: 1,
    name: 'kokos'
}
let copy = Object.create(base);
console.log(copy);
console.log(base);
console.log(copy.id);
console.log(copy.name);

console.log(copy.hasOwnProperty('id')); // чи має наш copy своє власне поле id відповідь false
copy.surname = 'ogirok'; // тут вже copy буде мати своє поле surname якого нема в його пращура
console.log(copy.hasOwnProperty('surname'));
copy.id = 10101;
console.log(copy);
console.log(copy.hasOwnProperty('id'));// буде true і він буде мати своє власне id та id зі свого пращура, але вони будуть не на одному рівні

let obj = {};
obj.__proto__ = base; // аналог Object.create але це так собі
console.log(obj);
