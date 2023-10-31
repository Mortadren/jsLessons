// на всю хюйню
// var x = 0;
// //внутри хуйни
// const x = 0;
// let x = 0;
// но есть нюанс: константу можно изменить, если в ней лежит объект (менять через методы) (ссылается на ячейку памяти)

// // const multiply = (a, b) => {
//     return a*b;
// }

// const multiply = (a, b) => a*b
// function  multiply(a, b) {
//     return a*b;
// }

// multiply(1, 7)
// console.log(multiply(1, 7))

//задача намба 2

// const hello = (firstName, surname, age) => {
//     const result = `Hallo ${firstName} ${surname} vozrast ${age} years`
//     return result;
// }
// console.log(hello('Ivan','Petrov', 18))

//задача намба 3

// const pol = (letter) => {
//   if (letter == 'm') {
//     return 'you a man';
//   }
//   if (letter == 'w') {
//     return 'you a bluad`';
//   }
//   return 'poshol nahui';
// };
// console.log(pol((letter = 'w')));

//задача намба 4

// const stolb = (end) => {
//   const massive = {};
//   let value = end;
//   for (let i = 0; i <= end; i++) {
//     // let i = 0; while (i<=end){console.log(i); i++}

//     massive[i] = value;
//     value--;
//   }
//   console.log(massive);
// };
// stolb(100);

//задача намба 5

// const isEven = (massiveOfNumbers) => {
//   let result = true;
//   massiveOfNumbers.forEach((number) => {
//     if (number % 2 !== 0) {
//       //деление без остатка
//       result = false;
//     }
//   });
//   return result;
// };
// const x = [1, 1, 2],
//   y = [2, 4, 6];
// console.log(isEven(y));

//задача намба 6

const massive = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = massive.map((number) => number * 10);
console.log(x);

// Напишите функцию analyzeArray, которая принимает массив чисел и возвращает объект с информацией о массиве. В объекте должны быть следующие поля:

// min - минимальное значение в массиве.
// max - максимальное значение в массиве.
// average - среднее значение элементов массива.
// length - количество элементов в массиве.
// Если массив пустой, функция должна возвращать null.

//   ПРИМЕР:
//   const result = analyzeArray([1, 2, 3, 4, 5]);
//   console.log(result); // { min: 1, max: 5, average: 3, length: 5 }

//   const emptyResult = analyzeArray([]);
//   console.log(emptyResult); // null

const array = [23, 14, 14, -2, 0, 1, 1, 123];
const array2 = [];
const array3 = ['12', 13, 'wasfd']; //*
const array4 = [undefined, null]; //*

const analyzeArray = (array) => {
  if (array.length === 0) {
    return null;
  }

  const result = {
    min: 0,
    max: 0,
    average: 0,
    length: array.length,
  };
  for (let element of array) {
    if (typeof element !== 'number') {
      return null;
    }
    if (element < result.min) {
      result.min = element;
    }
    if (element > result.max) {
      result.max = element;
    }
    result.average += element;
  }
  result.average = result.average / result.length;
  return result;
};

//     array.forEach((element) => {
//     }
// }

console.log(analyzeArray(array));
console.log(analyzeArray(array2));
console.log(analyzeArray(array3));
console.log(analyzeArray(array4));

// console.log(typeof "12" === "string")

//3. Написать функцию, которая делает запрос через get("/users"), а затем делает запрос через get("/posts"),
//    находит посты первого пользователя из массива полученного от users и возвращает массив постов этого пользователя
const get = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        '/users': [
          { di: 1, name: 'Artem' },
          { id: 2, name: 'Jora' },
        ],
        '/posts': [{ id: 1, title: 'Hello suka' }],
      };
      const result = data[url];

      if (result) {
        resolve(result);
      } else {
        reject(new Error('404 Not Found'));
      }
    }, 1000);
  });
};

get('/users').then((id) => get('/posts').then((result) => console.log(result)));
