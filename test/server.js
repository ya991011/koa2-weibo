/**
 * @description jest server
 * @author noerl
 */


const request = require('supertest')
const server = require('../src/app').callback()

module.exports =  request(server)