const AuthencationController = require('./controllers/AuthenticationController')

const AuthencationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthencationControllerPolicy.register,
    AuthencationController.register)

  app.post('/login',
    AuthencationController.login)
}
