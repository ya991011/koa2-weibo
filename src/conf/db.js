/**
 * @description 存储配置
 * @author noerl
 */


const { isProd } = require('../utils/env')



let REDIS_CONF = {
    port: 6379,
    host:'127.0.0.1'
}

if(isProd){
    REDIS_CONF = {
        // 线上的redis配置
        port: 6379,
        host:'127.0.0.1'
    }
}

module.export = {
    REDIS_CONF
}