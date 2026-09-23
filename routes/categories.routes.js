const express = require("express")

const router = express.Router()

const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "School Supplies" },
  { id: 3, name: "Accessories" },
  { id: 4, name: "Electronics" }
]

router.get("/", (req, res) => {
  res.json(categories)
})

router.get("/filter", (req, res) => {
  const name = req.query.name
  const result = categories.filter(category => category.name === name)

  res.json(result)
})

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const category = categories.find(category => category.id === id)

  if (!category) {
    return res.status(404).json({ error: "Category not found" })
  }

  res.json(category)
})

router.post("/", (req, res) => {
  const newCategory = {
    id: categories.length + 1,
    name: req.body.name
  }

  categories.push(newCategory)

  res.status(201).json(newCategory)
})

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = categories.findIndex(category => category.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Category not found" })
  }

  categories.splice(index, 1)

  res.status(204).send()
})

module.exports = router