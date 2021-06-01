const express = require("express");
const router = express.Router();
const Item = require("./../models/Item.js");

router.get("/", (req, res, next) => {
  Item.find()
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

router.get("/:id", (req, res, next) => {
  Item.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch(next);
});

router.post("/", (req, res, next) => {
  const { name, race, image, price } = req.body;
  const newCats = {
    name,
    race,
    image,
    price,
  };
  Cats.create(newCats)
    .then((result) => res.status(201).json(result))
    .catch(next);
});



module.exports = router;
