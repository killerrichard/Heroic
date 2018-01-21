export default function Run(SettingsService, JWTService, SessionService, $window, $state, $rootScope, $http, $localStorage)
{
    'ngInject'
    $rootScope.state        = $state
    $rootScope.$on('$stateChangeStart', (event, next, current) =>
    {
      $rootScope.page         = next.pretty
      $rootScope.session      = $localStorage.session

      if (next.session)
      {
        SessionService.validateSession()
          .then (session => {
            return next
          })
          .catch (error => {
            event.preventDefault()
            return $state.go('login')
          })
        } else if (next.guest && $rootScope.session !== undefined) {
          event.preventDefault()
          return $state.go('me.home')
        } else {
          return next
        }
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
