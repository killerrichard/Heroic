import Frontend from './frontend/index'
let app = angular.module('heroic.controllers', [])

app.controller('Frontend.Guest.Login', Frontend.Guest.Login)
app.controller('Frontend.Guest.Register', Frontend.Guest.Register)

app.controller('Frontend.User.Logout', Frontend.User.Logout)

// Community
app.controller('Frontend.User.Community.Photos.List', Frontend.User.Community.Photos.List)
app.controller('Frontend.User.Community.Rooms.List', Frontend.User.Community.Rooms.List)
app.controller('Frontend.User.Community.Rooms.View', Frontend.User.Community.Rooms.View)
app.controller('Frontend.User.Community.News.Category.List', Frontend.User.Community.News.Category.List)
app.controller('Frontend.User.Community.News.Category.View', Frontend.User.Community.News.Category.View)
app.controller('Frontend.User.Community.News.Article.View', Frontend.User.Community.News.Article.View)
app.controller('Frontend.User.Community.Staff.List', Frontend.User.Community.Staff.List)
app.controller('Frontend.User.Community.Staff.View', Frontend.User.Community.Staff.View)
export default app  
 
 