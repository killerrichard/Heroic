export default class Register
{
    constructor(AppConstants, UtilityService, AuthenticationService, UserService, $state, $scope)
    {
        'ngInject';

        this.AppConstants           = AppConstants;
        this.UtilityService         = UtilityService;
        this.AuthenticationService  = AuthenticationService;
        this.UserService            = UserService;
        this.$state                 = $state;
        this.$scope                 = $scope;

        this.$scope.header = true;

        this.$scope.registerFormDetails = {
            username: null,
            email: null,
            password: null,
            passwordConfirm: null
        };

        this.$scope.register = () => this.register();
    }

    register()
    {
        if(this.$scope.registerFormDetails == undefined || this.$scope.registerFormDetails.length == 0 || this.$scope.registerFormDetails.password != this.$scope.registerFormDetails.passwordConfirm) return this.UtilityService.alert('An erorr has occurred');

        return this.UserService.addUser(this.$scope.registerFormDetails.username, this.$scope.registerFormDetails.email, this.$scope.registerFormDetails.password)

        .then((user) =>
        {
            return this.AuthenticationService.login(this.$scope.registerFormDetails.username, this.$scope.registerFormDetails.password)
        })

        .then((session) =>
        {
            return this.$state.go('me');
        })

        .catch((err) =>
        {

            if(err == 'max_accounts')
            {
                this.UtilityService.alert('Max accounts');
                return this.$state.go('login');
            }

            if(err == 'username_unavailable') return this.$scope.registerForm.username.$setValidity('invalidUsernameAvailability', false);
            if(err == 'invalid_email') return this.$scope.registerForm.email.$setValidity('invalidEmail', false);
            if(err == 'email_unavailable') return this.$scope.registerForm.email.$setValidity('invalidEmailAvailability2', false);

            return this.UtilityService.alert('An erorr has occurred');
        });
    }
}
