import { Router } from 'express';
import HotelValidators from '../../hotel/validators';

export default class HttpHotelValidators
{
    constructor()
    {
        this.router = Router();

        this.router.post('/validateUsername', this.validateUsername)
        this.router.post('/validateEmail', this.validateEmail);

        return this.router;
    }

    validateUsername(req, res, next)
    {
        if(req.body.username == undefined || req.body.username == '' || null) return res.status(400).send({errors: true, error: 'invalid_parameters'}).end();

        return HotelValidators.validateUsername(req.body.username)

        .then(() =>
        {
            return res.status(200).send({errors: false, error: null}).end();
        })

        .catch((err) =>
        {
          console.log(err)
            return res.status(400).send({errors: true, error: err.message}).end();
        });
    }

    validateEmail(req, res, next)
    {
        if(req.body.email == undefined || req.body.email == '' || null) return res.status(400).send({errors: true, error: 'invalid_parameters'}).end();

        return HotelValidators.validateEmail(req.body.email)

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
