// клас створюється в середині з конструктором але не такий як function User також приймає аргументи і використовує this
// class User{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // функція в межах класу це метод різниці між просто функцією немає
//     greeting() {
//         return `Hello my name is ${this.name}`;
//     }
// }
// // викликається через new
// let user1 = new User('vasya', 31);
// console.log(user1);
// console.log(user1.greeting());

// class User{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     work() {
//         return `Work is in progress`;
//     }
// }

// якщо нам треба буде ще один клас з такими ж полями і методами але там різниця буде наприклад лише в одному полі
// то можна взяти за основу вже раніше готовий клас за допомогою extends

// class Customer{
//     constructor(name, age, password) {
//         this.name = name;
//         this.age = age;
//         this.password = password;
//     }
//     work...
// }

// тут Customer є нащадком User або розширює його
// class Customer extends User {
//     constructor(name, age, password) {
//         super(name, age); // super = this але super це типу з батьківського класу
//         this.password = password;
//     }
// }
//
// let customer = new Customer('vasya', 22, '1111');
// console.log(customer);
// // в класі User був також метод work відповідно клас Customer унаслідував і його
// console.log(customer.work());

function User(name, age) {
    this.name = name;
    this.age = age;
}

function Customer(name, age, password){
    User.apply(this, arguments); // тут apply підміняє контекст this, arguments це масив всіх наших аргументів
    //в User замість this будемо використовувати то шо згенерує Customer
    // password оголошуємо самі так як в User його нема
    this.password = password;
}

console.log(new Customer('vasya', 22, '12343'));
// побудували наслідування таке саме як в класах тільки для конструкторів