const express = require("express")

const router = express.Router()

const products = [
  { id: 1, name: "Laptop", category: "tech", price: 25000 },
  { id: 2, name: "Mouse", category: "tech", price: 500 },
  { id: 3, name: "Keyboard", category: "tech", price: 1200 },
  { id: 4, name: "Notebook", category: "school", price: 100 }
]

router.get("/", (req, res) => {
  res.json(products)
})

router.get("/filter", (req, res) => {
  const category = req.query.category
  const result = products.filter(product => product.category === category)

  res.json(result)
})

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(product => product.id === id)

  if (!product) {
    return res.status(404).json({ error: "Product not found" })
  }

  res.json(product)
})


router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price
  }

  products.push(newProduct)

  res.status(201).json(newProduct)
})

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = products.findIndex(product => product.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" })
  }

  products.splice(index, 1)

  res.status(204).send()
})

module.exports = router