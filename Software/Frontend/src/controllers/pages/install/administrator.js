export default class Controller
{
    constructor(InstallManager,$scope, $state, $http)
    {
        'ngInject'
        $scope.user       = {
          username : 'Administrator',
          mail     : 'admin@website.com',
          password : 'Password123!',
        }

        $scope.save      = (() => {
          const data = {
            username : $scope.user.username,
            mail     : $scope.user.mail,
            password : $scope.user.password
          }

          $http.post('http://localhost/api/install/save/administrator', data)
            .then (result => {
              console.log(result.data)
              InstallManager.transition('completed_administrator')
            })
            .catch (error => {
              $scope.error = 'Something went wrong (' + error + ')'
            })
        })
    }

}
