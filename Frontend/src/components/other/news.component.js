class NewsController
{
    constructor(AppConstants, $scope, $http)
    {
      'ngInject'
      this.AppConstants     = AppConstants
      this.$scope           = $scope
      this.$http            = $http
      this.$scope.news      = []
      this.$onInit          = () => this.fetch()
    }

    fetch () {
      this.$http({ type : 'GET', url : this.AppConstants.api + '/data/website/news/fetch'})
        .then (news => {
          console.log(news.data)
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
