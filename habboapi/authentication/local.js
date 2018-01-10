import bcrypt from 'bcryptjs';
import HotelUserDB from '../database/models/hotel/user/user';
import HotelUser from '../hotel/user';
import Session from './session';

export default class AuthenticationLocal
{
    static login(username = null, password = null, ip = null, userAgent = null)
    {
        return new Promise((resolve, reject) =>
        {
            let user    = null;

            if(username == null || password == null || ip == null || userAgent == null) return reject(new Error('invalid_paramemters'));

            return new HotelUserDB({username: username}).fetch({
                columns: ['id', 'username', 'password']
            })

            .then((result) =>
            {
                if(result == null) return reject(new Error('invalid_login'));

                user = result.toJSON();

                if(bcrypt.compareSync(password, user.password) == false) return reject(new Error('invalid_login'));

                return Session.createSession(user.id, user.username, ip, userAgent);
            })

            .then((session) =>
            {
                return resolve(session);
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }
}
