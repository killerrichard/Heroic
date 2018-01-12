export default class LogoutDirective
{
    constructor()
    {
        this.restrict   = 'A';
        this.replace    = true;
    }

    controller(SessionService, $localStorage, $state, $mdDialog, $scope)
    {
        'ngInject';

        $scope.SessionService   = SessionService;
        $scope.localStorage     = $localStorage;
        $scope.state            = $state;
        $scope.mdDialog         = $mdDialog;
    }

    link(scope, element, attrs)
    {
        element.on('click', (event) =>
        {
            if(scope.localStorage.currentUser == undefined || null) return;
            scope.SessionService.destroySession();
            return scope.state.go('login');
        }); 
    }
}
