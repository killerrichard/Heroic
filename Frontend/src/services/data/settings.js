export default class Settings
{
    constructor(AppConstants, $http, $rootScope)
    {
        'ngInject'
        $http({ type : 'GET', url : AppConstants.api + '/data/website/settings'})
          .then (website => {
            $rootScope.website = website.data
          })
          .catch (error => {
            return null
          })
    }


}
