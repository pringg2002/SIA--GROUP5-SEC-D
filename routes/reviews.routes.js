const express = require("express")

const router = express.Router()

const reviews = [
  { id: 1, userId: 1, productId: 1, rating: 5, comment: "Great product" },
  { id: 2, userId: 2, productId: 2, rating: 4, comment: "Good quality" },
  { id: 3, userId: 3, productId: 3, rating: 5, comment: "Very useful" },
  { id: 4, userId: 4, productId: 4, rating: 4, comment: "Good for school" }
]


router.get("/", (req, res) => {
  res.json(reviews)
})


router.get("/filter", (req, res) => {
  const rating = parseInt(req.query.rating)
  const result = reviews.filter(review => review.rating === rating)

  res.json(result)
})


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const review = reviews.find(review => review.id === id)

  if (!review) {
    return res.status(404).json({ error: "Review not found" })
  }

  res.json(review)
})


router.post("/", (req, res) => {
  const newReview = {
    id: reviews.length + 1,
    userId: req.body.userId,
    productId: req.body.productId,
    rating: req.body.rating,
    comment: req.body.comment
  }

  reviews.push(newReview)

  res.status(201).json(newReview)
})


router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = reviews.findIndex(review => review.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Review not found" })
  }

  reviews.splice(index, 1)

  res.status(204).send()
})

module.exports = router