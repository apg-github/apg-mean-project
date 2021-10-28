require("./db/mongoose")
const express = require("express")
const apiServer = express()

apiServer.listen(3000, () => {
    console.log('api server is running on port 3000')
})