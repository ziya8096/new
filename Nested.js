const students = [
    {
        name: "Alice",
        age: 20,
        grades: {
            math: 90,
            science: 85,
            history: 78
        }
    },
    {
        name: "Bob",
        age: 21,
        grades: {
            math: 88,
            science: 92,
            history: 80
        }
    },
    {
        name: "Charlie",
        age: 19,
        grades: {
            math: 95,
            science: 89,
            history: 85
        }
    }
];
{
console.log(students[0].name); // Output: "Alice"
console.log(students[1].age);  // Output: 21
console.log(students[2].grades.math); // Output: 95
}
{
    const scienceGrade = students[1].grades.science;
console.log(scienceGrade); 
// Output: 92
}
{
    // Update the math grade of the first student
students[0].grades.math = 95;

// Verify the update
console.log(students[0].grades.math); // Output: 95
}