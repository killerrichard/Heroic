import Frontend from './frontend/index'

let app = angular.module('heroic.components', [])

app.component('habboHeaderLarge', Frontend.Header.Large)
app.component('habboHeaderSmall', Frontend.Header.Small)
app.component('habboNavigation', Frontend.Navigation)
app.component('habboUserMenu', Frontend.Header.User)
app.component('habboTabs', Frontend.Tabs)
app.component('habboFooter', Frontend.Footer)
export default app
 
