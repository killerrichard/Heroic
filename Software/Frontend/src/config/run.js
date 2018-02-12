export default function Run(Promise, $window, $state, $rootScope, $http, $localStorage)
{
    'ngInject'
    $rootScope.state        = $state
    $rootScope.step         = 'welcome'

    $state.go('install.welcome')

    $rootScope.$on('$stateChangeStart', (event, next, current) =>
    {
      return next
    })

    $rootScope.$on('$stateChangeSuccess', (event, to, toParams, prev, prevParams) =>
    {
        $window.scrollTo(0, 0)
        $rootScope.previousState 	= (prev.name == undefined || prev.name == '' || null) ? $state.get('login') : prev
        $rootScope.previousParams 	= prevParams
        $rootScope.currentState 	= to

        $rootScope.goBack = () =>
        {
            return $state.go($rootScope.previousState.name, $rootScope.previousParams)
        }
    })

}
