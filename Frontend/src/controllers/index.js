import Frontend from './frontend/index'
import Backend from './backend/index'
let app = angular.module('heroic.controllers', [])

// Frontend
app.controller('Frontend.Guest.Login', Frontend.Guest.Login)
app.controller('Frontend.Guest.Register', Frontend.Guest.Register)
app.controller('Frontend.User.Logout', Frontend.User.Logout)
app.controller('Frontend.User.Community.Photos.List', Frontend.User.Community.Photos.List)
app.controller('Frontend.User.Community.Rooms.List', Frontend.User.Community.Rooms.List)
app.controller('Frontend.User.Community.Rooms.View', Frontend.User.Community.Rooms.View)
app.controller('Frontend.User.Community.News.Category.List', Frontend.User.Community.News.Category.List)
app.controller('Frontend.User.Community.News.Category.View', Frontend.User.Community.News.Category.View)
app.controller('Frontend.User.Community.News.Article.View', Frontend.User.Community.News.Article.View)
app.controller('Frontend.User.Community.Staff.List', Frontend.User.Community.Staff.List)
app.controller('Frontend.User.Community.Staff.View', Frontend.User.Community.Staff.View)
app.controller('Frontend.User.Store.Products.List', Frontend.User.Store.Products.List)
app.controller('Frontend.User.Store.Products.View', Frontend.User.Store.Products.View)
app.controller('Frontend.User.Store.Purchase.Success', Frontend.User.Store.Purchase.Success)

// Backend
app.controller('Backend.Website.Settings', Backend.Website.Settings)
app.controller('Backend.Website.News.Article.List', Backend.Website.News.Article.List) 
app.controller('Backend.Website.News.Article.View', Backend.Website.News.Article.View) 
app.controller('Backend.Website.News.Article.Create', Backend.Website.News.Article.Create) 
app.controller('Backend.Website.News.Category.List', Backend.Website.News.Category.List)
app.controller('Backend.Website.News.Category.View', Backend.Website.News.Category.View)
app.controller('Backend.Website.News.Category.Create', Backend.Website.News.Category.Create)
export default app   
  
 