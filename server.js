const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE)
    .then(() => console.log('Mongoose Connect'))
    .catch((error) => console.error(error));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log('listening on port ' + port);
})