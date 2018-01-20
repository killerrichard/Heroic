export default class Client
{
    constructor($localStorage, $window, $state, $rootScope, $scope, $http)
    {
        'ngInject'
        this.$localStorage     = $localStorage
        this.$window           = $window
        this.$state            = $state
        this.$scope            = $scope
        this.$http             = $http
        this.$onInit           = () => { this.fetch() }

        this.$scope.flashvarsString = ''

        this.$scope.flashVars = {
            "connection.info.host": $localStorage.website.emu_ip,
            "connection.info.port": $localStorage.website.emu_port,
            "external.texts.txt": $localStorage.website.swf_base + "/gamedata/texts.txt",
            "external.variables.txt": $localStorage.website.swf_base + "/gamedata/variables.txt",
            "external.figurepartlist.txt": $localStorage.website.swf_base + "/gamedata/figuredata.xml",
            "furnidata.load.url": $localStorage.website.swf_base + "/gamedata/furnidata.xml",
            "productdata.load.url": $localStorage.website.swf_base + "/gamedata/productdata.txt",
            "client.allow.cross.domain": 1,
            "client.notify.cross.domain": 0,
            "client.starting": "Heroic Framework 1.0",
            "flash.client.url": $localStorage.website.swf_base + "/other/game/",
            "flash.client.origin": "popup",
            "sso.ticket": $localStorage.session.auth_ticket
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

        this.$window.FlashExternalInterface.track = (action, label, value) =>
        {
            // logs client activity in console
            console.log('action = [' + action + '], label = [' + label + '], value = [' + value + ']')
        }
    }

    fetch ()
    {
      this.$http.get('/api/auth/sso')
        .then (sso => {
          console.log(this.$localStorage.website)
          this.$localStorage.session.auth_ticket  = sso.data.auth_ticket
        })
    }
}
