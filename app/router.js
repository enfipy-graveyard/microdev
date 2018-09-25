const { router, get, post } = require('microrouter')

const handler = require('@/helpers/handler')
const sign = require('@/controllers/sign')

module.exports = router(
  get('/', async () => 'Base api endpoint'),
  post('/sign/register', handler(sign.register, ['username', 'password'])),
  post('/sign/login', handler(sign.login, ['username', 'password'])),
)
