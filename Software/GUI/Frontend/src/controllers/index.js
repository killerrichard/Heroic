import Dashboard from './pages/home/dashboard'
import iWelcome from './pages/install/welcome'
import iGeneral from './pages/install/general'
import iDatabase from './pages/install/database'
import iFinished from './pages/install/finished'
import iAdministrator from './pages/install/administrator'
let app = angular.module('heroic.controllers', [])

// Home
app.controller('Dashboard', Dashboard)

// Install
app.controller('iWelcome', iWelcome)
app.controller('iDatabase', iDatabase)
app.controller('iGeneral', iGeneral)
app.controller('iAdministrator', iAdministrator)
app.controller('iFinished', iFinished)

export default app 
