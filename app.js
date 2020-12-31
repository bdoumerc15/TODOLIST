import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})

app.listen(3000, () => console.log('Server listening on Port 3000'));