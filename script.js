let numbers = [2, 4, 9, 10, 45, 67, 8, 90, 25, 85, 15, 98, 100, 1];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]); 
    } else {
        oddNumbers.push(numbers[i]); 
    }
}

console.log("Haama sonlar:", numbers);
console.log("Juft sonlar:", evenNumbers);
console.log("Toq sonlar:", oddNumbers);