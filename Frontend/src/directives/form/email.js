export default class Email
{
    constructor()
    {
        this.restrict   = 'A'
        this.require    = 'ngModel'
    }

    controller(Configuration, $scope, $http)
    {
        'ngInject'

    }

    link(scope, element, attrs, ngModel)
    {

      $http.get(Configuration.api + '/data/emulator/users/match/email/' + $scope.user.email)
        .then (success => {
          return ngModel.$setValidity('email', false)
        })
        .catch (error => {
          return ngModel.$setValidity('email', true)
        })

    }
}
