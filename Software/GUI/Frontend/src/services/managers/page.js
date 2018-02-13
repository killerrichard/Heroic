export default class Service
{
    constructor ($rootScope, $state) {
        'ngInject'
        this.$rootScope = $rootScope
        this.$state = $state
    }

    transition (page) {
      switch (page) {

        case 'dashboard':
          this.$rootScope.page = 'dashboard'
          this.$state.go('home.dashboard')
        break;
         
      }
    }

}
