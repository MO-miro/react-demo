import {message} from 'antd'

// es5
/**
 * 寄生组合式继承
 * @param {*} subClass 
 * @param {*} superClass 
 */
var inheritPrototype = function(subClass, superClass){
    var F = Object.create(superClass.prototype)
    F.constructor = subClass
    subClass.prototype = F
}

var copyErrProperty = function (context){
       //Error对象属性有权限，继承需谨慎

    // Set this.name 
    Object.defineProperty(context, 'name', { 
        configurable: true, 
        enumerable: false, 
        value: context.constructor.name 
    }) 
    if (typeof Error.captureStackTrace === 'function') { 
        // Set this.stack 
        Error.captureStackTrace(context, context.constructor) 
    } 
}

/**
 * PicError
 * @param {*} msg 错误内容
 * @param {*} process 错误所处流程
 * @param {*} context this环境
 */
var PicError = function(msg, process, context){
    Error.call(this, msg)
    copyErrProperty(this)
    this.message = msg
    this.process = process
}
inheritPrototype(PicError, Error)
PicError.prototype.show = function(){
    message.error(this.message)
}


export {PicError}