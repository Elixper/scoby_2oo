const express = require("express");
const router = express.Router();
const User = require("./../models/User");
const Item = require("./../models/Item");

//middlewaaaaare

//PATCH	/api/users/me	----- Updates the current user -----	Requires auth
//GET	/api/users/me		----- Gets information of the current user	----- 	Requires auth
//GET	/api/users/me/items	----- 	Gets the items of the current user	----- 	Requires auth

router.patch("/me", (req, res, next) => {
  // if(req.body.password){
  //   return res.status(400).json({message: "Password"})
  // }

  // if(req.body.password){
  //   check si ancien == nouveau, si oui, salt et encrypt
  // }

  User.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});



router.get("/me", (req, res, next) => {
  User.findById(req.session.currentUser)
    .select("-password")
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


router.get("/me/items", (req, res, next) => {
  Item.find({creator :req.session.currentUser}).then((itemDoc) => {
    res.status(200).json(itemDoc);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
})

module.exports = router;
