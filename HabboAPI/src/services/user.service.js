export default class UserService
{
    constructor(AppConstants, $localStorage, $http, $q)
    {
        'ngInject';

        this.AppConstants 	= AppConstants;
        this.$localStorage  = $localStorage;
        this.$http 		    = $http;
        this.$q 			= $q;
    }

    addUser(username, email, password)
    {
        if(username == '' || null || email == '' || null || password == '' || null) return this.$q.reject('invalid_paramemters');

        return this.$http.post(this.AppConstants.api + '/hotel/user/addUser', {username: username, password: password, email: email})

        .then((res) =>
        {
            return this.$q.resolve(null);
        })

        .catch((res) =>
        {
            return this.$q.reject((res.data.error == undefined || null) ? 'invalid_user' : res.data.error);
        });
    }
}