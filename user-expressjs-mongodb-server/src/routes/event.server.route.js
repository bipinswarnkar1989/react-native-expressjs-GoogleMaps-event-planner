import express from 'express';
import eventController from '../controllers/event.server.controller';

const eventRoutes = (app) => {
   const router = express.Router();
   const eventCtrl = new eventController();
   router.route('/')
         .post(eventCtrl.createEvent);

   router.route('/:page/:limit')
         .get(eventCtrl.getEvents);

   app.use('/api/events', router);
}

export default eventRoutes;