export default class Logout
{
    constructor(SessionService, $state)
    {
        'ngInject'
        this.SessionService          = SessionService
        this.$state 			           = $state

        this.SessionService.destroySession()
          .then (finish => {
            return $state.go('login')
          })
          .catch (error => {
            return $state.go('login')
          })
    }

  }
