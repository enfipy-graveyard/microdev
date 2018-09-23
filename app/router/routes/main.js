const { router, get } = require('microrouter')

module.exports = router(
  get('/', async () => 'Base api endpoint'),
)
