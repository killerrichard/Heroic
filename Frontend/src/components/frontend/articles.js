class Controller
{
    constructor ($scope, $http)
    {
        'ngInject'
        $scope.articles = []
        $http.get('/api/news/articles')
          .then (articles => {
            $scope.articles = articles.data
            console.log(articles.data)
          })
          .catch (error => {
            //
          })
    }

}

const Component = {
  controller  : Controller,
  templateUrl: 'views/components/articles.html'
}

export default Component
