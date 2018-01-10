import Session from '../authentication/session';
import HotelValidators from '../hotel/validators';

export default class HttpMiddleware
{
    static isAuthenticated(req, res, next)
    {
        if(req.user == undefined || null) return res.status(400).send({errors: true, error: 'invalid_session'}).end();

        return Session.validateSession(req.user.user_id, req.user.user_name, req.user.user_session, req.ip, req.headers['user-agent'])

        .then((userSession) =>
        {
            return next();
        })

        .catch((err) =>
        {
            if(req.isAuthenticated() == true) req.logout();

            return res.status(401).send({errors: true, error: err.message, session: null}).end();
        });
    }
}