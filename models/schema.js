const mongoose = require("mongoose");//importation du module

let marinSchema = mongoose.Schema({
    name : String
})

const marin = mongoose.model("marin",marinSchema);
module.exports = marin ;