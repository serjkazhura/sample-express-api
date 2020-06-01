const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get('/echo', (req, res) => {
    const message = req.query['message']
    console.log(req.query['message'])
    res.status(200).send({ message: `Your Message is: ${message}`});
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
