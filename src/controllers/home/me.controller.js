export default class MeController
{
    constructor(UtilityService, $scope, $rootScope, $localStorage)
    {
        'ngInject';

        this.UtilityService     = UtilityService;
        this.$scope             = $scope;
        this.$rootScope         = $rootScope;
        this.$localStorage      = $localStorage;

        console.log($localStorage);

        this.$rootScope.header      = {
          tabs : {
            "What's Up" : {
              href : "#"
            }
          }
        };

    }
}
