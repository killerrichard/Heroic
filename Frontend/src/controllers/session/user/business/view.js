export default class View
{
    constructor($state, $scope, $http)
    {
        'ngInject'
        this.$state             = $state
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = this.fetch()
        this.$scope.tab         = 0
        this.$scope.setTab      = function(newTab){ $scope.tab = newTab }
        this.$scope.isSet       = function(tabNum){ return $scope.tab === tabNum }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/roleplay/jobs/fetch/' + this.$state.params.id})
        .then (result => {
          this.$scope.job  = result.data
        })
    }

}
