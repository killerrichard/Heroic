import { Router } from 'express';
import HttpMiddleware from '../middleware';
import HotelUser from '../../hotel/user';

export default class HttpHotelUser
{
    constructor()
    {
        this.router = Router();

        this.router.post('/addUser', this.addUser);

        return this.router;
    }

    addUser(req, res, next)
    {
        if(req.body.username == undefined || null || req.body.email == undefined || null || req.body.password == undefined || null || req.ip == undefined || null) return res.status(400).send({errors: true, error: 'invalid_parameters'}).end();

        return HotelUser.addUser(req.body.username, req.body.email, req.body.password, req.ip)

        .then(() =>
        {
            return res.status(200).send({errors: false, error: null}).end();
        })
        
        .catch((err) =>
        {
            return res.status(400).send({errors: true, error: err.message}).end();
        });
    }
}