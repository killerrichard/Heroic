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
        $scope.like             = function (id) {
          $http({ method : 'POST', data : { photo_id : id }, url : AppConstants.api + '/data/emulator/photos/like' })
            .then (result => {
              if (result.data.status == 'liked') {
                $scope.photos[$scope.photos.length - id].likes.push(1)
              } else {
                $scope.photos[$scope.photos.length - id].likes.splice(1,1)
              }
            })
            .catch (error => {
              console.log('Error: ', error)
            })
        }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : this.AppConstants.api + '/data/emulator/photos/fetch' })
        .then (result => {
          this.$scope.photos = result.data
        })
        .catch (error => {
          console.log('Error: ', error)
        })
    }




}
