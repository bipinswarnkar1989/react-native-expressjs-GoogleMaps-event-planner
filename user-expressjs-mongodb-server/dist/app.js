import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

import userRoutes from './routes/user.server.route';
import eventRoutes from './routes/event.server.route';

const app = express();

dotenv.load({ path: '.env' });

// allow cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requestes, Content-Type, Accept, Authorization');
    next();
});

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3001);

let mongoDbUri;
if (process.env.NODE_ENV === 'dev') {
    mongoDbUri = process.env.MONGODB_DEV_URI;
} else {
    mongoDbUri = process.env.MONGODB_URI;
}

mongoose.Promise = global.Promise;
const mongodb = mongoose.connect(mongoDbUri);
mongodb.then(() => {
    userRoutes(app);
    eventRoutes(app);
    app.get('/', (req, res) => {
        return res.end('Api working');
    });

    // catch 404
    app.use((req, res, next) => {
        res.status(404).send('<h2 align=center>Page Not Found!</h2>');
    });

    app.listen(app.get('port'), () => {
        console.log(`EventPlanner server Listening on ${app.get('port')}`);
    });
}).catch(err => console.log(err));

export { app };