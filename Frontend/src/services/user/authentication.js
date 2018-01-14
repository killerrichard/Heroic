export default class Authentication
{
    constructor(Configuration, SessionService, $http, $q, $localStorage)
    {
        'ngInject'

        this.Configuration     = Configuration
        this.SessionService   = SessionService
        this.$http 		        = $http
        this.$q 			        = $q
        this.$localStorage    = $localStorage
    }


    login (username, password)
    {

      const data = {
        username : username,
        password : password
      }

      return this.$http.post(this.Configuration.api + '/auth/login', data)
        .then (res => {
          this.$localStorage.token = res.data
          this.SessionService.createSession()
        })
        .catch (error => {
          return $q.reject('failed')
        })
    }

}
