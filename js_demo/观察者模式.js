//  目标者类
class Subject {
    constructor(props) {
        this.observers = []
    }

    //  添加
    add(observer) {
        this.observers.push(observer)
    }

    //  删除
    remove(observer) {
        let idx = this.observers.findIndex(item =>
        item === observer)
        idx > -1 && this.observers.splice(idx, 1)
    }

    //  通知
    notify() {
        for (let observer of this.observers) {
            observer.update()
        }
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(`目标者通知我更新了，我是:${this.name}`)
    }
}

let subject = new Subject()

let obs1 = new Observer('前端开发者')
let obs2 = new Observer('后端开发者')

subject.add(obs1)
subject.add(obs2)

subject.notify()