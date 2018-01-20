class NewsController
{
    constructor($scope, $http)
    {
      'ngInject'
      this.$scope           = $scope
      this.$http            = $http
      this.$scope.news      = []
      this.$onInit          = () => this.fetch()
    }

    fetch () {
      this.$http({ type : 'GET', url : '/api/data/website/news/fetch'})
        .then (news => {
          this.$scope.news = news.data
        })
        .catch (error => {
          console.log('Error: ', error)
        })
    }

}

let NewsComponent = {
    controller: NewsController,
    templateUrl: 'views/common/components/news.html'
}

export default NewsComponent
