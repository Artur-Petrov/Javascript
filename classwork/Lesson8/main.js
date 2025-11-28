// оператор опціональної послідовності
// optional chain operator
// let user = {
//     name: {}
//
// };
// user?.name; // у випадку якщо user === undefined або null то ми до name навіть не звернемося, знак питання (?) перше перевіряє
// user?.name?.firstName;


// spred копіює один обєкт в інший, поверхнева копія

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

// let nums = [11, 22, 33];
// let nums2 = [...nums];
// console.log(nums === nums2); // false вони тепер не залежні

// поверхневі та глибокі копії

let user = {
    name: 'John',
    skills: ['html', 'css']
};

// let userClone = {...user};
// console.log(user === userClone); // false
// console.log(user.skills === userClone.skills); // true бо масив зі скілами це силочний тип данних, їх посилання однакові

// let s = JSON.stringify(123); // перетворює все на стрінгове значення
// console.log(typeof s, s);
// let s = JSON.stringify(user); // convert to JSON
// console.log(s); // ключ і значення будуть огорнуті в ""  {"name":"John","skills":["html","css"]}
// JSON - javascript object notation

let userJsonClone = JSON.stringify(user);
console.log(userJsonClone);
// let parse = JSON.parse('123');// зворотнє до stringify, перетворює в number
// console.log(typeof parse, parse);
let parse = JSON.parse(userJsonClone); // повертає назад наш початковий обєкт вже не стрінг
console.log(parse);

// JSON не повертає функції, поведінку

// клонуємо через Object

let assign = Object.assign({}, user);// {} це куда ми копіюємо а user це що ми копіюємо
console.log(assign);// функції також копіює але повне копіювання тобто глибоке  тільки через JSON
