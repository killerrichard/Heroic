class View {
  constructor($http, $scope, $state, $localStorage, $rootScope) {
    'ngInject'

    // Tab Management
    $scope.active = 'general'

    $scope.isActive = (tab) => {
      if ($scope.active == tab) {
        return true
      } else {
        return false
      }
    }

    $scope.setActive = (tab) => {
      $scope.active = tab
    }

  }
}

class Update {
  constructor($http, $scope, $state) {
    'ngInject'
    $scope.update = () => {
      $http.patch('/api/auth/admin/config/website', $state.params.website)
        .then(msg => {
          if (!msg.data.error) {
            $state.go('admin.website.settings.view', {
              message: {
                type: 'neutral',
                text: 'Your changes have been saved!'
              }
            })
          } else {
            $state.go('admin.website.settings.view', {
              message: {
                type: 'neutral',
                text: 'Your changes have been saved!'
              }
            })
          }
        })
    }

  }
}
module.exports = {
  View,
  Update
}