export default class About
{
    constructor($scope)
    {
        'ngInject'

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
