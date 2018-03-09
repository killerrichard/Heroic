export default class Controller
{

  constructor($http, $scope, $state)
  {
      'ngInject'
      $scope.article         = []
      this.$onInit           = (() => {
          $http.get(`/api/news/articles/${$state.params.id || 0}`)
            .then (articls => {
              if (article.data.error) {
                $state.go('errors.500')
              } else {
                $scope.article = article.data
              } 
            })
            .catch (error => {
              $state.go('errors.500')
            })
      })
  }

}
  