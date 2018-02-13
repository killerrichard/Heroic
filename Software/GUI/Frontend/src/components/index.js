import Footer from './other/footer'
import Header from './other/header'

let app = angular.module('heroic.components', [])

app.component('heroicHeader', Header)
app.component('heroicFooter', Footer)

export default app
 
