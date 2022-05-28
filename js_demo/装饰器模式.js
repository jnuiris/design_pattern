//  不使用装饰器打印日志
// const log = (srcFun) => {
//     if(typeof(srcFun) !== 'function') {
//         throw new Error(`the param must be a function`)
//     }
//     return (...arguments) => {
//         console.info(`${srcFun.name} invoke with ${arguments.join(',')}`)
//         srcFun(...arguments)
//     }
// }
//
// const plus = (a, b) => a + b;
//
// const logPlus = log(plus)
//
// logPlus(1, 2)

//  使用装饰器打印日志
const log = (target, name, descriptor) => {
    var oldValue = descriptor.value
    descriptor.value = function () {
        console.log(`Calling ${name} with`, arguments)
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

class Math {
    @log
    plus(a, b) {
        return a + b
    }
}

const math = new Math()

math.add(1, 2)

//  todo:没看完
//  https://imweb.io/topic/5b1403bbd4c96b9b1b4c4e9e