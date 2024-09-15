const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const PORT = 8000;
const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(expressLayouts);

app.use('/static', express.static('static'));

app.use(require('./routes'));

app.listen(PORT, ()=>{
    console.log('Searver running on port', PORT);
    console.log(`Visit: http://localhost:${PORT}`);
});