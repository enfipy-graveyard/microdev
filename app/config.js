module.exports = {
  isProduction: process.env.NODE_ENV === 'production',
  mongo: {
    main: process.env.MONGODB_URI || 'mongodb://mongo:27017/main',
  },
}
