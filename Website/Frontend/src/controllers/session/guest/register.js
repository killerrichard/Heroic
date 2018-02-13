export default class Register
{
    constructor(AuthenticationService, $http, $scope, $state)
    {
        'ngInject'

        this.AuthenticationService  = AuthenticationService
        this.$http                  = $http
        this.$scope                 = $scope
        this.$state                 = $state
        this.$scope.user            = {}
        this.$scope.messages        = {}
        this.$scope.check           = {}
        this.$scope.check           = function (field)
        {
          if (field == 'username') {
            $http.get('/api/data/emulator/users/match/username/' + $scope.user.username)
              .then (success => {
                $scope.messages.username = undefined
              })
              .catch (error => {
                $scope.messages.username = 'This username is not available'
              })
            } else if (field == 'email') {
              if ($scope.user.email.length < 25) {
                $http.get('/api/data/emulator/users/match/email/' + $scope.user.email)
                  .then (success => {
                    $scope.messages.email = undefined
                  })
                  .catch (error => {
                    $scope.messages.email = 'This email address is already being used'
                  })
                } else {
                  $scope.messages.email = 'Email address is too long'
                }
            }

            if ($scope.user.username != undefined && $scope.user.email != undefined && $scope.user.password != undefined && $scope.user.password_rep != undefined && $scope.messages.username == undefined && $scope.messages.email == undefined && $scope.user.password == $scope.user.password_rep) {
              $scope.user.enabled = true
            } else {
              $scope.user.enabled = false
            }

        }

        this.$scope.register        = function ()
        {
          $http.post('/api/auth/register', $scope.user)
            .then (result => {
              return AuthenticationService.login($scope.user.username, $scope.user.password)
                .then (session => {
                  return $state.go('me.home')
                })
                .catch (error => {
                  return state.go('login')
                })

            })
            .catch (error => {
              return state.go('login')
            })
        }

    }


}
