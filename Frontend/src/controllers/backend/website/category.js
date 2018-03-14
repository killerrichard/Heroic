class List {

    constructor($http, $scope, $state) {
        'ngInject'

        this.$onInit = () => {
            $http.get('/api/news/categories')
                .then(categories => {
                    $scope.categories = categories.data
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }
    }
}

class View {

    constructor($http, $scope, $state) {
        'ngInject'

        $scope.message = {}

        this.$onInit = () => {
            $http.get(`/api/news/categories/${$state.params.id || 0}`)
                .then(category => {
                    if (!category.data.error) {
                        $scope.category = category.data
                    } else {
                        $state.go('admin.website.news.category.list')
                    }
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }

        $scope.update = () => {
            $http.patch(`/api/auth/mod/categories/${$scope.category.id}`, $scope.category)
                .then(msg => {
                    if (!msg.data.error) {
                        $scope.message = {
                            type: 'neutral',
                            text: 'Your changed have been saved'
                        }
                    } else {
                        $scope.message = {
                            type: 'fatal',
                            text: 'Could not save at this time'
                        }
                    }
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }

        $scope.delete = (id) => {
            $http.delete(`/api/auth/mod/categories/${id}`)
                .then(success => {
                    $state.go('admin.website.news.category.list')
                })
                .catch(error => {
                    alert(error)
                    $state.go('errors.500')
                })
        }


    }
}

class Create {

    constructor($http, $scope, $state) {
        'ngInject'


        $scope.message = {}
        $scope.category = {}

        $scope.create = () => {
            $http.post('/api/auth/mod/categories', $scope.category)
                .then(msg => {
                    if (!msg.data.error) {
                        $scope.message = {
                            type: 'neutral',
                            text: 'Your changed have been saved'
                        }
                    } else {
                        $scope.message = {
                            type: 'fatal',
                            text: 'Could not save at this time'
                        }
                    } 
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }

    }
}

module.exports = {
    List,
    View,
    Create
}