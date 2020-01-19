const jwt = require('jsonwebtoken')

const authConfig = require('../../config/auth.json')

module.exports = (request, response, next) => {
  const authHeader = request.headers['authentication']
  const partsAuthHeader = authHeader.split(' ')

  if (!authHeader) 
    return response.status(401).json({ message: 'Unauthorized' })

  if (partsAuthHeader.length !== 2) 
    return response.status(401).json({ message: 'Unauthorized' })

  if (partsAuthHeader[0] !== 'Bearer') 
    return response.status(401).json({ message: 'Unauthorized' })

  const token = partsAuthHeader[1]

  jwt.verify(token, authConfig.secret, (error, success) => {
    if (success) {
      next()
      return
    }
          
    return response.status(401).json({ message: 'Invalid session' })
  })
}