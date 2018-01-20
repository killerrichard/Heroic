export default class Create
{
    constructor($scope, $http, $state)
    {
        'ngInject'
        this.$scope             = $scope
        this.$http              = $http
        this.$state             = $state
        this.$onInit            = this.fetch()
        this.$scope.data        = {}
        this.$scope.post        = function ()

        {
          let data = {
            thumb    : $scope.data.thumb,
            title    : $scope.data.title.substr(0, 10),
            content  : $scope.data.content,
            category : $scope.data.category
          }

          $http.post('/api/data/website/hangouts/create', data)
            .then (post => {
              $state.go('hangouts.home.post', { id : post.data.id })
            })
            .catch (error => {
              $scope.data.message = 'Can not post at this time'
            })
        }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/website/hangouts/fetch' })
        .then (result => {
          this.$scope.categories  = result.data
        })
        .catch (error => {
          return
        })
    }

}
