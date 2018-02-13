export default class Categories
{
    constructor($scope, $http)
    {
        'ngInject'
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = () => { this.fetch(); }
        this.$scope.tab         = 0
        this.$scope.setTab      = function(newTab){ $scope.tab = newTab }
        this.$scope.isSet       = function(tabNum){ return $scope.tab === tabNum }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/website/category/fetch' })
        .then (result => {
          this.$scope.categories  = result.data
        })
        .catch (error => {
          this.$scope.categories = null
        })
    }

}
