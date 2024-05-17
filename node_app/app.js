import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('I am learning new things');
})

app.listen(3000);