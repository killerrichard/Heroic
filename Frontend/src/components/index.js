import News from './other/news.component'
import Client from './other/client.component'
import Online from './header/online.component'
import Header from './header/header.component'
import Navigation from './header/navigation.component'

let app = angular.module('habboapi.components', [])

app.component('heroicHeader', Header)
app.component('heroicNavigation', Navigation)
app.component('habboHotelButton', Online)
app.component('habboNews', News)
app.component('habboClient', Client)
export default app
