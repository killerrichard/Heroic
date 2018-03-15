class Controller {
    constructor($scope, $http, $state, $localStorage) {
        'ngInject'
 
        if ($localStorage.session.online==0) {
            this.$onChanges = (changes) => {
                if (changes.product.currentValue !== undefined) {
    
                    $scope.product = changes.product.currentValue
    
                    paypal.Button.render({
    
                        env: 'sandbox',
    
                        style: {
                            size: 'small',
                            color: 'blue',
                            shape: 'pill',
                            label: 'pay',
                            tagline: false
                        },
    
                        client: {
                            sandbox: 'ARoTPsvd9CyaqvU1fihP_VdWpQvWwblXVrQs_xymqEIJinf88fD5wA20SQtYWRvjT5yUgkpcWQRtNirf',
                            production: 'AX1KfmFeygWAKjg72h6hExurJR5XCXKuoVlWgMgcfgSKAB9eDtZdK28akfeqbCEKMeA0BnLK0r9zYZmD'
                        },
    
                        payment: function (data, actions) {
                            return actions.payment.create({
                                transactions: [{
                                    amount: {
                                        total:  $scope.product.price,
                                        currency: 'USD'
                                    }
                                }]
                            }) 
                        }, 
    
                        commit: true,
    
                        onAuthorize: function (data, actions) {
                            return actions.payment.execute().then(function (response) {
                                $state.go('user.store.history.purchase.success', {
                                    product: $scope.product,
                                    purchase: response
                                }, {
                                    location: false,
                                    inherit: false
                                })
                            })
                        },
    
                        onCancel: function (data) {
                            $state.go('user.store.purchase.failed')
                        }
    
                    }, '#paypalButton')
                }
            }
        }
    }


}

const Component = {
    bindings: {
        "product": "<"
    },
    controller: Controller,
    templateUrl: 'views/frontend/components/store/payment/button.html'
}

export default Component