export default class Client
{
    constructor($localStorage, $window, $state, $rootScope, $scope)
    {
        'ngInject'
        this.$localStorage     = $localStorage
        this.$window           = $window
        this.$state            = $state
        this.$rootScope        = $rootScope
        this.$scope            = $scope

        this.$scope.flashvarsString = ''

        this.$scope.flashVars = {
            "connection.info.host": "127.0.0.1",
            "connection.info.port": "3000",
            "external.texts.txt": "http://vanitygaming.ca/swfs/gamedata/texts.txt",
            "external.variables.txt": "http://vanitygaming.ca/swfs/gamedata/variables.txt",
            "external.figurepartlist.txt": "http://vanitygaming.ca/swfs/gamedata/figuredata.xml",
            "furnidata.load.url": "http://vanitygaming.ca/swfs/gamedata/furnidata.xml",
            "productdata.load.url": "http://vanitygaming.ca/swfs/gamedata/productdata.txt",
            "client.allow.cross.domain": 1,
            "client.notify.cross.domain": 0,
            "client.starting": "Heroic Framework 1.0",
            "flash.client.url": "http://vanitygaming.ca/swfs/other/game/", 
            "flash.client.origin": "popup",
            "sso.ticket": "xhabbo_203,152,118,240",
        }

        angular.forEach(this.$scope.flashVars, (value, key) =>
        {
            this.$scope.flashvarsString += key + '=' + value + '&amp;'
        })

        this.$scope.go_back = () =>
        {
          return this.$state.go('me.home')
        }


        this.$scope.reloadClient = () =>
        {
        }

        this.$window.HabboFlashClient = {
            started: !1,
            init: () =>
            {
                setTimeout(() =>
                {
                    this.$window.HabboFlashClient.flashInterface = document.getElementById('flash-container')
                }, 1000)
            }
        }

        this.$window.addEventListener("load", this.$window.HabboFlashClient.init())

        this.$window.FlashExternalInterface = {}

        this.$window.FlashExternalInterface.logout = () =>
        {
            // triggered on logout button in client
        }

        this.$window.FlashExternalInterface.disconnect = () =>
        {
            // triggered when client disconnects
        }

        this.$window.FlashExternalInterface.openAvatars = () =>
        {
            // trigged on settings button in client
        }

        this.$window.FlashExternalInterface.openMinimail = () =>
        {
            // havent tested
        }

        this.$window.FlashExternalInterface.openNews = () =>
        {
            // havent tested
        }

        this.$window.FlashExternalInterface.track = (action, label, value) =>
        {
            // logs client activity in console
            console.log('action = [' + action + '], label = [' + label + '], value = [' + value + ']')
        }
    }
}
