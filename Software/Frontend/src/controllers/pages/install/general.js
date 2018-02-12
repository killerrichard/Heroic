export default class Controller
{
  constructor(InstallManager, $scope, $http)
    {
        'ngInject'
        $scope.website   = {
          name        : 'Heroic',
          link        : 'http://localhost',
          findretros  : '1',
          fr_user     : 'LeChris',
          emu_ip      : '127.0.0.1',
          emu_port    : '3000'
        }
        $scope.save      = (() => {
          const data = {
            name        : $scope.website.name,
            link        : $scope.website.link,
            findretros  : $scope.website.findretros,
            fr_user     : $scope.website.fr_user,
            emu_ip      : $scope.website.emu_ip,
            emu_port    : $scope.website.emu_port
          }

          $http.post('http://localhost/api/install/save/general', data)
            .then (result => {
              InstallManager.transition('completed_general')
            })
            .catch (error => {
              $scope.error = 'Something went wrong (' + error + ')'
            })
        })
    }

}
