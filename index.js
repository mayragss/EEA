
require("express-async-errors");
const compression = require('compression');
const express = require('express'),
app = express();
const port = process.env.PORT || 3000,
        bodyParser = require('body-parser'),
        path = require('path'),
        methodOverride = require('method-override');

        const indexRoutes = require('./routes/index');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname+ '/views')));
app.use('/views', express.static(path.resolve(__dirname, 'views/partials')));

app.use(compression())
app.use(express.static(path.resolve(__dirname+ '/public'), { maxAge: 86400000 /* 1d */ }));
app.use(methodOverride("_method"));
 

app.use("/", indexRoutes); 

app.use((error, req, res, next) => {
    // render error page
    console.log(error)
    res.sendStatus(500);
})
app.listen(port, ()=>{
    console.log("EEA server at "+port)
})