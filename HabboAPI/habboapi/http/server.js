import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';
import glob from 'glob';
import ejs from 'ejs';
import ApiPassport from './api-passport';
import HttpRouter from './router';
import HttpMiddleware from './middleware';

export default class HttpServer
{
    constructor()
    {
        const app   = express();

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(session(__config.session));

        app.engine('html', ejs.renderFile);
        app.set('view engine', 'html');

        ApiPassport(passport);
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(express.static(__base + '/dist'));
        app.use('/assets', express.static(__base + '/assets'));
        app.use('/api', new HttpRouter);

        app.get('/*', (req, res, next) =>
        {
          return res.sendFile(__base + '/src/views/index.html');
        });

        return app;
    }
}
