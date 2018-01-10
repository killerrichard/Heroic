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

            return scope.mdDialog.show(scope.mdDialog.confirm({
                title: 'HabboAPI',
                textContent: 'Are you sure you would like to logout?',
                ok: 'Logout',
                cancel: 'Cancel'
            }))
            
            .then(() =>
            {
                return scope.SessionService.destroySession();
            })

            .then(() =>
            {
                return scope.state.go('login');
            })
            
            .catch(() =>
            {
                return;
            });
        });
    }
}