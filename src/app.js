const express = require('express')
const app = express()
const userRoutes = require('./routers/user')
const authRoutes = require('./routers/auth')
const recipeRoutes = require('./routers/recipe')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./middleware/passport')
require('./db/mongoose')

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [`process.env.COOKIE_KEY`]
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json(), authRoutes, userRoutes, recipeRoutes)

module.exports = app
