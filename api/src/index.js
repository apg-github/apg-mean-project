require("./db/mongoose")

const express = require("express")
const recipesRouter = require("./routers/recipe-route")

const apiServer = express()

apiServer.use(express.json())

apiServer.all('/*', (req, res, next) => {
    // handle cors policy, add headers
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

apiServer.use(recipesRouter)

apiServer.listen(3000, () => {
    console.log('api server is running on port 3000')
})