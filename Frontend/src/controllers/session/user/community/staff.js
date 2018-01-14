export default class Staff
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration       = Configuration
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = () => { this.fetch() }
        $scope.setTab = function(newTab){
          $scope.tab = newTab
        }

        $scope.isSet = function(tabNum){
          return $scope.tab === tabNum
        }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : this.Configuration.api + '/data/emulator/staff/fetch' })
        .then (result => {
          if (result.data.length > 0) {
            this.$scope.tab = result.data[0].id
            this.$scope.ranks = result.data
          } else {
            this.$scope.ranks = null
          }
        })
        .catch (error => {
          this.$scope.ranks = null
        })
    }




}
