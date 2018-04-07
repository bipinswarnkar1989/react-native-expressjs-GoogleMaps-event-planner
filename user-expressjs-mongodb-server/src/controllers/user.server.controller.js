import User from '../models/user.server.model';
export  class userController {
    createUser = (req,res,next) => {
        console.log('createUser: '+ JSON.stringify(req.body));
       if (req.body) {
           let newUser = new User(req.body);
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
                       return  res.json({
                           success:true,
                           message:'User Created Successfully',
                           result
                       });
                   }
               }
           })
       }
    } 
}
