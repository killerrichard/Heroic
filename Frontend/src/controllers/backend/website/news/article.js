class Index {
    constructor($http, $scope) {
        'ngInject'
        // Fetch Categories
        $scope.categories = []
        $http.get('/api/news/categories')
            .then(categories => {
                categories.data.forEach(category => {
                    $scope.categories.push({
                        id: category.id,
                        title: category.title
                    })
                })
            })
        // Fetch Images 
        $http.get('/api/news/images')
            .then(images => {
                $scope.images = images.data
            })

    }
}
class Create {
    constructor($http, $scope, $state) {
        'ngInject'
        $scope.create = () => {
            $http.post('/api/auth/mod/articles', $scope.article)
                .then(msg => {
                    if (!msg.data.error) {
                        $state.go('admin.website.news.article.list', {
                            message: {
                                type: 'success',
                                text: 'Your changed have been saved'
                            }
                        }, {
                            reload: true
                        })
                    } else {
                        $state.go('admin.website.news.article.list', {
                            message: {
                                type: 'failure',
                                text: 'Your changes could not be saved'
                            }
                        }, {
                            reload: true
                        })
                    }
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
        $http.get(`/api/news/articles/${$state.params.id || 0}`)
            .then(article => {
                $scope.article = article.data
                $scope.categories.forEach(category => {
                    if (category.id == $scope.article.category_id) {
                        $scope.article.category = category
                    }
                })

            })
            .catch(error => {
                console.log(error)
                //$state.go('errors.500')
            })
    }
}

class Update {
    constructor($http, $state) {
        'ngInject'
        $state.params.article.category_id = $state.params.article.category.id
        $http.patch(`/api/auth/mod/articles/${$state.params.article.id}`, $state.params.article)
            .then(msg => {
                if (!msg.data.error) {
                    $state.go('admin.website.news.article.view', {
                        id: $state.params.article.id,
                        message: {
                            type: 'success',
                            text: 'Your changes have been saved'
                        }
                    }, {
                        reload: true
                    })
                } else {
                    $state.go('admin.website.news.article.view', {
                        id: $state.params.article.id,
                        message: {
                            type: 'failure',
                            text: 'Your changes could not be saved'
                        }
                    }, {
                        reload: true
                    })
                }
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }
}


class Delete {
    constructor($http, $state) {
        'ngInject'
        $http.delete(`/api/auth/mod/articles/${$state.params.id}`)
            .then(success => {
                $state.go('admin.website.news.article.list', {
                    message: {
                        type: 'success',
                        text: 'That article has been deleted'
                    }
                }, {
                    reload: true
                }) 
            })
            .catch(error => {
                $state.go('admin.website.news.article.list', {
                    message: {
                        type: 'failure',
                        text: 'Your changes could not be saved'
                    }
                }, {
                    reload: true
                })
            })
    }
}




module.exports = {
    Index,
    Create,
    List,
    View,
    Update,
    Delete
}