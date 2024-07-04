var usermodel = require('../model/user-model');
var storage = require('node-persist');
storage.init( );
var bcrypt = require('bcrypt');

/* USER_REGISTER */
exports.user_register = async(req,res) =>{
    var salt = bcrypt.genSaltSync(10);
    var b_pass = await bcrypt.hash(req.body.password, salt);
    req.body.password = b_pass;
    var data = await usermodel.create(req.body);
    res.status(200).json({
        status:"Register success!",
        data
    });
}

/* USER_LOGIN */
exports.user_login = async(req,res) =>{
    var data = await usermodel.find({'email' : req.body.email});
    if(data.length == 1){
        if(data.length == 1){

            bcrypt.compare(req.body.password , data[0].password , function(error,result){
                if(result == true){
                    res.status(200).json({
                        status:"login",
                        data
                    });
                }
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
            status:"please chek your email and password!",
        });
    }
}

/* USER_DELETE */
exports.delete = async(req,res) =>{
    var data= await usermodel.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"user Delete!"
    });
    
}
/*USER_UPADTE */
exports.update = async(req,res) =>{
    var data = await usermodel.findByIdAndUpdate(req.params.id,req.body,{new:true});  
    res.status(200).json({
        status:"user Update!"
    });
    
}