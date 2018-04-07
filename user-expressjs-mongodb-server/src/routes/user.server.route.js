import express from 'express';

import { userController } from '../controllers/user.server.controller';

const userRoutes = (app) => {
    const router = express.Router();
    const userCtrl = new userController();
    router.route('/')
          .post(userCtrl.createUser);
    router.route('/auth')
          .post(userCtrl.authenticate);
    router.route('/validate')
          .get(userCtrl.validateJwt);
    app.use('/api/user', router);
    
}

export default userRoutes;