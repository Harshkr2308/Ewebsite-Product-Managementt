var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema=new Schema({
    name:String,
    email:String,
    password:String
});
module.exports=mongoose.model("users",userSchema);

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
//     email: {
//         type: String,
//         unique: true,
//         lowercase: true
//     },
//     password: String
// });

// module.exports =  mongoose.model('User', UserSchema)