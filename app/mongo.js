const mongoose = require('mongoose')

module.exports = (props) => {
  mongoose.connect(props.uri, { useNewUrlParser: true })
  mongoose.set('debug', props.debug)
  mongoose.set('useCreateIndex', true)
}
