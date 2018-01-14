export default class Create
{
    constructor(Configuration, $scope, $http)
    {
        'ngInject'
        this.Configuration      = Configuration
        this.$scope             = $scope
        this.$http              = $http
        this.$onInit            = this.load()
        this.$scope.data        = {}
        this.$scope.videos      = []
        this.$scope.playlist    = []

        this.$scope.search        = function ()
        {
          $http.get('https://www.googleapis.com/youtube/v3/search', { params: { key: "AIzaSyC-GtyhHyXQ1qlQhk-SajEFQMJROHAxDrA", type: 'video', maxResults: '4', pageToken: $scope.nextPage ? $scope.nextPage : '', part: 'id,snippet', fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken', q: $scope.data.title } })
            .then (results => {
              $scope.videos = results.data.items
            })
            .catch (error => {
              $scope.data.message = 'Please try again later'
            })
          }

          this.$scope.play             = function (id, title, image)
          {
            $scope.data   = []
            $scope.videos = []

            const data = {
              video_id    : id,
              video_title : title,
              video_image : image
            }

            $http.post(Configuration.api + '/data/website/radio/add', data)
              .then (result => {
                $scope.playlist.push(result.data)
              })
              .catch (error => {
                $scope.data.message = 'Something went wrong'
              })

          }
    }

    load ()
    {
      this.$http.get(this.Configuration.api + '/data/website/radio/fetch')
        .then (results => {
          this.$scope.playlist = results.data
        })
        .catch (error => {
          this.$scope.data.message = 'Something went wrong'
        })
    }

}
