class List {

    constructor($http, $scope, $state) {
        'ngInject'

        $scope.articles = []
        $scope.images = []

        $scope.delete = (id) => {
            $http.delete(`/api/auth/mod/articles/${id}`)
                .then(success => {
                    $state.reload()
                })
                .catch(error => {
                    alert(error)
                    $state.go('errors.500')
                })
        }

        this.$onInit = () => {
            $http.get('/api/news/articles')
                .then(articles => {
                    $scope.articles = articles.data
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

        $scope.article = []
        $scope.categories = []
        $scope.god = true
        this.$onInit = () => {
            // Fetch Article
            $http.get(`/api/news/articles/${$state.params.id || 0}`)
                .then(article => {
                    $scope.article = article.data
                })
                .catch(error => {
                    $state.go('errors.500')
                })
            // Fetch Images 
            $http.get('/api/news/images')
                .then(images => {
                    $scope.images = images.data
                })
                .catch(error => {
                    $state.go('errors.500')
                })

            // Fetch Categories
            $http.get('/api/news/categories')
                .then(categories => {
                    let i = 0
                    categories.data.forEach(category => {
                        $scope.categories.push({
                            id: category.id,
                            title: category.title
                        })

                        if ($scope.article.category_id == category.id) {
                            $scope.article.category = $scope.categories[i]
                        }
                        i++
                    })
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }

        $scope.update = () => {
            $scope.article.category_id = $scope.article.category.id
            $http.patch(`/api/auth/mod/articles/${$scope.article.id}`, $scope.article)
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
            $http.delete(`/api/auth/mod/articles/${id}`)
                .then(success => {
                    $state.go('admin.website.news.article.list')
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
        $scope.article = {}
        $scope.categories = []

        this.$onInit = () => {

            // Fetch Images 
            $http.get('/api/news/images')
                .then(images => {
                    $scope.images = images.data
                })
                .catch(error => {
                    $state.go('errors.500')
                })

            // Fetch Categories
            $http.get('/api/news/categories')
                .then(categories => {
                    categories.data.forEach(category => {
                        $scope.categories.push({
                            id: category.id,
                            title: category.title
                        })
                    })
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }

        $scope.create = () => {
            $http.post('/api/auth/mod/articles', $scope.article)
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