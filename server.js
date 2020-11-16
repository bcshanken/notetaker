// Dependencies
const path = require("path");
const http= require("http");
const fs= require("fs");
const express = require("express");
const app = express();
var PORT = process.env.PORT || 8080;

const notes = [{
    title: "first task",
    text: "finish homework"
}]


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});