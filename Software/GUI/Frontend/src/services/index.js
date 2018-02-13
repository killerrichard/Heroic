import Page from './managers/page'
import Promise from './http-promise'
import Install from './managers/install'
let app = angular.module('heroic.services', [])

app.service('PageManager', Page)
app.service('Promise', Promise)
app.service('InstallManager', Install)

export default app
