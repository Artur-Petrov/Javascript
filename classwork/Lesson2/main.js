let arr = [111, 21, 123123, -55];
console.log(arr);
console.log(arr[2]);
console.log(arr[0]);
console.log(arr.length);

arr[0] = 'new value';
console.log(arr);

arr[4] = 'okten';
console.log(arr);

arr[arr.length] = 'new';
console.log(arr);

let user1 = {
    name: 'John',
    email: 'john@gmail.com',
    age: 31,
    skills: ['html', 'js', 'java'],
    wife: {
        name: 'olya',
        age: 28
    }
};
console.log(user1);
console.log(user1.email);
console.log(user1['email']);
console.log(user1.skills);
console.log(user1.skills[2]);

console.log(user1.wife['name']);