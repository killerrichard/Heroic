import Config from './config/config'
import Run from './config/run'

import './components'
import './controllers'
import './services'

import './config/template-cache'

const requires = [
    'ngAria',
    'ngStorage',
    'ui.router',
    'app.templates',
    'heroic.components',
    'heroic.controllers',
    'heroic.services'
] 

window.app = angular.module('heroic', requires)
angular.module('heroic').config(Config)
angular.module('heroic').run(Run)

angular.bootstrap(document, ['heroic'], { strictDi: true })
