class Success {

    constructor($state, $localStorage, $http) {
        'ngInject'

        let data = {
            user: $localStorage.session,
            product: $state.params.product,
            purchase : $state.params.purchase
        }

        $http.post('/api/auth/store/purchases', data)
            .then(msg => {
                //
            }) 
            .catch(error => {
                $state.go('errors.500')
            })
    }
 
}

module.exports = {
    Success
} 