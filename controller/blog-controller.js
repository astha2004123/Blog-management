var blog = require('../model/blog-model');
var storage = require('node-persist');
storage.init( );

/*  BLOG ADD */
exports.blog_add = async (req,res) =>{
    var user_id = await storage.getItem("user_id");
    req.body.user_id = user_id

    var data = await blog.create(req.body);
    res.status(200).json({
        status:"Blog add",
        data
    });
}
/*  BLOG VIEW */
exports.blog_view = async (req,res) =>{
    var user_id = await storage.getItem("user_id");

    var data = await blog.find({"user_id":user_id}).populate("user_id");
    res.status(200).json({
        status:"Blog view",
        data
    });
}
/*  BLOG LIKE */
exports.blog_like = async (req,res) =>{
    var data = await blog.findById(req.params.id);
    res.status(200).json({
        status:"Blog like",
        data
    });
}
/*  BLOG MANAGE UPDATE */
exports.blog_update = async (req,res) =>{
    var data = await blog.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"Blog update"
    });
}
/*  BLOG MANAGE DELETE */
exports.blog_delete = async (req,res) =>{
    var data = await blog.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"Blog delete"
    });
}
/*VIEW STATUS WISE BLOG */
exports.status_view = async (req,res) =>{
    var status = req.params.status;
    var data = await blog.find({status});
    res.status(200).json({
        status:"view status wise blog",
        data
    });
}