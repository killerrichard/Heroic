class Controller
{
    constructor ($scope, $http)
    {
        'ngInject'
        $scope.articles = []
        $http.get('/api/news/articles')
          .then (articles => {
            $scope.articles = articles.data.slice(0, 5)
          })
          .catch (error => {
            //
          })
    }

}

const Component = {
  controller  : Controller,
  templateUrl: 'views/frontend/components/articles.html'
}

export default Component
 