var mongoose = require('mongoose');

var adminschema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_list"
    }
});

module.exports = mongoose.model('admin-list',adminschema);