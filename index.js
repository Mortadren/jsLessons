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
    const users = []
    const randomFrom = (massive) => {
        return massive[Math.round(Math.random() * (massive.length - 1))]                                                    //максимальный индекс из массива
    } 
    for (i=1; i <= arg; i++){
        const user = {
            id:i,
            name:randomFrom(names),
            surname:randomFrom(surnames),
            age:randomFrom(ages),
            citi:randomFrom(cities),
            gender:randomFrom(genders),
            favoriteFood:randomFrom(favoriteFoods),
    }
        users.push(user) 
    }
    return users
}
// console.log(generateUsers(1));
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
