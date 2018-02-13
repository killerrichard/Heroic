export default class Controller
{
    constructor(InstallManager, $scope, $http)
    {
        'ngInject'
        $scope.finish = (() => {
          $http.post('http://localhost:8080/api/install/finish')
            .then (result => {
              InstallManager.transition('completed_finish')
            })
            .catch (error => {
              alert('Something went wrong')
            })
        })
    }

}
