const express = require('express');
const app = express();
const port = process.env.PORT;
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE)
    .then(() => console.log('Mongoose Connect'))
    .catch(err => console.error(err));

app.use(express.json());

app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message })
})

// app.listen(port, () => {
//     console.log('listening on port ' + port);
// })

module.exports = app;