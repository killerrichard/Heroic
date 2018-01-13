export default function Run(AppConstants, SettingsService, SessionService, $window, $state, $rootScope, $http)
{
    'ngInject'
    $rootScope.appConfig    = AppConstants
    $rootScope.state        = $state
    $rootScope.$on('$stateChangeStart', (event, next, current) =>
    {
      $rootScope.page = next.pretty

      return SessionService.validateSession()
        .then((session) => {
          if(next.guestOnly) {
            event.preventDefault()
            return $state.go('me.home')
          } else {
            return next
          }
        })

        .catch((err) =>
        {
          $rootScope.currentUser = null
          if(next.loginRequired == true) {
            event.preventDefault()
            return $state.go('login')
          } else {
            return next
          }
        })
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
