export default class Session
{
    constructor($localStorage, $http, $q, $rootScope)
    {
        'ngInject'

        this.$localStorage    = $localStorage
        this.$http			      = $http
        this.$q			          = $q
        this.$rootScope       = $rootScope
    }

    createSession()
    {
      return this.$http.get('/api/auth/session/fetch')
        .then (session => {
          this.$localStorage.session  = session.data
          this.$rootScope.session     = session.data
          return this.$q.resolve(this.$localStorage.session)
        })
        .catch (error => {
          this.$rootScope.session = undefined
          return this.$q.reject('Not authenticated')
        })
    }

    validateSession()
    {
      return this.$http.get('/api/auth/session/fetch')
        .then (session => {
          return this.$q.resolve(this.$localStorage.session)
        })
        .catch (error => {
         this.$rootScope.session = undefined
          return this.$q.reject('Not authenticated')
        })
    }

    destroySession()
    {
      return this.$http.get('/api/auth/session/logout')
        .then (res => {
          this.$localStorage.$reset()
          this.$rootScope.session = null
          return this.$q.resolve(null)
        })
        .catch((res) => {
          this.$localStorage.$reset()
          this.$rootScope.session = null
          return this.$q.resolve(null)
        })
    }
}
