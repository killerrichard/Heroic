import { Router } from 'express';
import Session from '../../authentication/session';

export default class HttpSession
{
    constructor()
    {
        this.router = Router();

        this.router.get('/getSession', this.getSession);
        this.router.get('/destroySession', this.destroySession);

        return this.router;
    }

    getSession(req, res, next)
    {
        return res.status(200).send({errors: false, error: null, session: req.user}).end();
    }

    destroySession(req, res, next)
    {
        return Session.destroySession(req.user.user_id)

        .then(() =>
        {
            req.logout();
            return res.status(200).send({errors: false, error: null, session: null}).end();
        })

        .catch((err) =>
        {
            return res.status(401).send({errors: true, error: 'invalid_session', session: req.user}).end();
        });
    }
}