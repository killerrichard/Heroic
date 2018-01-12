import { Router } from 'express';
import HttpMiddleware from '../middleware';
import passport from 'passport';
import HttpSession from './session.http';

export default class HttpAuthentication
{
    constructor()
    {
        this.router = Router();

        this.router.use('/session', HttpMiddleware.isAuthenticated, new HttpSession);
        this.router.post('/login', passport.authenticate('local-login', {failWithError: true}), this.login, this.loginError);
        this.router.get('/login/facebook', this.checkIfFacebookEnabled, passport.authenticate('facebook-login', {scope: ['public_profile', 'email']}));
        this.router.get('/login/facebook/return', this.checkIfFacebookEnabled, passport.authenticate('facebook-login', {failWithError: true}), this.loginFacebook, this.loginFacebookError);
        
        return this.router;
    }

    login(req, res, next)
    {
        return res.status(200).send({errors: false, error: null, session: req.user}).end();
    }

    loginError(err, req, res, next)
    {
        return res.status(401).send({errors: true, error: err.message}).end();
    }

    checkIfFacebookEnabled(req, res, next)
    {
        if(__config.webSettings.facebookSettings.facebookEnabled == true) return next();

        return res.render(__base + '/src/views/facebook.html', {siteLink: __config.webSettings.siteLink, message: 'facebook_disabled'});
    }

    loginFacebook(req, res, next)
    {
        return res.render(__base + '/src/views/facebook.html', {siteLink: __config.webSettings.siteLink, message: 'check_session'});
    }

    loginFacebookError(err, req, res, next)
    {
        return res.render(__base + '/src/views/facebook.html', {siteLink: __config.webSettings.siteLink, message: err.message});
    }
}