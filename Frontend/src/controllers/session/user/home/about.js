export default class About
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration  = Configuration
        this.$http          = $http
        this.$scope         = $scope
        this.$onInit        =  this.fetch()
        $scope.tab          = 1
        $scope.setTab       = function(newTab){ $scope.tab = newTab }
        $scope.isSet        = function(tabNum){ return $scope.tab === tabNum }
        $scope.info         = {}
    }

    fetch ()
    {
      this.$http.get(this.Configuration.api + '/data/build')
        .then (result => {
          this.$scope.info = result.data
        })
        .catch (error => {
          this.$scope.info = 'Failed to load'
        })
    }

}
