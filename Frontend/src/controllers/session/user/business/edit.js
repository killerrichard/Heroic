export default class Edit
{
    constructor($state, $scope, $http, $localStorage)
    {
        'ngInject'
        this.$state             = $state
        this.$scope             = $scope
        this.$http              = $http
        this.$localStorage      = $localStorage
        this.$onInit            = this.fetch()
        this.$scope.tab         = 0
        this.$scope.setTab      = function(newTab){ $scope.tab = newTab }
        this.$scope.isSet       = function(tabNum){ return $scope.tab === tabNum }
        this.$scope.save        = function () {
          const data = {
            id    : $scope.job.id,
            name  : $scope.job.name,
            desc  : $scope.job.desc,
            badge : $scope.job.badge
          }
          $http.post('/api/data/roleplay/jobs/update', data)
            .then (result => {
              $state.go('business.manage.view', { id : data.id })
            })
        }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/roleplay/jobs/fetch/' + this.$state.params.id})
        .then (result => {

          if (result.data.owner.id== this.$localStorage.session.id) {
            this.$scope.job  = result.data
          } else {
            this.$state.go('business.list')
          }
        })
    }

}
