//jshint esversion:6

import express from 'express'
import bodyParser from 'body-parser'
import { day } from "./public/index.js";

const app = express();
const items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('list', { ejsDay: day, ejsNewItems: items });
})

app.post('/', (req, res) => {
    const newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
})

app.listen(3000, () => console.log('Server listening on Port 3000'));