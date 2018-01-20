export default class Login
{
    constructor(Configuration, AuthenticationService, $state, $scope)
    {
        'ngInject'

        this.Configuration           = Configuration
        this.AuthenticationService  = AuthenticationService
        this.$state 			    = $state
        this.$scope 			    = $scope

        this.$scope.loginFormDetails = {
            username: null,
            password: null
        }

        this.$scope.login = () => this.login()
    } 

    login()
    {
      return this.AuthenticationService.login(this.$scope.loginFormDetails.username, this.$scope.loginFormDetails.password)
        .then (session => {
          return this.$state.go('me.home')
        })
        .catch (error => {
          this.$scope.loginFormDetails = null
        })
    }
}
