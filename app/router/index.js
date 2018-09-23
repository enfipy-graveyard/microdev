const { router } = require('microrouter')

module.exports = router(
  require('./routes/main'),
  require('./routes/sign'),
)
