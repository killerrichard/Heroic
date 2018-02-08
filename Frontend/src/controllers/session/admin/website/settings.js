export default class Settings
{
    constructor($rootScope, $scope, $http, $state)
    {
        'ngInject'
        $scope.website     = $rootScope.website
    }

}
