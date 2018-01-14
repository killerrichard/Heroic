export default class Create
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration      = Configuration
        this.$scope             = $scope
        this.$http              = $http
        this.$scope.data        = {}
        this.$scope.post        = function () {

          if ($scope.data) {
            if ($scope.data.title == undefined) {
              $scope.data.message = 'You must include a title'
            } else if ($scope.data.content == undefined) {
              $scope.data.message = 'You must have some content'
            } else {
              $http.post(Configuration.api + '/data/website/hangouts/create', $scope.data)
                .then (post => {
                  $scope.data         = {}
                  $scope.data.message = 'Your post has been saved'
                })
                .catch (error => {
                  $scope.data.message = 'Can not post at this time'
                })
            }
          }


        }
    }

}
