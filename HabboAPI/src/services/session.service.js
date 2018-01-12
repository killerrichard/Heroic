export default class SessionService
{
    constructor(AppConstants, $localStorage, $http, $state, $q, $rootScope)
    {
        'ngInject';

        this.AppConstants	= AppConstants;
        this.$localStorage  = $localStorage;
        this.$http			= $http;
        this.$state         = $state;
        this.$q			    = $q;
        this.$rootScope     = $rootScope;
    }

    createSession()
    {
        return this.$http.get(this.AppConstants.api + '/authentication/session/getSession')

        .then((res) =>
        {
            this.$localStorage.$reset();

            if(res.data.session == undefined || res.data.session.length == 0 || null) return this.$q.reject('invalid_session');
            
            this.$localStorage.currentUser    = res.data.session;
            this.$rootScope.currentUser       = res.data.session;

            return this.$q.resolve(this.$localStorage.currentUser);
        })

        .catch((res) =>
        {
            this.$localStorage.$reset();
            this.$rootScope.currentUser = null;

            if(res.data.error == 'user_banned') this.$state.go('banned', {ban: res.data.ban});

            return this.$q.reject(res.data.error);
        });
    }

    validateSession()
    {
        if(this.$localStorage.currentUser == undefined || this.$localStorage.currentUser.length == 0 || null) return this.$q.reject('invalid_session');

        return this.$http.get(this.AppConstants.api + '/authentication/session/getSession')

        .then((res) =>
        {
            if(res.data.session == undefined || res.data.session.length == 0 || null) return this.$q.reject('invalid_session');
            
            if(res.data.session.user_session != this.$localStorage.currentUser.user_session) return this.$q.reject('invalid_session');

            angular.forEach(res.data.session.user_info.settings, (value, key) =>
            {
                if(key == 'id' || key == 'user_id') return;

                res.data.session.user_info.settings[key] = (value == '0') ? false : true;
            });

            this.$localStorage.currentUser    = res.data.session;
            this.$rootScope.currentUser       = res.data.session;

            return this.$q.resolve(this.$localStorage.currentUser);
        })

        .catch((res) =>
        {
            this.$localStorage.$reset();
            this.$rootScope.currentUser = null;

            return this.$q.reject(res.data.error);
        });
    }

    destroySession()
    {
        return this.$http.get(this.AppConstants.api + '/authentication/session/destroySession')

        .then((res) =>
        {
            this.$localStorage.$reset();
            this.$rootScope.currentUser = null;

            return this.$q.resolve(null);
        })

        .catch((res) =>
        {
            this.$localStorage.$reset();
            this.$rootScope.currentUser = null;
            
            return this.$q.resolve(null);
        });
    }
}