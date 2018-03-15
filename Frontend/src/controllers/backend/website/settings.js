export default class Controller {
    constructor($http, $scope, $state, $localStorage, $rootScope) {
      'ngInject'

      // Tab Management
      $scope.active     = 'general' 

      $scope.isActive   = (tab) => {
        if ($scope.active==tab) {
          return true
        } else {
          return false
        }
      }

      $scope.setActive  = (tab) => {
        $scope.active=tab
      } 

      // Form Management 
      $scope.message    = {}
      $scope.update     = () => {
        $http.patch('/api/auth/admin/config/website', $scope.website)
          .then (msg => {
            if (!msg.data.error) {
              $scope.message = {
                type : 'neutral',
                text : 'Your changes have been saved!'
              }
              $localStorage.website = $scope.website
              $rootScope.website    = $scope.website
            } else {
              console.log(msg.data.error)
              $scope.message = {
                type : 'failure',
                text : 'Failed to save website settings'
              }
            }
          })
      }

    }
  }
  
