// set це також map але з малим виключенням
// map для асоціації між ключем та значенням

let map = new Map();
console.log(map);
// зоб додати асоціацію одного обєкту з іншим
// map.set(1, 'one'); // це як словник англ-укр, тут ми робимо для прикладу число прописом і просто число
// map.set(2, 'two');
// map.set(3, 'three');
// console.log(map);

// console.log(map.get(1)); // дістаємо те зо під ключем 1\
let likar = {id: 'likar'};
map.set(
    likar,
    {name: 'roma', surname: 'oganov'}
);
let petya = {id: 'petya'};
map.set(
    petya,
    {name: 'oleksandr', surname: 'petrov'}
);
console.log(map.get(petya));// тут буде undefined юо це різні обєкти
// щоб воно працювало треба цей ключ {id: 'likar'} винести в окрему зміну і звертатися до нього за посиланням
// ключі в мапі мають бути унікальні

// map.delete(likar);
console.log(map);

// map.clear();//чистить повністю мапу
console.log(map.size); // розмір мапи
console.log(map.keys()); // покаже всі ключі мап, повернеться MapIterator

let fromKeys = Array.from(map.keys()); // тут ключі поверне масивом, масив з обєктами
console.log(fromKeys);

console.log(map.values()); // всі значення вивести, повернеться MapIterator
let fromValues = Array.from(map.values()); // тут значення поверне масивом, масив з обєктами
console.log(fromValues);