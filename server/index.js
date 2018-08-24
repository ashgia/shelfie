const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const controller = require("./controller");
const port = 3001;

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.getData);
app.post("/api/product", controller.postProduct);
app.put("/api/product/:id", controller.editProduct);
app.delete("/api/product/:id", controller.deleteProduct);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
