const express = require('express')

const app = express()

app.use('/', require('./routes/users.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/suppliers', require('./routes/suppliers.routes'))
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/admins', require('./routes/admins.routes'))
app.use('/api/orders', require('./routes/orders.routes'))
app.use('/api/notifications', require('./routes/notifications.routes')) 

app.listen(1234, () => {
	console.log('Server is running on http://localhost:1234')
})