export default class Register
{
    constructor(Configuration, AuthenticationService, UserService, $state, $scope)
    {
        'ngInject';

        this.Configuration           = Configuration;
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
        
    }
}
