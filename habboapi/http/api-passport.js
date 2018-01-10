import LocalAuthentication from './authentication/local';
import HotelUser from '../hotel/user';
import Session from '../authentication/session';

module.exports = (passport) =>
{
    passport.serializeUser((user, done) =>
    {
        return done(null, user);
    });

    passport.deserializeUser((user, done) =>
    {
        return HotelUser.loadUserInfo(user.user_id, null)

        .then((userInfo) =>
        {
            user.user_info = userInfo;

            return done(null, user);
        })

        .catch((err) =>
        {
            return done(err, false);
        });
    });

    passport.use('local-login', LocalAuthentication.loginLocal);
}