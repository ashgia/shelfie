module.exports = {
  getData: (req, res, next) => {
    const db = req.app.get("db");

    db.read_products()
      .then(products => res.send(products))
      .catch(err => {
        res.status(500).send("Error");
        console.log(err);
      });
  }
};
