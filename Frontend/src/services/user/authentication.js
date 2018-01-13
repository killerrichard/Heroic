export default class Authentication
{
    constructor(AppConstants, SessionService, $http, $q)
    {
        'ngInject'

        this.AppConstants   = AppConstants
        this.SessionService = SessionService
        this.$http 		    = $http
        this.$q 			= $q
    }

    login(username, password)
    {
        if(username == '' || null || password == '' || null) return this.$q.reject('invalid_parameters')

        return this.$http.post(this.AppConstants.api + '/auth/login', {username: username, password: password})

        .then((res) =>
        {
            if(res.data.session == undefined || res.data.session.length == 0 || null) return this.$q.reject('invalid_session')
            return this.SessionService.createSession()
        })

        .catch((res) =>
        {
            return this.$q.reject(res.data.error)
        })
    }
}
