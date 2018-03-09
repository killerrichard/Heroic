import Frontend from './frontend/index'

let app = angular.module('heroic.controllers', [])

app.controller('Frontend.Guest.Login', Frontend.Guest.Login)
app.controller('Frontend.Guest.Register', Frontend.Guest.Register)

app.controller('Frontend.User.Logout', Frontend.User.Logout)
app.controller('Frontend.User.Community.News.Article', Frontend.User.Community.News.Article)
app.controller('Frontend.User.Community.News.Category', Frontend.User.Community.News.Category)

export default app
 
