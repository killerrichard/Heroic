export default class LoginController
{
    constructor(AppConstants, UtilityService, AuthenticationService, $state, $scope)
    {
        'ngInject';

        this.AppConstants           = AppConstants;
        this.UtilityService         = UtilityService;
        this.AuthenticationService  = AuthenticationService;
        this.$state 			    = $state;
        this.$scope 			    = $scope;

        this.$scope.loginFormDetails = {
            username: null,
            password: null
        };

        this.$scope.login = () => this.login();
    }

    login()
    {
        if(this.$scope.loginFormDetails.username == '' || null || this.$scope.loginFormDetails.password == '' || null) return;

        return this.AuthenticationService.login(this.$scope.loginFormDetails.username, this.$scope.loginFormDetails.password)

        .then((session) =>
        {
            return this.$state.go('me.home');
        })

        .catch((err) =>
        {
            this.$scope.loginFormDetails.username = null;
            this.$scope.loginFormDetails.password = null;

            this.$scope.loginForm.password.$setPristine();

            document.getElementById("username").focus();

            if(err == 'invalid_login') return this.$scope.loginForm.username.$setValidity('invalidLogin', false);
        });
    }
}
