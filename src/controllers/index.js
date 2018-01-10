import LoginController from './login.controller';
import RegisterController from './register.controller';
import MeController from './home/me.controller';
import AboutController from './home/about.controller';

let app= angular.module('habboapi.controllers', []);

app.controller('LoginController', LoginController); 
app.controller('RegisterController', RegisterController);
app.controller('MeController', MeController);
app.controller('AboutController', AboutController);

export default app;
