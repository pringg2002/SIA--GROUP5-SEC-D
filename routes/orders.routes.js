const express = require("express")

const router = express.Router()

const orders = [
  { id: 1, userId: 1, productId: 1, quantity: 1 },
  { id: 2, userId: 2, productId: 2, quantity: 2 },
  { id: 3, userId: 3, productId: 3, quantity: 1 },
  { id: 4, userId: 4, productId: 4, quantity: 3 }
]

router.get("/", (req, res) => {
  res.json(orders)
})

router.get("/filter", (req, res) => {
  const userId = parseInt(req.query.userId)
  const result = orders.filter(order => order.userId === userId)

  res.json(result)
})

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const order = orders.find(order => order.id === id)

  if (!order) {
    return res.status(404).json({ error: "Order not found" })
  }

  res.json(order)
})

router.post("/", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    userId: req.body.userId,
    productId: req.body.productId,
    quantity: req.body.quantity
  }

  orders.push(newOrder)

  res.status(201).json(newOrder)
})

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = orders.findIndex(order => order.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Order not found" })
  }

  orders.splice(index, 1)

  res.status(204).send()
})

module.exports = router