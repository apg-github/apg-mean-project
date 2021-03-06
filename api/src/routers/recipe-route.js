const express = require("express")
const Recipe = require("../models/recipe")

const router = new express.Router()

router.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find({}) // get all
        res.status(200).send(recipes)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/recipes', async (req, res) => {
    const recipe = new Recipe(req.body)
    try {
        await recipe.save()
        res.status(201).send(recipe)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router