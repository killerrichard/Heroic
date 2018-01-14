class ClientController
{
    constructor(Configuration, $scope, $http)
    {
      'ngInject'
      this.Configuration     = Configuration
      this.$scope           = $scope
      this.$http            = $http
      this.$onInit          = () => this.fetch()
    }

    fetch () {
      this.$http({ type : 'GET', url : this.Configuration.api + '/auth/client'})
        .then (Client => {
          console.log(Client.data)
          this.$scope.Client = Client.data
        })
        .catch (error => {
          console.log('Error: ', error)
        })
    }

}

let ClientComponent = {
    controller: ClientController,
    templateUrl: 'views/session/user/home/client.html'
}

export default ClientComponent
