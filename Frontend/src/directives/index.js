import Client from './game/client'

let app = angular.module('heroic.directives', [])

app.directive('habboClient', new Client)

export default app
