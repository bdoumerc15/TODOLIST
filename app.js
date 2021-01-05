//jshint esversion:6

import express from 'express'
import bodyParser from 'body-parser'
import { day } from "./public/index.js";

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('list', { ejsDay: day });
})

app.listen(3000, () => console.log('Server listening on Port 3000'));