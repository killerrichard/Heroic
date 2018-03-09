class View {
  constructor($http, $scope, $state, $sce) {
    'ngInject'
    $scope.article = []
    this.$onInit = () => {
      $http.get(`/api/news/articles/${$state.params.id || 0}`)
        .then(article => {
          if (!article.data.error) {
            $scope.article          = article.data
            $scope.article.content  = $sce.trustAsHtml(article.data.content)
          } else {
            $state.go('errors.400')
          }
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