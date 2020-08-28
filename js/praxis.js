// Нaписать скрипт для поиска самого маленького числа в массиве.
// при условии что числа уникальные (не повторяются)
const numbers = [51, 18, 13, 24, 7, -2, 85, 19, 120, 90, 885, 1110]
let smallestNumber = numbers[0]
let largestNumber = numbers[0]

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
        largestNumber = number;
}

// Выводит наименьшее число
console.log(`smallestNumber:`, smallestNumber);
//Выводит наибольшее число
console.log(`largestNumber:`, largestNumber);




// Написать скрипт который считает сумму элементов двух массивов 

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const array3 = [50, 70, 20];
// let total = 0;

// const numbers = array1.concat(array2, array3);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);