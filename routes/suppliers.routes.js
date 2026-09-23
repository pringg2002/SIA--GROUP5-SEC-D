const express = require("express")

const router = express.Router()

const suppliers = [
  { id: 1, name: "Tech Supplier", contact: "09123456789" },
  { id: 2, name: "School Supply Supplier", contact: "09234567890" },
  { id: 3, name: "Computer Parts Supplier", contact: "09345678901" },
  { id: 4, name: "Electronics Supplier", contact: "09456789012" }
]

// GET all
router.get("/", (req, res) => {
  res.json(suppliers)
})

// Filter
router.get("/filter", (req, res) => {
  const name = req.query.name
  const result = suppliers.filter(supplier => supplier.name === name)

  res.json(result)
})

// GET by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const supplier = suppliers.find(supplier => supplier.id === id)

  if (!supplier) {
    return res.status(404).json({ error: "Supplier not found" })
  }

  res.json(supplier)
})

// POST
router.post("/", (req, res) => {
  const newSupplier = {
    id: suppliers.length + 1,
    name: req.body.name,
    contact: req.body.contact
  }

  suppliers.push(newSupplier)

  res.status(201).json(newSupplier)
})

// DELETE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = suppliers.findIndex(supplier => supplier.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Supplier not found" })
  }

  suppliers.splice(index, 1)

  res.status(204).send()
})

module.exports = router