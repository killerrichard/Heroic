export default class Categories
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration      = Configuration
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = () => { this.fetch(); }
        this.$scope.tab         = 0
        this.$scope.setTab      = function(newTab){ $scope.tab = newTab }
        this.$scope.isSet       = function(tabNum){ return $scope.tab === tabNum }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : this.Configuration.api + '/data/website/category/fetch' })
        .then (result => {
          this.$scope.categories  = result.data
        })
        .catch (error => {
          this.$scope.categories = null
        })
    } 

}
