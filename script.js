//Задание 1

// let js = 'js';
// console.log(js.toLocaleUpperCase());

//Задание 2

// const arrAnimal = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const arrFood = ['яблоко', 'груша', 'гриб', 'огурец'];

// const searchStart = (arr, str) => {
//     const newArr = [];
//     arr.forEach((arr) => {
//         if (arr.toLowerCase().startsWith(str.toLowerCase())) {
//             newArr.push(arr);
//         }
//     });
//     return newArr;
// }

// console.log(searchStart(arrAnimal, 'ко'));
// console.log(searchStart(arrFood, 'гру'));

//Задание 3

// Math.floor(32.58884);
// Math.ceil(32.58884);
// Math.round(32.58884);

//Задание 4

// let numbers = [52, 53, 49, 77, 21, 32];
// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);

// console.log(maxNumber);
// console.log(minNumber);

//Задание 5

// const randomInt = (min, max) => {
//     let rand = 1 + Math.random() * (max - min);
//     return Math.round(rand);
// }

// console.log(randomInt(1, 10));

//Задание 6

let arrRandom = [];

const getRandomArrNumbers = (arr, length, min, max ) => {

    //Новый массив^
    for (let c = 0; c < length; c++) {
        arr[c] = Math.round(Math.random() * ((max - min) + min) / 2 );
    }

}
getRandomArrNumbers(arrRandom)