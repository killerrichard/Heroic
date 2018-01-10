import bcrypt from 'bcryptjs';
import HotelValidators from './validators';
import HotelUserDB from '../database/models/hotel/user/user';
import HotelUserCurrencyDB from '../database/models/hotel/user/user_currency';
import HotelUserSettingsDB from '../database/models/hotel/user/user_settings';

export default class HotelUser
{
    static loadUserInfo(id = 0, username = null)
    {
        return new Promise((resolve, reject) =>
        {
            if(id == 0 || null && username == null) return reject(new Error('invalid_parameters'));

            return new HotelUserDB().query((qb) => {
                if(id == 0 || null && username != null) qb.where('username', username);
                else if(id != 0 || null && username == null) qb.where('id', id);
                else return reject(new Error('invalid_parameters'));
            }).fetch({
                withRelated: [
                    'currency',
                    {'settings': (qb) => {
                        qb.column('id', 'user_id', 'block_following', 'block_friendrequests', 'block_roominvites', 'old_chat', 'ignore_bots', 'ignore_pets');
                    }}
                ],
                columns: ['id', 'username', 'mail', 'account_created', 'last_online', 'motto', 'look', 'rank', 'credits', 'online']
            })

            .then((result) =>
            {
                if(result == null) return reject(new Error('invalid_user'));

                result = result.toJSON();

                if(result.currency.length > 0)
                {
                    result.duckets   = (result.currency[0].amount == undefined || null) ? 0 : result.currency[0].amount;
                    result.diamonds  = (result.currency[1].amount == undefined || null) ? 0 : result.currency[1].amount;
                }
                else
                {
                    result.duckets   = 0;
                    result.diamonds  = 0;
                }

                delete result.currency;

                return resolve(result);
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }

    static addUser(username = null, email = null, password = null, ip = null)
    {
        return new Promise((resolve, reject) =>
        {
            if(username == null || email == null || password == null || ip == null) return reject(new Error('invalid_paramemters'));

            return HotelValidators.validateUsername(username)

            .then(() =>
            {
                return HotelValidators.validateEmail(email);
            })

            .then(() =>
            {
                return new HotelUserDB().where('ip_register', ip).count();
            })

            .then((count) =>
            {
                if(count >= __config.userSettings.userNew.maxAccountsPerIp) return reject(new Error('max_accounts'));

                return new HotelUserDB({
                    id: null,
                    username: username,
                    real_name: '',
                    password: bcrypt.hashSync(password, __config.passwordSalt),
                    mail: email,
                    mail_verified: '0',
                    account_created: Math.floor(Date.now() / 1000),
                    account_day_of_birth: '0',
                    last_login: Math.floor(Date.now() / 1000),
                    last_online: Math.floor(Date.now() / 1000),
                    motto: __config.userSettings.userNew.motto,
                    look: __config.userSettings.userNew.figure,
                    gender: __config.userSettings.userNew.gender,
                    rank: __config.userSettings.userNew.rank,
                    credits: __config.userSettings.userNew.credits,
                    pixels: __config.userSettings.userNew.duckets,
                    points: __config.userSettings.userNew.diamonds,
                    online: '0',
                    auth_ticket: '',
                    ip_register: ip,
                    ip_current: ip,
                    machine_id: '',
                    home_room: __config.userSettings.userNew.homeRoom}).save(null, {method: 'insert'});
            })

            .then((result) =>
            {
                if(result == null) return reject(new Error('invalid_user'));

                return new HotelUserSettingsDB({
                    id: null,
                    user_id: result.toJSON().id
                }).save(null, {method: 'insert'});
            })

            .then((result) =>
            {
                if(result == null) return reject(new Error('invalid_user_settings'));

                return new HotelUserCurrencyDB({
                    user_id: result.toJSON().user_id,
                    type: '0',
                    amount: __config.userSettings.userNew.duckets
                }).save(null, {method: 'insert'});
            })

            .then((result) =>
            {
                if(result == null) return reject(new Error('invalid_user_currency'));

                return new HotelUserCurrencyDB({
                    user_id: result.toJSON().user_id,
                    type: '5',
                    amount: __config.userSettings.userNew.diamonds
                }).save(null, {method: 'insert'});
            })

            .then((result) =>
            {
                if(result == null) return reject(new Error('invalid_user_currency'));

                return resolve(null);
            })

            .catch((err) =>
            {
                return reject(err);
            });
        });
    }
}
