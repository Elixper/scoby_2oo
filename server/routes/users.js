const express = require("express");
const router = express.Router();
const User = require("./../models/User");

//middlewaaaaare

//PATCH	/api/users/me	----- Updates the current user -----	Requires auth
//GET	/api/users/me		----- Gets information of the current user	----- 	Requires auth
//GET	/api/users/me/items	----- 	Gets the items of the current user	----- 	Requires auth

router.patch("/:id", (req, res, next) => {

  
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((result) => res.status(200).json(result))
      .catch((error) => res.status(500).json(error));
  });



module.exports = router;