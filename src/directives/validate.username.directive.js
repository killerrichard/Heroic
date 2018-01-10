export default class ValidateUsernameDirective
{
    constructor()
    {
        this.restrict   = 'A';
        this.require    = 'ngModel';
    }

    controller(ValidatorService, $scope)
    {
        'ngInject';

        $scope.ValidatorService = ValidatorService;
    }

    link(scope, element, attrs, ngModel)
    {
        element.on('blur', () =>
        {
            if(element.val() == undefined || null || element.val() == '') return;

            return scope.ValidatorService.validateUsername(element.val())

            .then(() =>
            {
                return ngModel.$setValidity('invalidUsernameAvailability', true);
            })

            .catch((err) =>
            {
                return ngModel.$setValidity('invalidUsernameAvailability', false);
            });
        });
    }
}