const express = require("express");
const router = express.Router();
const Item = require("./../models/Item.js");
const requireAuth = require("./../middlewares/requireAuth");

//Population is the process of automatically
//replacing the specified paths in the document with document(s) from other collection(s).

router.get("/", (req, res, next) => {
  Item.find()
    .populate("creator", "-password")
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

router.get("/:id", (req, res, next) => {
  Item.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

//Requires auth. aka middleware or not

router.post("/", requireAuth, (req, res, next) => {
  const {
    name,
    description,
    image,
    category,
    quantity,
    address,
    location,
    coordinates,
    formattedAddress,
    creator,
    contact,
  } = req.body;
  
  const newItem = {
    name,
    description,
    image,
    category,
    quantity,
    address,
    location,
    coordinates,
    formattedAddress,
    creator: req.session.currentUser,
    contact,
  };
console.log(req.session.currentUser)
  Item.create(newItem)
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json(error));
});

router.patch("/:id", requireAuth,  (req, res, next) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

router.delete("/:id", requireAuth, (req, res, next) => {
  Item.findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
