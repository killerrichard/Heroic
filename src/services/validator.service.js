export default class ValidatorService
{
    constructor(AppConstants, $http, $q)
    {
        'ngInject';

        this.AppConstants 	= AppConstants;
        this.$http 		    = $http;
        this.$q 			= $q;
    }

    validateUsername(username)
    {
        if(username == '' || null) return this.$q.reject('invalid_parameters');

        return this.$http.post(this.AppConstants.api + '/hotel/validators/validateUsername', {username: username})

        .then((res) =>
        {
            return this.$q.resolve(null);
        })

        .catch((res) =>
        {
            return this.$q.reject((res.data.error == undefined || null) ? 'invalid_username' : res.data.error);
        });
    }

    validateEmail(email)
    {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email == '' || null) return this.$q.reject('invalid_parameters');

        if(regex.test(email) == false) return this.$q.reject('invalid_email');

        return this.$http.post(this.AppConstants.api + '/hotel/validators/validateEmail', {email: email})

        .then((res) =>
        {
            return this.$q.resolve(null);
        })

        .catch((res) =>
        {
            return this.$q.reject((res.data.error == undefined || null) ? 'invalid_email' : res.data.error);
        });
    }
}