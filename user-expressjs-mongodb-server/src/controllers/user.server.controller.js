import jwt from 'jsonwebtoken';
import User from '../models/user.server.model';
export  class userController {
    createUser = (req,res,next) => {
       if (req.body) {
        console.log('createUser: '+ JSON.stringify(req.body));
           var newUser = new User();
           newUser.firstname = req.body.firstname;
           newUser.lastname = req.body.lastname;
           newUser.email = req.body.email;
           newUser.createdAt = Date.now();
           newUser.setPassword(req.body.password);
           newUser.save((err,result) => {
               if (err) {
                   console.log('Error in CreateUser :'+ JSON.stringify(err));
                   return  res.json({
                       success:false,
                       message:'Some Error',
                       err
                   });
               }else{
                   if (result) {
                       console.log('User Created: '+ JSON.stringify(result));
                       let token = this.generateJwt(result);
                       return  res.json({
                           success:true,
                           message:'User Created Successfully',
                           token
                       });
                   }
               }
           })
       }
    } 

    generateJwt = (user) => {
        let expiry = Math.floor(Date.now() / 1000) + (60 * 60);
        let secret = process.env.SECRET_TOKEN;
        const token = jwt.sign({
            user,
            exp:expiry
        }, secret, {
            algorithm:'HS384'
        });
        return token;
    }

    authenticate = (req,res,next) => {
        if (req.body.email && req.body.password) {
        console.log('authenticate: '+ JSON.stringify(req.body));
            User.findOne({ email:req.body.email })
                .exec((err,user) => {
                    if (user) {
                        let validPswrd = user.validPassword(req.body.password);
                        if (validPswrd) {
                            console.log('Login Success: '+ JSON.stringify(user));
                            let token = this.generateJwt(user);
                        return  res.json({
                            success:true,
                            message:'Successfully Logged In',
                            token
                        });
                        }else{
                            console.log('Login Failed.Invalid Password: ');
                        return  res.json({
                            success:false,
                            message:'Login Failed. Invalid Password'
                        });
                        }
                    }else{
                        console.log('Login Failed.Invalid Email: '+ req.body.email);
                        return  res.json({
                            success:false,
                            message:'Login Failed. Invalid Email'
                        });
                    }
                })
        }
    }

    validateJwt = (req,res,next) => {
        let token = req.headers['authorization'];
        if (token) {
            jwt.verify(token, process.env.SECRET_TOKEN, function(err,result) {
                if(err){
                    console.log(err);
                    return res.json({
                      success: false,
                      message: 'Please Log in using a valid email & password'
                    });
                  } else {
                    console.log('Token Validated Successfully: '+ JSON.stringify(result));
                    req.user = result.user;
                    next();
                  }
            })
        }
    }

    getUser = (req,res,next) => {
        if (req.user) {
         return res.json({
           success: true,
           message: 'Authenticated Successfully',
           user:req.user
         });
        }
     }

}
