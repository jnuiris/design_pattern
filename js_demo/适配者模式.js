//  使用ES6改写适配器实现地图SDK统一渲染
class googleMap {
    show() {
        console.log('开始渲染谷歌地图')
    }
}

class baiduMap {
    display() {
        console.log('开始渲染百度地图')
    }
}

class baiduMapAdapter extends baiduMap {
    constructor() {
        super();
    }

    show() {
        this.display()
    }
}

function renderMap(map) {
    map.show()  //  统一接口调用
}

renderMap(new googleMap())
renderMap(new baiduMapAdapter())