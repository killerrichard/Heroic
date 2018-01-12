import {Strategy} from 'passport-local';
import AuthenticationLocal from '../../authentication/local';

exports.loginLocal = new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},

(req, username, password, done) =>
{
    return AuthenticationLocal.login(username, password, req.ip, req.headers['user-agent'])
    
    .then((session) =>
    {
        if(session == null) return done(null, false);

        return done(null, {
            login_status: true,
            user_id: session.user_id,
            user_name: session.user_name,
            user_session: session.user_session
        });
    })

    .catch((err) =>
    {
        return done(err, false);
    });
});