class Create {
    constructor($scope, $http, $state) {
        'ngInject'
        $scope.create = () => {
            $http.post('/api/auth/mod/categories', $scope.category)
                .then(msg => {
                    $state.go('admin.website.news.category.list', {
                        message: {
                            type: 'success',
                            text: 'Your changes have been saved'
                        }
                    }, {
                        reload: true
                    })
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }  
    }
}

class List {
    constructor($http, $scope, $state) {
        'ngInject'
        $http.get('/api/news/categories')
            .then(categories => {
                $scope.categories = categories.data
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }
}

class View {
    constructor($http, $scope, $state) {
        'ngInject'
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
}

class Update {
    constructor($http, $state) {
        'ngInject'
        $http.patch(`/api/auth/mod/categories/${$state.params.category.id}`, $state.params.category)
            .then(msg => {
                $state.go('admin.website.news.category.view', {
                    id: $state.params.category.id,
                    message: {
                        type: 'success',
                        text: 'Your changes have been saved'
                    }
                }, {
                    reload: true
                })
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }
}

class Delete {
    constructor($http, $state) {
        'ngInject'
        $http.delete(`/api/auth/mod/categories/${$state.params.id}`)
            .then(success => {
                $state.go('admin.website.news.category.list', {
                    message: {
                        type: 'success',
                        text: 'Category has been deleted'
                    }
                }, {
                    reload: true
                })
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }
}

module.exports = {
    Create,
    List,
    View,
    Update,
    Delete
}