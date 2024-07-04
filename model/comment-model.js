var mongoose = require('mongoose');

var commentschema = mongoose.Schema({
    blog_id:{
        type:String
    },
    user_id:{
        type:String
    },
    comment:{
        type:String
    }
})

module.exports = mongoose.model('comment_list',commentschema)