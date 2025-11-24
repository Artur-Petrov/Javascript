// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(1, 'vasya', 'vasyenko', 'vasya.com', '+38067676767'),
//     new User(2, 'petya', 'petyenko', 'petya.com', '+24234242424'),
//     new User(3, 'kolya', 'kolyenko', 'kolya.com', '+43434343434'),
//     new User(4, 'olya', 'olyenko', 'olya.com', '+6556565656565'),
//     new User(5, 'max', 'maxenko', 'max.com', '+1112212111212'),
//     new User(6, 'anya', 'anyemko', 'anya.com', '+8989898989898'),
//     new User(7, 'oleg', 'olegenko', 'oleg.com', '+1233443546644'),
//     new User(8, 'andrey', 'andryenko', 'andrey.com', '+707070707070'),
//     new User(9, 'masha', 'mashenko', 'masha.com', '+239846749823498'),
//     new User(10, 'igor', 'igorenko', 'igor.com', '+097807087960796'),
// ];
// console.log(users);

// #2ikXsE2WiKZ
//
// – Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

// const filteredUsers =users.filter(value => value.id % 2 === 0);
// console.log(filteredUsers);

// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let usersSortedId = users.sort((a, b) => a.id - b.id);
// console.log(usersSortedId);
//
// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client


// function Client(id, name, surname, email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// let clientBase = [
//     new Client(1, 'vasya', 'vasyenko', 'vasya.com', '+38067676767', ['kokos', 'ogirok', 'potato']),
//     new Client(2, 'petya', 'petyenko', 'petya.com', '+24234242424', ['morkva', 'jablyko', 'cherry']),
//     new Client(3, 'kolya', 'kolyenko', 'kolya.com', '+43434343434', ['kiwi', 'ogirok']),
//     new Client(4, 'olya', 'olyenko', 'olya.com', '+6556565656565', ['maslo']),
//     new Client(5, 'max', 'maxenko', 'max.com', '+1112212111212', ['moloko', 'cheese', 'kiwi', 'peach']),
//     new Client(6, 'anya', 'anyemko', 'anya.com', '+8989898989898', ['kovbasa', 'ogirok']),
//     new Client(7, 'oleg', 'olegenko', 'oleg.com', '+1233443546644', ['kokos']),
//     new Client(8, 'andrey', 'andryenko', 'andrey.com', '+707070707070', ['palyanytsa', 'kiwi', 'kokos', 'papaya', 'mango']),
//     new Client(9, 'masha', 'mashenko', 'masha.com', '+239846749823498', ['onion', 'tomat', 'bylochka']),
//     new Client(10, 'igor', 'igorenko', 'igor.com', '+097807087960796', ['juice', 'morkva'])
//];
// console.log(clientBase);

// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

// let sortedOrders = clientBase.sort((order1, order2) => order1.order.length - order2.order.length);
// console.log(sortedOrders);

// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

// function Car(model, producer, productionYear, maxSpeed, engineVolume){
//     this.model = model;
//     this.producer = producer;
//     this.productionYear = productionYear;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
// }