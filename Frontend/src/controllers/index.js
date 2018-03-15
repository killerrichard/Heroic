import Frontend from './frontend/index'
import Backend from './backend/index'
let app = angular.module('heroic.controllers', [])

// Frontend
app.controller('Frontend.Guest.Login', Frontend.Guest.Login)
app.controller('Frontend.Guest.Register', Frontend.Guest.Register)
app.controller('Frontend.User.Logout', Frontend.User.Logout)
//Community
app.controller('Frontend.User.Community.Photos.List', Frontend.User.Community.Photos.List)
app.controller('Frontend.User.Community.Rooms.List', Frontend.User.Community.Rooms.List)
app.controller('Frontend.User.Community.Rooms.View', Frontend.User.Community.Rooms.View)
app.controller('Frontend.User.Community.News.Category.List', Frontend.User.Community.News.Category.List)
app.controller('Frontend.User.Community.News.Category.View', Frontend.User.Community.News.Category.View)
app.controller('Frontend.User.Community.News.Article.View', Frontend.User.Community.News.Article.View)
app.controller('Frontend.User.Community.Staff.List', Frontend.User.Community.Staff.List)
app.controller('Frontend.User.Community.Staff.View', Frontend.User.Community.Staff.View)
//Store
app.controller('Frontend.User.Store', Frontend.User.Store.Controller)
app.controller('Frontend.User.Store.Products.List', Frontend.User.Store.Products.List)
app.controller('Frontend.User.Store.Products.View', Frontend.User.Store.Products.View)
app.controller('Frontend.User.Store.Purchase.Success', Frontend.User.Store.Purchase.Success)

// Backend
app.controller('Backend.Controller', Backend.Controller)
// Settings
app.controller('Backend.Website.Settings', Backend.Website.Settings)
// News
app.controller('Backend.Website.News.Article.List', Backend.Website.News.Article.List)
app.controller('Backend.Website.News.Article.View', Backend.Website.News.Article.View)
app.controller('Backend.Website.News.Article.Create', Backend.Website.News.Article.Create)
app.controller('Backend.Website.News.Category.List', Backend.Website.News.Category.List)
app.controller('Backend.Website.News.Category.View', Backend.Website.News.Category.View)
app.controller('Backend.Website.News.Category.Create', Backend.Website.News.Category.Create)
// Web Store
app.controller('Backend.Website.Store.Product', Backend.Website.Store.Product.Index)
app.controller('Backend.Website.Store.Product.Create', Backend.Website.Store.Product.Create)
app.controller('Backend.Website.Store.Product.List', Backend.Website.Store.Product.List)
app.controller('Backend.Website.Store.Product.View', Backend.Website.Store.Product.View)
app.controller('Backend.Website.Store.Product.Update', Backend.Website.Store.Product.Update)
app.controller('Backend.Website.Store.Product.Delete', Backend.Website.Store.Product.Delete)
export default app