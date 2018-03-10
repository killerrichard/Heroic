class Controller
{
  constructor($scope)
  {
    'ngInject' 
    $scope.status = false
    $scope.toggle = () => {
      $scope.status = !$scope.status
    }
  }
}

const Component = {
  controller : Controller,
  templateUrl: 'views/frontend/components/user-menu.html'
}

export default Component
 