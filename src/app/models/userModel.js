const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
	  type: String,
	  trim: true,		
	  required: [true, 'Please tell us your name']
  },
  email: {
    type: String,
	  trim: true,
	  index: true,
	  required: [true, 'Please provide your email']
  },
  password: {
	  type: String,
	  trim: true,
	  select: false,
	  required: [true, 'Please provide a password']
  },
  phones: [{
	  ddd: { 
		  type: Number, 
		  min: 0,
		  required: [true, 'Please provide a ddd'] 
	  },
	  number: { 
		  type: Number,
		  required: [true, 'Please provide a number']
	  }
  }],
  lastLogin: {
	  type: Date,
	  default: Date.now
  },
  createdAt: {
	  type: Date,
	  default: Date.now
  },
  updatedAt: {
	  type: Date,
	  default: Date.now
  }
})

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

UserSchema.pre('updateOne', function (next) {
  const data = this.getUpdate()
  data.updatedAt = new Date()
  this.update({}, data).exec()
  next()
})

module.exports = mongoose.model('User', UserSchema)