/////////////////////////////////////ZADACHA//////////////////////////////////
////!!!типы данных и функции!!! (ф-я принимает аргумент и возвращает его тип)////
const getType = (arg) => {
    // return Array.isArray(arg)
    if (arg === null){
        return null
    } else if (Array.isArray(arg)){
        return 'massive'
    }else {
        return typeof(arg)
    }
    
}
// console.log(getType(55))
//////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////ZADACHA//////////////////////////////////
////!!!циклы, ф-и, типы данных!!! (ф-я принимает массив любых эл-тов и возвр новый
////массив, содержащий только строки из исходного массива)////////////////////

const filterStrings = (arr) => {
    return arr.filter((element) => typeof element === 'string')
    
}
// console.log(filterStrings([1, 'text', true, 'bimbambombom', null, undefined]))

//////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////ZADACHA//////////////////////////////////
////!циклы и ф-и! (написать ф-ю, которая прин число n и выводит в консоль 
////числа от 1 до n включительно. Если число дел на 3, вывод Fizz, если дел на 5
////то вывод Buzz, есл дел на и на 3 и на 5, то FizzBuzz)/////////////////////
//////////////////////////////////////////////////////////////////////////////

const fizzbuzz = (n) => {
     for (let i=1; i<=n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if ( i % 3 === 0){
            console.log('Fizz')
        }else if (i % 5 === 0){
            console.log('Buzz');   
        }else (console.log(i))
        

    }}
// fizzbuzz(15)

//////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////ZADACHA//////////////////////////////////
////написать функцию, которая принимает количество пользователей для генерации 
////и возвращает массив объектов. Каждый объект должен предствлять пользователя
////и содержать поля names, surnames, ages, cities, genders, favouriteFoods
//////////////////////////////////////////////////////////////////////////////


const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'];
const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
const ages = [25, 30, 35, 40, 45];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
const genders = ['male', 'female'];
const favoriteFoods = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad'];



const generateUsers = (arg)=>{
    for (i=1; i <= arg; i++){
        const a = {}
        console.log(a);
        
    }
}
generateUsers(3)
// const users = generateUsers(3);
// console.log(users);
/*
[
  { id: 0, name: 'Charlie', age: 30, city: 'Houston' },
  { id: 1, name: 'Bob', age: 45, city: 'New York' },
  { id: 2, name: 'Alice', age: 35, city: 'Chicago' },
]
*/