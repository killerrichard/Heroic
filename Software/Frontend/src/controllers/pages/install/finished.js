export default class Controller
{
    constructor(InstallManager, $scope, $http)
    {
        'ngInject'
        $scope.finish = (() => {
          $http.post('http://localhost/api/install/finish')
            .then (result => {
              InstallManager.transition('completed_finish')
            })
            .catch (error => {
              alert('Something went wrong')
            })
        })
    }

}
