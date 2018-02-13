export default class Controller
{
  constructor(InstallManager, $scope, $http)
    {
        'ngInject'
        $scope.database   = {
          host      : '127.0.0.1',
          user      : 'root',
          password  : 'password',
          database  : 'arcturus'
        }
        $scope.test       = (() => {

          const data = {
            host       : $scope.database.host,
            user       : $scope.database.user,
            password   : $scope.database.password,
            database   : $scope.database.database
          }

          $http.post('http://localhost:8080/api/install/save/database', data)
            .then (result => {
              InstallManager.transition('completed_database')
            })
            .catch (error => {
              console.log(error)
              $scope.error = 'Database connection failed'
            })
        })
    }

}
