export default class Photos
{
    constructor($scope, $http)
    {
        'ngInject'
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = () => { this.fetch(); }
        $scope.like             = function (id) {

          const data = {
            photo_id : id || 1,
          }

          $http.post('/api/data/emulator/photos/like', data)
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
      this.$http({ method : 'GET', url : '/api/data/emulator/photos/fetch' })
        .then (result => {
          this.$scope.photos = result.data
        })
        .catch (error => {
          console.log('Error: ', error)
        })
    }




}
