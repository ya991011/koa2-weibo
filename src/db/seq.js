const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const {isProd, isTest} = require('../utils/env')

const { host,user,password, database} = MYSQL_CONF
const cof = {
    host,
    dialect:'mysql'
}
// 线上环境创建连接池
if(isProd){
    cof.pool = {
        max:5,
        min:0,
        idle:10000
    }
}
if(isTest){
    conf.logging = ()=>{}
}


const sequelize = new Sequelize(database,user,password,cof)

sequelize.authenticate().then(()=>{
    console.log('ok')
}).catch(()=>{
    console.log('no ok')
})

module.exports = sequelize
