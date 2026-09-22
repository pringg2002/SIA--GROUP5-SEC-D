const express = require('express');
const app = express();

app.use(express.json());

const router = express.Router

const suppliers = [
   {
      ID: 12345,
      Category: "Mobile Phones and Laptops",
      Name: "Ace Logics",
   },
    {
      ID: 12346,
      Category: "School Supplies",
      Name: "National Bookstore",
   },
      {
      ID: 12347,
      Category: "Groceries",
      Name: "Pure Gold",
   },

]

app.listen(1234, () => {
	console.log('Server is running on http://localhost:1234')
})