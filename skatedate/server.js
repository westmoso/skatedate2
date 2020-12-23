const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const port = 1975;


app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home")
});

app.listen(port, () => {
    console.log(`Server started on port:${port}`);
});