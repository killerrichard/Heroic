import News from './other/news'
import Footer from './other/footer'
import Online from './header/online'
import Header from './header/header'
import Navigation from './header/navigation'

let app = angular.module('heroic.components', [])

app.component('heroicHeader', Header)
app.component('heroicFooter', Footer)
app.component('heroicNavigation', Navigation)
app.component('habboOnline', Online)
app.component('habboNews', News)

export default app
