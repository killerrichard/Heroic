class OnlineController
{
    constructor(AppConstants, $scope, $http, $interval)
    {
      'ngInject'
      this.AppConstants     = AppConstants
      this.$scope           = $scope
      this.$http            = $http
      this.$interval        = $interval
      $scope.online         = 0
      this.$onInit          = () => this.fetch()
    }

    fetch () {
      this.$interval(() => {
        this.$http({ type : 'GET', url : this.AppConstants.api + '/data/emulator/online/fetch'})
          .then (online => {
            if (online.data != undefined) {
              this.$scope.online = online.data.length
            } else {
              this.$scope.online = 0
            }
          })
          .catch (error => {
            console.log('Error: ', error)
          })
        }, 10000) 
    }

}

let OnlineComponent = {
    controller: OnlineController,
    templateUrl: 'views/common/components/header/online.html'
}

export default OnlineComponent
