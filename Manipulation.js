let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    features: ['Air Conditioning', 'Sunroof', 'Bluetooth']
};
{
 console.log(car.brand); 
// Output: Toyota
console.log(car['model']);
 // Output: Camry
console.log(car.year); 
// Output: 2022
console.log(car.features); 
// Output: ['Air Conditioning', 'Sunroof', 'Bluetooth']
console.log(car.features[0]); 
// Output: Air Conditioning
console.log(car.features[2]); 
// Output: Bluetooth
car.year = 2023;
 // Update the year
console.log(car.year);
 // Output: 2023
};
