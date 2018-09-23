require('module-alias/register')
const microCors = require('micro-cors')

const config = require('@/config')
const router = require('@/router')

const cors = microCors({ allowMethods: ['GET', 'POST', 'PUT', 'DELETE'] })

module.exports = cors(router)
