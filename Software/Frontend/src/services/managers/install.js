export default class Service
{
    constructor ($rootScope, $state) {
        'ngInject'
        this.$rootScope = $rootScope
        this.$state = $state
    }

    transition (step) {
      switch (step) {

        case 'completed_welcome':
          this.$rootScope.step = 'database'
          this.$state.go('install.database')
        break;

        case 'completed_database':
          this.$rootScope.step = 'general'
          this.$state.go('install.general')
        break;

        case 'completed_general':
          this.$rootScope.step = 'administrator'
          this.$state.go('install.administrator')
        break;

        case 'completed_administrator':
          this.$rootScope.step ='finised'
          this.$state.go('install.finished')
        break;

        case 'completed_finish':
          console.log('yay')
          this.$rootScope.step = undefined
          this.$state.go('home.dashboard')
        break;

        default:
          this.$rootScope.step = 'welcome'
          this.$state.go('install.welcome')
        break;

      }
    }


}
