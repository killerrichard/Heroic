import Settings from './data/settings'
import Utility from './other/utility'
import Authentication from './user/authentication'
import Session from './user/session'
import User from './user/user'
import Validator from './other/validator'

let app = angular.module('habboapi.services', [])

app.service('SettingsService', Settings)
app.service('UtilityService', Utility)
app.service('AuthenticationService', Authentication)
app.service('SessionService', Session)
app.service('UserService', User)
app.service('ValidatorService', Validator)

export default app
