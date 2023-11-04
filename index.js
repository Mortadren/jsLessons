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
console.log(getType(55))
//////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////ZADACHA//////////////////////////////////
////!!!циклы, ф-и, типы данных!!! (ф-я принимает массив любых эл-тов и возвр новый//
////массив, содержащий только строки из исходного массива)////////////////////

const filterStrings = (arr) => {
    return arr.filter((element) => typeof element === 'string')
    
}
console.log(filterStrings([1, 'text', true, 'bimbambombom']))

