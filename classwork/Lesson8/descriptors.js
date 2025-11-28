let user = {
    firstName: 'Taras',
    lastName: 'Schevchenko'
};
user.firstName = 'Andriy';
console.log(user);

for (const userKey in user) {
    console.log(userKey);
}
// descriptor дозволяє задавати додаткові значення для полів обєкта

Object.defineProperty(
    user, // де ми визначаємо
    'id', // що ми міняємо (додамо характеристику id)
    {
        value: 1050, // значення id
        writable: false, // чи можна буде переписати value цього поля, true or false
        enumerable: false, // чи можна буде ітерувати true or false id не можна буде ітерувати
        configurable: true // в наступному виклику Object.defineProperty->user->'id' то ми зможемо його конфігурувати
    }
);
console.log(user);
user.id = 1;
console.log(user);
for (let userKey in user) {
    console.log(userKey);
}