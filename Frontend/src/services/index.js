import JWT from './user/jwt'
import Socket from './other/socket'
import Settings from './data/settings'
import Authentication from './user/authentication'
import Session from './user/session'
import User from './user/user'
import Validator from './other/validator'

let app = angular.module('heroic.services', [])

app.service('JWTService', JWT)
app.service('SocketService', Socket)
app.service('SettingsService', Settings)
app.service('AuthenticationService', Authentication)  
app.service('SessionService', Session)
app.service('UserService', User)
app.service('ValidatorService', Validator)
export default app
