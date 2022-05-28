//  代理接听电话，实现拦截黑名单
var backPhoneList = ['189xxxxx140']
//  代理
var ProxyAcceptPhone = function (phone) {
    //  预处理
    console.log('电话正在接入...')
    if(backPhoneList.includes(phone)) {
        //  屏蔽
        console.log('屏蔽黑名单电话')
    }else {
        AcceptPhone.call(this, phone)
    }
}

var AcceptPhone = function (phone) {
    console.log('接听电话:', phone)
}


ProxyAcceptPhone('189xxxxx140')
ProxyAcceptPhone('189XXXXX141')

//  todo: 没看完
