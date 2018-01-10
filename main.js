import HabboAPI from './habboapi/habboapi';
import config from './config.json';

global.__base   = __dirname;
global.__config = config;

new HabboAPI;