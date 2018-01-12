import HeaderComponent from './header/header.component';
import NavigationComponent from './header/navigation.component';

let app = angular.module('habboapi.components', []);

app.component('heroicHeader', HeaderComponent);
app.component('heroicNavigation', NavigationComponent);


export default app;
