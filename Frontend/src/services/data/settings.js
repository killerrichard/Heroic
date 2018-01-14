export default class Settings
{
    constructor(Configuration, $http, $rootScope)
    {
        'ngInject'
        $http({ type : 'GET', url : Configuration.api + '/data/website/settings'})
          .then (website => {
            $rootScope.website = website.data
          })
          .catch (error => {
            return null
          })
    }


}
