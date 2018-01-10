import ApiSessionDB from '../database/models/api/session';

export default class Session
{
    static createSession(id = 0, username = null, ip = null, userAgent = null)
    {
        return new Promise((resolve, reject) =>
        {
            if(id == 0 || null || username == null || ip == null || userAgent == null) return reject(new Error('invalid_user'));

            return this.destroySession(id)

            .then(() =>
            {
                return new ApiSessionDB({
                    id: null,
                    user_id: id,
                    user_name: username,
                    user_session: Math.random().toString(36).substring(7),
                    user_ip: ip,
                    user_agent: userAgent,
                    session_type: 'site'}).save(null, {method: 'insert'});
            })

            .then((session) =>
            {
                if(session == null) return reject(new Error('invalid_session'));

                return resolve(session.toJSON());
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }

    static validateSession(id = 0, username = null, session = null, ip = null, userAgent = null)
    {
        return new Promise((resolve, reject) =>
        {
            if(id == 0 || null || username == null || session == null || ip == null || userAgent == null) return reject(new Error('invalid_session'));

            return new ApiSessionDB({user_id: id, session_type: 'site'}).fetch({
                columns: ['user_id', 'user_name', 'user_session', 'user_ip', 'user_agent', 'session_type']
            })
            
            .then((result) =>
            {
                if(result == null) return reject(new Error('invalid_session'));
                
                result = result.toJSON();
                
                if(result.user_id != id || result.user_name != username || result.user_session != session || result.user_ip != ip || result.user_agent != userAgent) return this.destroySession(id)
                
                .then(() =>
                {
                    return reject(new Error('invalid_session'));
                });

                return resolve(result);
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }

    static destroySession(id = 0)
    {
        return new Promise((resolve, reject) =>
        {
            if(id == 0 || null) return resolve(null);
            
            return new ApiSessionDB().where({user_id: id, session_type: 'site'}).fetchAll()

            .then((result) =>
            {
                if(result == null) return resolve(null);

                result.forEach((session) =>
                {
                    session.destroy();
                });

                return resolve(null);
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }
}