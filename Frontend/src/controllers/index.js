import Login from './session/guest/login'
import Register from './session/guest/register'
import About from './session/user/home/about'
import Profile from './session/user/home/profile'
import Staff from './session/user/community/staff'
import Photos from './session/user/community/photos'
import Online from './session/user/community/online'
let app = angular.module('habboapi.controllers', [])

// Guest
app.controller('Login', Login)
app.controller('Register', Register)
// User Home
app.controller('About', About)
app.controller('Profile', Profile)
// User Community
app.controller('Staff', Staff)
app.controller('Photos', Photos)
app.controller('Online', Online)

export default app
