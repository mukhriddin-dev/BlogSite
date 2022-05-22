const express = require('express');
const path = require('path');
const expressEdge = require('express-edge');

const app = express();

//static folder
app.use(express.static('public'));


//dvijok registered
app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/about.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/contact.html"))
})


app.get("/post", (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/post.html"))
})



app.listen(5000, () => {
    console.log('listening on port 5000')
});