export default class Session
{
    constructor(AppConstants, $localStorage, $http, $state, $q, $rootScope)
    {
        'ngInject'

        this.AppConstants	= AppConstants
        this.$localStorage  = $localStorage
        this.$http			= $http
        this.$state         = $state
        this.$q			    = $q
        this.$rootScope     = $rootScope
    }

    createSession()
    {
        return this.$http.get(this.AppConstants.api + '/auth/session/fetch')

        .then((res) =>
        {
          console.log('Success:' + res)
            this.$localStorage.$reset()

            if(res.data.session == undefined || res.data.session.length == 0 || null) return this.$q.reject('invalid_session')

            this.$localStorage.currentUser    = res.data.session
            this.$rootScope.currentUser       = res.data.session
            return this.$q.resolve(this.$localStorage.currentUser)
        })

        .catch((res) =>
        {
          console.log('Error:' + res)
            this.$localStorage.$reset()
            this.$rootScope.currentUser = null
            return this.$q.reject(res.data.error)
        })
    }

    validateSession()
    {
    this.$rootScope.currentUser = this.$localStorage.currentUser
     return this.$q.resolve(this.$localStorage.currentUser)
    }

    destroySession()
    {
        return this.$http.get(this.AppConstants.api + '/auth/session/logout')

        .then((res) =>
        {
            this.$localStorage.$reset()
            this.$rootScope.currentUser = null

            return this.$q.resolve(null)
        })

        .catch((res) =>
        {
            this.$localStorage.$reset()
            this.$rootScope.currentUser = null

            return this.$q.resolve(null)
        })
    }
}
