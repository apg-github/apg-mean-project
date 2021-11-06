const mongoose = require("mongoose")

async function dbConnection() {
    try {
        await mongoose.connect("mongodb://localhost:27017/api", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to mongo db successfully")
    } catch (e) {
        console.error('Error occurred while connecting to db: ' + e)
    }
}

dbConnection()
