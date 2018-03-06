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
  templateUrl: 'views/components/user-menu.html'
}

export default Component
