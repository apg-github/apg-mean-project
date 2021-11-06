const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,

}, {
    timestamps: true,
})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe