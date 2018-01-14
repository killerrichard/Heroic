export default class Home
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration      = Configuration
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = this.fetch()
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : this.Configuration.api + '/data/website/hangouts/fetch' })
        .then (result => {
          this.$scope.posts  = result.data
        })
        .catch (error => {
          return
        })
    }

}
