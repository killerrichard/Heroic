import http from 'http';
import jsonfile from 'jsonfile';
import HttpServer from './http/server';

export default class HabboAPI
{
    constructor()
    {
        let app     = new HttpServer(),
            web     = http.Server(app);

        let config = __config.webSettings;
        
        jsonfile.writeFile(__base + '/src/config/constants.json', config, (err) =>
        {
            if(err)
            {
                console.error('There was an error writing the configuration file');
                process.exitCode = 1;
            }
        });

        web.listen(__config.port, __config.ip, () =>
        {
            console.log('[HABBOAPI] HTTP Server Started ' + __config.ip + ':' + __config.port);
        });
    }
}