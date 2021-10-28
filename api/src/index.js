require("./db/mongoose")

const express = require("express")
const recipesRouter = require("./routers/recipe-route")

const apiServer = express()

apiServer.use(express.json())

apiServer.use(recipesRouter)

apiServer.listen(3000, () => {
    console.log('api server is running on port 3000')
})