export default class Leaderboards
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration      = Configuration
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = () => { this.fetch(); }
        this.$scope.tab         = 1
        this.$scope.setTab      = function(newTab){ $scope.tab = newTab }
        this.$scope.isSet       = function(tabNum){ return $scope.tab === tabNum }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : this.Configuration.api + '/data/emulator/users/leaderboards' })
        .then (result => {
          this.$scope.leaderboards = result.data
        })
        .catch (error => {
          this.$scope.leaderboards = null
        })
    }




}
