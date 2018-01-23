export default class List
{
    constructor($scope, $http)
    {
        'ngInject'
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = this.fetch()
        this.$scope.tab         = 0
        this.$scope.setTab      = function(newTab){ $scope.tab = newTab }
        this.$scope.isSet       = function(tabNum){ return $scope.tab === tabNum }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/roleplay/jobs/fetch' })
        .then (result => {
          this.$scope.jobs  = result.data
        })
    }

}
