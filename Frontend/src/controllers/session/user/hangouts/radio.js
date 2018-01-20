export default class Create
{
    constructor ($scope, $http, $localStorage, $rootScope)
    {
      'ngInject'
      // Variables
      this.$scope             = $scope
      this.$http              = $http
      this.$localStorage      = $localStorage
      this.$rootScope         = $rootScope
      this.socket             = $rootScope.socket
      this.$scope.data        = {}
      this.$scope.current     = {}

      // Socket Configuration
      this.socket.emit('join_room', 'radio')

      this.socket.on('room_loaded', (data => {
        this.$scope.ready         = true
      }))

      // Socket Interactions
      this.socket.on('user_joined', (data => {
        this.$scope.ready         = true
        this.$scope.current.users = data
      }))

      this.socket.on('user_left', (data => {
        this.$scope.current.users = data
      }))

      this.socket.on('welcome', (video => {
        if (video) {
          this.$scope.current.song = video
          document.getElementById('radio').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1&start=' + video.start
        } else {
          this.$scope.current.song.title = 'Nothing is playing'
        }
      }))

      this.socket.on('load_playlist', playlist => {
        console.log(playlist)
        this.$scope.current.playlist = playlist
      })

      this.socket.on('change_song', video => {
        this.$scope.current.song = video
        document.getElementById('radio').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1'
      })

      this.socket.on('song_ended', video => {
        document.getElementById('radio').src = ''
        this.$scope.current.song.title = 'Nothing is playing'
      })

      this.$scope.search = function () {
        $http.get('https://www.googleapis.com/youtube/v3/search', { params: { key: "AIzaSyC-GtyhHyXQ1qlQhk-SajEFQMJROHAxDrA", type: 'video', maxResults: '6', pageToken: $scope.nextPage ? $scope.nextPage : '', part: 'id,snippet', videoCategoryId : 10, fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken', q: $scope.current.data.title } })
          .then (results => {
            $scope.current.search_results = results.data.items
          })
          .catch (error => {
            $scope.data.message = 'Please try again later'
          })
        }

        this.$scope.play  = function (id, title, image) {
          $http.get('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyC-GtyhHyXQ1qlQhk-SajEFQMJROHAxDrA&part=snippet,contentDetails')
            .then (result => {

              const data = {
                id        : id,
                title     : title,
                image     : image,
                duration  : result.data.items[0].contentDetails.duration,
                user      : {
                  username  : $localStorage.session.username,
                  look      : $localStorage.session.look
                }
              }
              this.socket.emit('modify_playlist', data)
              $scope.current.search_results = {}
              $scope.current.data           = {}

            })
            .catch (error => {
              $scope.current.data.message = 'Please try again later'
            })
          }

    }

}
