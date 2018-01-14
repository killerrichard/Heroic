export default class Photos
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration       = Configuration
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = () => { this.fetch(); }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : this.Configuration.api + '/data/emulator/online/fetch' })
        .then (result => {
          if (result.data.length > 0) {
            this.$scope.online = result.data
          } else {
            this.$scope.online = null
          }
        })
        .catch (error => {
          this.$scope.online = null
        })
    }




}
