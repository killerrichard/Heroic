export default class About
{
    constructor(UtilityService, $scope, $rootScope, $localStorage)
    {
        'ngInject'

        this.UtilityService     = UtilityService
        this.$scope             = $scope

        $scope.tab = 1
        $scope.setTab = function(newTab){
          $scope.tab = newTab
        }

        $scope.isSet = function(tabNum){
          return $scope.tab === tabNum
        }

    }
}
