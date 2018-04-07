import jwt from 'jsonwebtoken';
import User from '../models/user.server.model';
export  class userController {
    createUser = (req,res,next) => {
        console.log('createUser: '+ JSON.stringify(req.body));
       if (req.body) {
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
}
