const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/api/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/api/login',
        AuthenticationController.login)
}
