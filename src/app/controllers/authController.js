const auth = require('../functions/auth')

module.exports = {
  async signIn(request, response) {
    try {
      const { email, password } = request.body

      const user = await auth.signInWithEmailAndPassword(email, password)

      if (!user)
        return response.status(401).json({ 
          message: 'E-mail or password is invalid' 
        })

      return response.status(200).json(user)        
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}