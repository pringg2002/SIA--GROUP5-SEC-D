const express = require("express")

const router = express.Router()

const users = [
  { id: 1, name: "Elroy V. Ravadon", role: "user" },
  { id: 2, name: "Mark Johnpaul Palmis", role: "user" },
  { id: 3, name: "Crystal Duenn Palopalo", role: "user" },
  { id: 4, name: "Rattanuel Joseph Z. Ortiz", role: "user" },
  { id: 5, name: "April Mae Castillon", role: "user" },
  { id: 6, name: "Dwyane Rasheed Partosa", role: "user" }
]


router.get("/", (req, res) => {
  res.json(users)
})

router.get("/filter", (req, res) => {
  const role = req.query.role

  const filteredUsers = users.filter(user => user.role === role)

  res.json(filteredUsers)
})


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)

  const user = users.find(user => user.id === id)

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    })
  }

  res.json(user)
})


router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role
  }

  users.push(newUser)

  res.status(201).json(newUser)
})

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)

  const index = users.findIndex(user => user.id === id)

  if (index === -1) {
    return res.status(404).json({
      error: "User not found"
    })
  }

  users.splice(index, 1)

  res.status(204).send()
})

module.exports = router