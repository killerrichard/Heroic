export default class Settings
{
    constructor($http, $rootScope, $localStorage)
    {
        'ngInject'
        $http.get('/api/config/website')
          .then (website => {
            $rootScope.website    = website.data
            $localStorage.website = website.data
          }) 
          .catch (error => {
            return null
          })
    }


}
