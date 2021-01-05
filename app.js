//jshint esversion:6

import express from 'express'
import bodyParser from 'body-parser'

const date = new Date();
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    // const cwd = process.cwd();
    // const file = 'index.html';
    // const pathFile = `${cwd}\\${file}`;
    // res.sendFile(pathFile);
    // const cwd = process.cwd();
    const weekdays = [
        { name: 'domingo', number: 0, weekend: true, workDay: false },
        { name: 'lunes', number: 1, weekend: false, workDay: true },
        { name: 'martes', number: 2, weekend: false, workDay: true },
        { name: 'miércoles', number: 3, weekend: false, workDay: true },
        { name: 'jueves', number: 4, weekend: false, workDay: true },
        { name: 'viernes', number: 5, weekend: false, workDay: true },
        { name: 'sábado', number: 6, weekend: true, workDay: false },
    ];
    const weekday = date.getDay();
    const day = weekdays[weekday].name;
    res.render('list', { ejsDay: day });
})

app.listen(3000, () => console.log('Server listening on Port 3000'));