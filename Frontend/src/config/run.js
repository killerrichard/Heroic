export default function Run ($transitions, SettingsService, SessionService, $rootScope, $localStorage)
{
  'ngInject'
  // All Routes
  $transitions.onStart({}, (transition) => {
    SessionService.validate()
    $rootScope.page = transition.to()
  })

  // Guests Only
  $transitions.onStart({ entering : 'guest' }, (transition) => {
    if (SessionService.status()) {
      return transition.router.stateService.target('user.home.me') 
    }
  })

  // Users Only
  $transitions.onStart({ entering : 'user' }, (transition) => {
    if (!SessionService.status()) {
      return transition.router.stateService.target('guest.login')
    }
  })

  //Admin only
  $transitions.onStart({ entering : 'admin' }, (transition) => {
    if ($localStorage.session.rank.display!='staff') {
      return transition.router.stateService.target('user.dashboard')
    }
  })




}
