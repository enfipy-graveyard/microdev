const { isEmail, isEmpty } = require('validator')

module.exports.isEmpty = (value) => isEmpty(value || '')
module.exports.isEmail = (value) => isEmail(value || '')
