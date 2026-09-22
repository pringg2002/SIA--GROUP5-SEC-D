const express = require('express');
const app = express();

const router = express.Router()

const products =[
{
    id: 1,
    name: 'Laptop',
    category: 'tech',
    price: 25000
},
{
    id: 1,
    name: 'Laptop',
    category: 'tech',
    price: 25000
},
{
    id: 1,
    name: 'Laptop',
    category: 'tech',
    price: 25000
},
{
    id: 1,
    name: 'Laptop',
    category: 'tech',
    price: 25000
}
]

router.get('/', (req, res)=> {
    res.json(products)
})

module.exports = router