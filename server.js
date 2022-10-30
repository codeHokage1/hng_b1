const express = require('express');
const cors = require('cors')
require('dotenv').config();
const PORT  = process.env.PORT || 3000;


const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.json({
        "slackUsername": "Farhan1",
        "backend": true,
        "age": 22,
        "bio": "I write JS: React and Node. When I am not learning to code, I am playing basketball or teaching."
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ...`);
})