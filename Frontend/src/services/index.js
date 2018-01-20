import JWT from './user/jwt'
import Session from './user/session'
import Socket from './other/socket'
import Promise from './other/promise'
import Settings from './data/settings'
import Authentication from './user/authentication'
let app = angular.module('heroic.services', [])
app.service('JWTService', JWT)
app.service('SocketService', Socket)
app.service('SessionService', Session)
app.service('PromiseService', Promise)
app.service('SettingsService', Settings)
app.service('AuthenticationService', Authentication)
export default app
