const hotels = require('./Routes/stocks');
const express = require('express');
const app = express();


app.use(express.json()); 
app.use('/stocks', hotels);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));