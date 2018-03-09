import Frontend from './frontend/index'
let app = angular.module('heroic.controllers', [])

app.controller('Frontend.Guest.Login', Frontend.Guest.Login)
app.controller('Frontend.Guest.Register', Frontend.Guest.Register)

app.controller('Frontend.User.Logout', Frontend.User.Logout)
// New
app.controller('Frontend.User.Community.News.Category.List', Frontend.User.Community.News.Category.List)
app.controller('Frontend.User.Community.News.Category.View', Frontend.User.Community.News.Category.View)

export default app
 
 