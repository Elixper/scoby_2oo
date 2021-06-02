const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require("./../config/dbConnection") pas besoin ici, déjà dans app,
// besoin dans les seed pq pas vraiment lié à app 

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  profileImg: {
    type: String,
    default:
      "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
  },
  email: String,
  password: String,
  phoneNumber: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
