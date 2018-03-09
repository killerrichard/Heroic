export default class Controller
{

  constructor($http, $scope, $state)
  {
      'ngInject'
      $scope.articles         = []
      this.$onInit            = (() => {
          $http.get('/api/news/categories')
            .then (articles => {
              if (articles.data.error) {
                $state.go('errors.500')
              } else {
                $scope.articles = articles.data
              }
            })
            .catch (error => {
              $state.go('errors.500')
            })
      })
  }

}
