var adminmodel = require('../model/admin-model');
var blog = require('../model/blog-model');
var storage = require('node-persist');
storage.init( );
var bcrypt = require('bcrypt');

/* ADMIN LOGIN */
exports.admin_login = async(req,res) =>{
    var data = await adminmodel.find({'email' : req.body.email});
    var admin_id = await storage.getItem("admin_id")
    if(data.length == 1){
        if(req.body.password == data[0].password){
            await storage.setItem("admin_id",data[0].id)
            res.status(200).json({
                status:"Login!"
            })
        }
        else{
            res.status(200).json({
                status:"Please check your email and passowrd!"
            })
        }
    }
    else{
        res.status(200).json({
            status:"Please check your email and passowrd!"
        })
    }
}
/*  BLOG VIEW*/
exports.view = async (req,res) =>{
    var data = await blog.find();
    res.status(200).json({
        status:"Blog view",
        data
    });
}
/*  BLOG VIEW USER WISE*/
exports.blog_view = async (req,res) =>{
    var data = await blog.find().populate("user_id");
    res.status(200).json({
        status:"Blog view",
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