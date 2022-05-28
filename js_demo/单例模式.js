//  "简单版“单例模式
// let Singleton = function (name) {
//     this.name = name
//     this.instance = null
// }
//
// Singleton.prototype.getName = function () {
//     console.log(this.name)
// }
//
// Singleton.getInstance = function (name) {
//     if(this.instance) {
//         return this.instance
//     }
//     return this.instance = new Singleton(name)
// }
//
// let Winner = Singleton.getInstance('Winner')
// let Looser = Singleton.getInstance('Looser')
//
// console.log(Winner === Looser)
// Winner.getName()
// Looser.getName()


//  “透明版”单例模式
// let CreateSingleton = (function () {
//     let instance
//     return function (name) {
//         if(instance) {
//             return instance
//         }
//         this.name = name
//         return instance = this
//     }
// })()
//
// CreateSingleton.prototype.getName = function () {
//     console.log(this.name)
// }
//
// let Winner = new CreateSingleton('Winner')
// let Looser = new CreateSingleton('Looser')
//
// console.log(Winner === Looser)
// console.log(Winner.getName())
// console.log(Looser.getName())

//  惰性单例模式
let proxyCreateSingleton = (function () {
    let instance
    return function (name) {
        if(instance) {
            return instance
        }
        return instance = new Singleton(name)
    }
})()

//  独立的Singleton类，处理对象实例
let Singleton = function (name) {
    this.name = name
}
Singleton.prototype.getName = function () {
    console.log(this.name)
}

let Winner = new proxyCreateSingleton('Winner')
let Looser = new proxyCreateSingleton('Looser')

console.log(Winner === Looser)
Winner.getName()
Looser.getName()








