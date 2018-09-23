const { router, post } = require('microrouter')

const handler = require('@/helpers/handler')
const sign = require('@/controllers/sign')

module.exports = router(
  post('/sign/register', handler(sign.register, ['username', 'password'])),
  post('/sign/login', handler(sign.login, ['username', 'password'])),
)
