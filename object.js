function Person(name, age, gender)
 {
    this.name = name;
    this.age = age;
    this.gender = gender;

let person1 = new Person('Alice', 30, 'female');
let person2 = new Person('Bob', 25, 'male');
console.log(person1);
// Output: { name: 'Alice', age: 30, gender: 'female' }
console.log(person2);
 // Output: { name: 'Bob', age: 25, gender: 'male' }
}