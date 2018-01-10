import HotelUserDB from '../database/models/hotel/user/user';

export default class HotelValidators
{
    static validateUsername(username)
    {
        return new Promise((resolve, reject) =>
        {
            let regex = new RegExp(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{1,20}$/g);
            
            if(username == null || regex.test(username) == false) return reject(new Error('invalid_paramemters'));

            __config.userSettings.userProhibitedUsernames.forEach((name) =>
            {
                if(username.indexOf(name) != -1) return reject(new Error('username_unavailable'));
            });

            return new HotelUserDB({username: username}).fetch()

            .then((result) =>
            {
                if(result == null) return resolve(null);

                return reject(new Error('username_unavailable'));
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }

    static validateEmail(email)
    {
        return new Promise((resolve, reject) =>
        {
            let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);
            
            if(email == '' || null) return reject(new Error('invalid_paramemters'));
            
            if(regex.test(email) == false) return reject(new Error('invalid_email'));

            return new HotelUserDB({mail: email}).fetch()

            .then((result) =>
            {
                if(result == null) return resolve(null);

                return reject(new Error('email_unavailable'));
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }
}