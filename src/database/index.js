const mongoose = require('mongoose')

module.exports = {
  mongoDB: 'mongodb://localhost/mongo_database',

  connect() {
    mongoose.connect(this.mongoDB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    
    mongoose.Promise = global.Promise

    return mongoose
  }
}