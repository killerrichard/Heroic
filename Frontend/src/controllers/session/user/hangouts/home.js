export default class Home
{
    constructor($scope, $http)
    {
        'ngInject'
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = this.fetch()
        $scope.tab          = 1
        $scope.setTab       = function(newTab){ $scope.tab = newTab }
        $scope.isSet        = function(tabNum){ return $scope.tab === tabNum }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/website/hangouts/fetch' })
        .then (result => {
          this.$scope.categories  = result.data
        })
        .catch (error => {
          return
        })
    }

}
