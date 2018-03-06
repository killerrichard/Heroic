export default class Controller
{

  constructor(SessionService, $http, $state, $scope)
  {
      'ngInject'
      $scope.error  = false
      $scope.user   = { }
      $scope.login  = () => {
        $http.post(`/api/users/session/${$scope.user.username}`, $scope.user)
          .then (message => {
            if (message.data.error) {
              $scope.error = message.data.error
            } else {
              SessionService.create(message.data, $scope.user.username)
                .then (success => {
                  $state.go('user.home.me')
                })
                .catch (error => {
                  $state.go('errors.500')
                })
            }
          })
          .catch (error => {
            console.log(error) 
            $state.go('errors.500')
          })
      }
  }

}
