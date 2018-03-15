module.exports = {
    Settings:  require('./settings').default,
    News: {
        Article: require('./news/article'),
        Category: require('./news/category')
    },
    Store: {
        Product: require('./store/product')
    }
} 