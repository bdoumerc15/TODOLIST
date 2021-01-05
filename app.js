//jshint esversion:6

import express from 'express'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const cwd = process.cwd();
    const file = 'index.html';
    const pathFile = `${cwd}\\${file}`;
    res.sendFile(pathFile);
})

app.listen(3000, () => console.log('Server listening on Port 3000'));