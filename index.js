const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Running my node crud server");
})

// use middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('listening port:', port);
})