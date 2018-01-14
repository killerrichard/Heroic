import Constants from './config/constants.json'
import Config from './config/config'
import Run from './config/run'

import './components'
import './controllers'
import './directives'
import './services'

import './config/template-cache'

const requires = [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    'ngSanitize',
    'ui.router',
    'ngStorage',
    'app.templates',
    'heroic.components',
    'heroic.controllers',
    'heroic.directives',
    'heroic.services'
]

window.app = angular.module('heroic', requires)

angular.module('heroic').constant('Configuration', Constants)
angular.module('heroic').config(Config)
angular.module('heroic').run(Run)

angular.bootstrap(document, ['heroic'], { strictDi: true })
