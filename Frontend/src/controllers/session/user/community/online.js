export default class Photos
{
    constructor(AppConstants, UtilityService, $scope, $http)
    {
        'ngInject'
        this.AppConstants       = AppConstants
        this.UtilityService     = UtilityService
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = () => { this.fetch(); }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : this.AppConstants.api + '/data/emulator/online/fetch' })
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
