// // // import express from 'express';
// // const express = require('express');

// // const app = express();
// // const PORT = 3000;

// // app.listen(PORT, () => {
// //   console.log('server is started and works');
// // });
// // app.get('/', (req, res) => {
// //   console.log(req);
// //   res.sendStatus(200);
// // });

// //задача 1

// // function reverseString(str) {
// //   return [...str].reverse().join(''); //раскладывает строку '' в массив, применяет к массиву метод реверс, метод джоин объединяет обратно массив в строку
// // }

// // console.log(reverseString('Hello, world!')); //'!dlrow ,olleH'

// //задача 2 принимает 2 массива и возвращает новый, который содержит все уникальыне элементы

// // function mergeUnique(arr1, arr2) {
// //   const array = [...arr1, ...arr2]; // создает новый массив из элтов ар1 и ар2
// //   return [...new Set(array)]; //возвращает новый массив, в котором сет убирает повторяющиеся значения
// // }
// // console.log(mergeUnique([1, 2, 3], [2, 3, 4]));
// // const get = (url) => {
//   //   return new Promise((resolve, reject) => {
//     //     setTimeout(() => {
//       //       const data = {
//         //         '/users': [
//           //           { id: 1, name: 'Artem' },
//           //           { id: 2, name: 'Jora' },
//           //         ],
//           //         '/posts': [{ id: 1, title: 'Hello suka' }],
//           //       };
//           //       const result = data[url];
          
//           //       if (result) {
//             //         resolve(result);
//             //       } else {
//               //         reject(new Error('404 Not Found'));
//               //       }
//               //     }, 1000);
//               //   });
//               // };
              
//               // get('/users').then((id) => get('/posts').then((result) => console.log(result)));
              
//               //3. Написать функцию, которая делает запрос через get("/users"), а затем делает запрос через get("/posts"),
//               //    находит посты первого пользователя из массива полученного от users и возвращает массив постов этого пользователя
//               const get = (url) => {
//                 return new Promise((resolve, reject) => {
//                   setTimeout(() => {
//                     const data = {
//                       '/users': [{id: 1, name: "Artem"}, {id: 2, name: "Jora"}],
//                       '/posts': [{id: 1, title: "Hello suka"}, {id: 2, title: "Pidor ebaniy"}, {id: 1, title: "Zhopa"}]
//                     };
//                     const result = data[url];
              
//                     if (result) {
//                       resolve(result);
//                     } else {
//                       reject(new Error("404 Not Found"))
//                     }
//                   }, 1000)
//                 })
//               }
              
//               // get('/users').then((users) => {
//               //   const id = users[0].id
//               //   get('/posts').then((posts) => {
//               //     const userPost = posts.filter((post) => post.id === id) 
//               //     console.log(userPost);
                  
//               //   })
//               // })
              
//               const postsById = async(id) => {
//                 const users = await get('/users')
//                 const filteredArray = users.filter((user) => id === user.id)
//                 const userExists = filteredArray.length > 0
//                 if (!userExists) {
//                   console.log(undefined);
//                   return undefined
//                 }
//                 const posts = await get('/posts')
//                 const res =  posts.filter((post) => id === post.id)  
//                 console.log(res);
//                 return res
//               }
              
//               postsById(2)
              
//               // Напишите функцию filter, которая принимает массив и функцию-предикат, и возвращает новый массив, содержащий только те элементы исходного массива, для которых функция-предикат возвращает true. Функция должна быть реализована с использованием коллбэков.
              
//               // Пример использования:
              
//               // javascript
//               // Copy code
//               const array = [1, 2, 3, 4, 5];
              
//               // function isEven(number) {
//               //   return number % 2 === 0;
//               // }
              
//               // const evenNumbers = filter(numbers, isEven);
//               // console.log(evenNumbers); // [2, 4]
//               // В этом примере filter принимает массив numbers и функцию isEven, которая возвращает true для четных чисел. В результате вызова filter возвращается новый массив, содержащий только четные числа из исходного массива.
//               const filterfunc = (numbers, predikat) => {
//                 return numbers.filter(predikat) 
//               }
//               const notEven = (number) => {
//                 return number % 2 !== 0    
//               }
//               const isEven = (number) => {
//                 return number % 2 === 0
//               }
//               console.log(filterfunc(array, isEven))
              
//               ////////////////////////////////////////
//               //задача на колбэки//////////
//               const data = {
//                 '/users': [{id: 1, name: "Artem"}, {id: 2, name: "Jora"}]
//               }
              
//               function loadData(url, callback, error = () => {}, loading = () => {}) {
//                 if (Object.hasOwn(data, url)) {
                  
//                   setTimeout(() => callback(data[url]), 1000); 
//                   loading()// loading
//                 } else {
//                   error();
//                   } ;
//                 }
              
              
//               loadData('/users', (data) => {
//                 console.log(data); // { content: 'Some data from /data' }
//               },() => console.log('PASHOL NAHUI'), () => console.log('loading'));
              
//                function calculate(num1, num2, operation, callback) {
//                  operation(num1, num2)
//                }
              
//                calculate(1, 2, (result) => {
//                  console.log(result); // 3
//                });
//               calculate(3, 2, (a, b) => a - b, (result) => {
//                 console.log(result); // 1
//               });
              
//               /////////////////////////////////////////////////////////