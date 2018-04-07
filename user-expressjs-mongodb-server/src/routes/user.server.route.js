import express from 'express';

import { userController } from '../controllers/user.server.controller';

const userRoutes = (app) => {
    const router = express.Router();
    const userCtrl = new userController();
    router.route('/')
          .post(userCtrl.createUser);
    app.use('/user', router);
    
}

export default userRoutes;