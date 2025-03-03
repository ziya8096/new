// let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
// fruits.push('Pineapple');
// console.log(fruits); 
// // Output: ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple']
// fruits.shift();
// console.log(fruits);
//  // Output: ['Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple']
//  fruits.splice(1, 0, 'Strawberry'); 
//  // Insert at index 1, remove 0 elements
// console.log(fruits); 
// // Output: ['Banana', 'Strawberry', 'Mango', 'Orange', 'Grapes', 'Pineapple']
// let mangoIndex = fruits.indexOf('Mango');
// console.log(mangoIndex);
//  // Output: 2
//  let orangeIndex = fruits.indexOf('Orange'); 
//  // Find the index of 'Orange'
// fruits.splice(orangeIndex, 1); 
// // Remove 1 element at the found index
// console.log(fruits);
//  // Output: ['Banana', 'Strawberry', 'Mango', 'Grapes', 'Pineapple']
//  fruits.sort();
// console.log(fruits);
//  // Output: ['Banana', 'Grapes', 'Mango', 'Pineapple', 'Strawberry']
//  fruits.reverse();
// console.log(fruits); 
// // Output: ['Strawberry', 'Pineapple', 'Mango', 'Grapes', 'Banana']


let fruits = ['apple', 'banana', 'chiku', 'dragonfruit','kiwi'];
fruits.push('grapes');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1,0,'orange');
console.log(fruits);

let bananaindex = fruits.indexOf('banana')
console.log(bananaindex);

let orangeIndex = fruits.indexOf('Orange');
fruits.splice (orangeIndex, 1);
console.log(fruits);




