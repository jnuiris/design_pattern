//  统一遍历接口实现
// var each = function (arr, callBack) {
//     for(let i = 0, len = arr.length; i < len; i++) {
//         //  将值，索引返回给回调函数callBack处理
//         if(callBack(i, arr[i]) === false) {
//             break
//         }
//     }
// }
//
// each([1, 2, 3, 4, 5], function (index, value) {
//     if(value > 3) {
//         return false  //  返回false中止each
//     }
//     console.log([index, value])
// })

//  ES6的yield实现外部迭代器
// function* generatorEach(arr) {
//     for(let [index, value] of arr.entries()) {
//         yield console.log([index, value])
//     }
// }
//
// let each = generatorEach(['Angular', 'React', 'Vue'])
// each.next()
// each.next()
// each.next()

//  ES6的Iterator遍历器
// let arr = ['a', 'b', 'c']
// let iterator = arr[Symbol.iterator]()
//
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

//  类数组对象部署Iterator方法
// let arrLike = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3,
//     [Symbol.iterator]: Array.prototype[Symbol.iterator]
// }
//
// for(let item of arrLike) {
//     console.log(item)
// }

let person = {
    name: 'Ken',
    sex: 'Male'
}

// for (let key of Object.keys(person)) {
//     console.log(`${key}: ${person[key]}`)
// }

function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]]
    }
}

for (let [key, value] of entries(person)) {
    console.log(`${key}: ${value}`)
}