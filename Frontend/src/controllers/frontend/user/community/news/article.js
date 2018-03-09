class View {
  constructor($http, $scope, $state, $sce) {
    'ngInject'
    $scope.article = []
    this.$onInit = () => {
      $http.get(`/api/news/articles/${$state.params.id || 0}`)
        .then(article => {
          $scope.article          = article.data
          $scope.article.content  = $sce.trustAsHtml(article.data.content)
        }) 
        .catch(error => {
          $state.go('errors.500')
        })
    }
  }
}

module.exports = {
  View
} 