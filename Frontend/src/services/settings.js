export default class Settings {
  constructor($http, $rootScope, $localStorage, $interval) {
    'ngInject'
    // Website Settings
    $http.get('/api/config/website')
      .then(website => {
        $rootScope.website = website.data
        $localStorage.website = website.data
      })
      .catch(error => {
        return null
      })
    // Online Users
    const count = () => {
      $http.get('/api/users/online/count')
        .then(users => {
          $rootScope.website.online = users.data
        })
        .catch(error => {
          return null
        })
    }
    count()
    $interval(count, 2500)
  }


}