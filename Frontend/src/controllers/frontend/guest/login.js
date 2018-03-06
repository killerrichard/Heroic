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
              console.log(message.data.error)
              switch (message.data.error) {

                case "You need to fill in both username and password.":
                  $scope.error = {
                    username : true,
                    password : true
                  }
                break;

                case "That user does not exist":
                  $scope.error = {
                    username : true
                  }
                break;

                case "That's not the right password":
                  $scope.error = {
                    password : true
                  }
                break;

                default:
                  $scope.error = false
                break;

              }
              console.log($scope.error)
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
