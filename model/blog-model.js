var  mongoose = require('mongoose');

var blogschema = mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_list'
    },
    status: {
        type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    like:{
        type:String
    }
});

module.exports = mongoose.model('blog_list',blogschema);