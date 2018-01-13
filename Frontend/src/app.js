import Constants from './config/constants.json'
import Config from './config/config'
import Run from './config/run'

import './components'
import './controllers'
import './directives'
import './filters'
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
    'habboapi.components',
    'habboapi.controllers',
    'habboapi.directives',
    'habboapi.filters',
    'habboapi.services'
]

window.app = angular.module('habboapi', requires)

angular.module('habboapi').constant('AppConstants', Constants)
angular.module('habboapi').config(Config)
angular.module('habboapi').run(Run)

angular.bootstrap(document, ['habboapi'], { strictDi: true })
