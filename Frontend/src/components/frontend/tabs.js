import Navigation from '../../config/navigation.json'
class Controller
{
    constructor ($scope, $rootScope)
    {
        'ngInject'
        $scope.children = []
        angular.forEach(Navigation.navigation, ((item, key) => {
          if ($rootScope.page.name.indexOf(item.state) > -1) {
            angular.forEach(item.children, ((child, key) => {
              $scope.children.push(child)
            }))
          }
        }))
    }

}

const Component = {
  controller  : Controller,
  templateUrl: 'views/components/tabs.html'
}

export default Component
