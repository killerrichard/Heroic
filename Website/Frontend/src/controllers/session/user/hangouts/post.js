export default class Home
{
    constructor($scope, $http, $state, $localStorage)
    {
        'ngInject'
        this.$scope             = $scope
        this.$http              = $http
        this.$state             = $state
        this.$localStorage      = $localStorage
        this.$onInit            = this.fetch()
        this.$scope.count       = 1
        this.$scope.data        = {}
        this.$scope.comments    = {}
        this.$scope.comment     = function () {

          let data = {
            post    : $state.params.id,
            user    : $localStorage.session.id,
            content : $scope.data.content
          }

          $http.post('/api/data/website/hangouts/comments/create', data)
            .then (comment => {
              $scope.post.comments.push(comment.data)
            })

            $scope.form = false
        }
        this.$scope.delete      = function (data, type)
        {
          if (type == 'post') {
            $http.get('/api/data/website/hangouts/post/delete/' + data)
            .then (data => {
              $state.go('hangouts.home.list')
            })
          } else {
            $http.get('/api/data/website/hangouts/comments/delete/' + data.id)
            .then (data => {
              $state.reload()
            })
          }
        }
    }

    fetch ()
    {
      this.$http({ method : 'GET', url : '/api/data/website/hangouts/fetch/' + this.$state.params.id })
        .then (result => {
          if (result.data.category.staff==1 && this.$localStorage.session.rank.staff==1 || result.data.category.staff==0) {
            this.$scope.post  = result.data
          } else {
            return this.$state.go('hangouts.home.list')
          }
        })
        .catch (error => {
          return this.$state.go('hangouts.home.list')
        })
    }

}
