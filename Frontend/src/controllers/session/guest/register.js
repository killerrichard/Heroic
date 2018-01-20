export default class Register
{
    constructor(Configuration, AuthenticationService, UserService, $http, $scope, $state)
    {
        'ngInject'

        this.Configuration          = Configuration
        this.AuthenticationService  = AuthenticationService
        this.UserService            = UserService
        this.$http                  = $http
        this.$scope                 = $scope
        this.$state                 = $state
        this.$scope.user            = {}
        this.$scope.messages        = {}
        this.$scope.check           = {}
        this.$scope.check           = function (field)
        {
          if (field == 'username') {
            $http.get(Configuration.api + '/data/emulator/users/match/username/' + $scope.user.username)
              .then (success => {
                $scope.messages.username = undefined
              })
              .catch (error => {
                $scope.messages.username = 'This username is not available'
              })
            } else if (field == 'email') {
              $http.get(Configuration.api + '/data/emulator/users/match/email/' + $scope.user.email)
                .then (success => {
                  $scope.messages.email = undefined
                })
                .catch (error => {
                  $scope.messages.email = 'This email address is already being used'
                })
            }

            if ($scope.user.username != undefined && $scope.user.email != undefined && $scope.user.password != undefined && $scope.user.password_rep != undefined && $scope.messages.username == undefined && $scope.messages.email == undefined && $scope.user.password == $scope.user.password_rep) {
              $scope.user.enabled = true
            } else {
              $scope.user.enabled = false
            }

        }

        this.$scope.register        = function ()
        { 
          $http.post(Configuration.api + '/auth/register', $scope.user)
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
