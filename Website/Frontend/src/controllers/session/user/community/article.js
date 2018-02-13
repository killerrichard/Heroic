export default class Article
{
    constructor($scope, $http, $state)
    {
        'ngInject'
        this.$scope             = $scope
        this.$http              = $http
        this.$state             = $state
        this.$onInit            = () => { this.fetch(); }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/website/news/fetch/' + this.$state.params.id })
        .then (result => {
          this.$scope.article  = result.data[0]
        })
        .catch (error => {
          this.$scope.article  = undefined
        })
    }

}
