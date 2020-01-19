const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')
const authConfig = require('../../config/auth.json')

module.exports = {
  generateToken(userId, duration) {
    return jwt.sign(
      { id: userId }, 
      authConfig.secret, 
      { expiresIn: duration || 1800 }
    ) 
  },

  async signInWithEmailAndPassword(email, password) {
    const userSelected = await User.findOne({ email }).select('+password')

    if (!userSelected) 
      return

    if (!await bcrypt.compare(password, userSelected.password)) 
      return

    const user = await User.findOneAndUpdate(
      { _id: userSelected._id }, 
      { lastLogin: Date.now() },
      { new: true }
    )
  
    return {
      user: user,
      token: this.generateToken(user._id)
    }
  }
}