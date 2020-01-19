const auth = require('../functions/auth') 
const User = require('../models/userModel')	

module.exports = {
  async getUser(request, response) {
    try {
      const userId = request.params.id
      const user = await User.find({ _id: userId })
      
      return response.status(200).json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async create(request, response) {
    try {
      const { email, password } = request.body
      
      if (await User.findOne({ email }))
        return response.status(400).json({ message: 'E-mail already exists' })

      await User.create(request.body)

      const user = await auth.signInWithEmailAndPassword(email, password)
      
      return response.status(201).json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}