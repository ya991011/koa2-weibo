/**
 * @description 存储配置
 * @author noerl
 */


const { isProd } = require('../utils/env')



let REDIS_CONF = {
    port: 6379,
    host:'127.0.0.1'
}

let MYSQL_CONF ={
    host:'localhost',
    post:'3306',
    user:'root',
    password:'root',
    database:'weibo'
}

if(isProd){
    REDIS_CONF = {
        // 线上的redis配置
        port: 6379,
        host:'127.0.0.1'
    },
    REDIS_CONF = {
        // 线上的Mysql配置
        host:'localhost',
        user:'root',
        post:'3306',
        password:'root',
        database:'weibo'
    }
}

module.exports = {
    REDIS_CONF, MYSQL_CONF
}