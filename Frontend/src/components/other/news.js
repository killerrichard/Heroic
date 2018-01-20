class NewsController
{
    constructor(Configuration, $scope, $http)
    {
      'ngInject'
      this.Configuration     = Configuration
      this.$scope           = $scope
      this.$http            = $http
      this.$scope.news      = []
      this.$onInit          = () => this.fetch()
    }

    fetch () {
      this.$http({ type : 'GET', url : this.Configuration.api + '/data/website/news/fetch'})
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
