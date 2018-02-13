export default class Settings
{
    constructor($http, $rootScope, $localStorage)
    {
        'ngInject'
        $http({ type : 'GET', url : '/api/data/website/settings'})
          .then (website => {
            $rootScope.website    = website.data
            $localStorage.website = website.data
          })
          .catch (error => {
            return null
          })
    }


}
