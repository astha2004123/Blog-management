var mongoose = require('mongoose');

var catagaoryschema = mongoose.Schema({
    cat_name:{
        type:String
    },
    cat_img:{
        type:String
    },
    user_id:{
        type:String
    }
});

module.exports = mongoose.model('cat_list',catagaoryschema);