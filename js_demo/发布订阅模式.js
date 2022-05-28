//  事件中心
let pubSub = {
    list: {},
    //  订阅
    subscibe: function (key, fn) {
        if(!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    },
    //  发布
    publish: function (key, ...arg) {
        for(let fn of this.list[key]) {
            fn.call(this, ...arg)
        }
    },
    //  取消订阅
    unSubscribe: function (key, fn) {
        let fnList = this.list[key]
        if(!fnList) return false;

        if(!fn) {
            fnList && (fnList.length = 0)
        }else {
            fnList.forEach((item, index) => {
                if(item === fn) {
                    fnList.splice(index, 1)
                }
            })
        }
    }
}

//  订阅
pubSub.subscibe('onwork', time => {
    console.log(`上班了: ${time}`)
})

pubSub.subscibe('offwork', time => {
    console.log(`下班了: ${time}`)
})

pubSub.subscibe('launch', time => {
    console.log(`吃饭了: ${time}`)
})

pubSub.publish('offwork', '18:00:00')