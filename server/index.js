const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
// const controller = require()
const port = 3001;

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
