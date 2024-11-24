const port = 3000;
const express = require('express');
const app = express();
const mainRoute = require("./routes/index.js")

app.set("view engine", "ejs");
app.use("/", mainRoute);
app.listen(port, () => {
    console.log(`port running is http://localhost:${port}`);
});