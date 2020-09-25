//etablissement de la connection a la base de données
const mongoose = require("mongoose");

const url = "mongodb+srv://hans:demain@cluster0.lc9al.mongodb.net/wildCodeSchool?retryWrites=true&w=majority";
const options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
} ;

let connect = mongoose.connect(url,options)
.then(()=>console.log("success"))
.catch((err)=>console.log(err))

module.exports = connect ;