const AuthencationController = require('./controllers/AuthenticationController')
const AuthencationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthencationControllerPolicy.register,
    AuthencationController.register)
  app.post('/login',
    AuthencationController.login)

  app.get('/songs',
    SongsController.index)
  app.get('/songs/:songId',
    SongsController.show)
  app.post('/songs',
    SongsController.post)
  app.put('/songs/:songId',
    SongsController.put)
}
