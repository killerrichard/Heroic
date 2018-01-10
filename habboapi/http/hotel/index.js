import { Router } from 'express';
import HttpHotelUser from './user.http';
import HttpHotelValidators from './validators.http';

export default class HttpHotel
{
    constructor()
    {
        this.router = Router();

        this.router.use('/user', new HttpHotelUser);
        this.router.use('/validators', new HttpHotelValidators);

        return this.router;
    }
}