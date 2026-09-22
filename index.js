const express = require('express');
const app = express();

app.use(express.json())

app.use('/api/users',
    require('./routes/users.routes'));

app.listen(1234, () => {
console.log("the server is running on http://localhost:1234")

});

