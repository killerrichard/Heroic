import { Router } from 'express';
import HttpAuthentication from './authentication';
import HttpHotel from './hotel';

export default class HttpRouter
{
    constructor()
    {
        this.router = Router();

        this.router.use('/authentication', new HttpAuthentication);
        this.router.use('/hotel', new HttpHotel);

        return this.router;
    }
}