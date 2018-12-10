const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("How are you doing");
});

app.listen(8080, () => {
    console.log("Listing on port 8080");
});
