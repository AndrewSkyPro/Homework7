//Задание 1

let js = 'js';
console.log(js.toLocaleUpperCase());

//Задание 2

const arrAnimal = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const arrFood = ['яблоко', 'груша', 'гриб', 'огурец'];

const searchStart = (arr, str) => {
    const newArr = [];
    arr.forEach((arr) => {
        if (arr.toLowerCase().startsWith(str.toLowerCase())) {
            newArr.push(arr);
        }
    });
    return newArr;
}

console.log(searchStart(arrAnimal, 'ко'));
console.log(searchStart(arrFood, 'гру'));

//Задание 3

Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);

//Задание 4

let numbers = [52, 53, 49, 77, 21, 32];
let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

console.log(maxNumber);
console.log(minNumber);

//Задание 5

const randomInt = (min, max) => {
    let rand = 1 + Math.random() * (max - min);
    return Math.round(rand);
}

console.log(randomInt(1, 10));

//Задание 6

const getRandomArrNumbers = (numb) => {
    const arrNumbers = new Array(Math.floor(numb / 2));

    for (let i = 0; i < arrNumbers.length; i++) {
        arrNumbers[i] = Math.floor(Math.random() * (numb + 1));
    }
    return arrNumbers;
}
console.log(getRandomArrNumbers(8));

//Задания 7

const twoNumbers = (a, b) =>
Math.round(Math.random() * (a - b) + b);

console.log(twoNumbers(3, 10));

//Задание 8

let currentDate = new Date();
console.log(currentDate);

//задание 9

let today = new Date();

today.setDate(today.getDate() + 73);

console.log(today);

//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const myDate = new Date();

const funcData = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const russianDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()];
    const result = (`Сегодня: ${russianDate} \nвремя: ${hour}:${minute}:${second}`);
    return result;
}
console.log(funcData(myDate));



