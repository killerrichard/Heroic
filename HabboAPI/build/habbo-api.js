(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _constants = require('./config/constants.json');

var _constants2 = _interopRequireDefault(_constants);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _run = require('./config/run');

var _run2 = _interopRequireDefault(_run);

require('./components');

require('./controllers');

require('./directives');

require('./filters');

require('./services');

require('./config/template-cache');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requires = ['ngAnimate', 'ngAria', 'ngMessages', 'ngMaterial', 'ngSanitize', 'ui.router', 'ngStorage', 'app.templates', 'habboapi.components', 'habboapi.controllers', 'habboapi.directives', 'habboapi.filters', 'habboapi.services'];

window.app = angular.module('habboapi', requires);

angular.module('habboapi').constant('AppConstants', _constants2.default);
angular.module('habboapi').config(_config2.default);
angular.module('habboapi').run(_run2.default);

angular.bootstrap(document, ['habboapi'], { strictDi: true });

},{"./components":4,"./config/config":5,"./config/constants.json":6,"./config/run":8,"./config/template-cache":10,"./controllers":13,"./directives":16,"./filters":20,"./services":22}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HeaderComponent = {
  templateUrl: 'views/common/components/header/header.html'
};

exports.default = HeaderComponent;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navigation = require('../../config/navigation.json');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationController = function () {
    NavigationController.$inject = ["$state", "$scope"];
    function NavigationController($state, $scope) {
        'ngInject';

        var _this = this;

        _classCallCheck(this, NavigationController);

        this.$state = $state;
        this.$scope = $scope;

        this.$scope.navigationList = [];
        this.$scope.loadedStates = $state.get();

        this.$onInit = function () {
            _this.buildNavigation();
        };
    }

    _createClass(NavigationController, [{
        key: 'buildNavigation',
        value: function buildNavigation() {
            var _this2 = this;

            if (_navigation2.default.navigation == null || _navigation2.default.navigation.length == 0) return;

            angular.forEach(_navigation2.default.navigation, function (item, key) {
                if (item.disabled == true) return;

                angular.forEach(_this2.$scope.loadedStates, function (state, key) {
                    if (state.name != item.state) return;

                    item.state = state;
                });

                if (item.subItems == undefined || item.subItems.length == 0) {
                    return _this2.$scope.navigationList.push(item);
                }

                item.children = [];

                angular.forEach(item.subItems, function (subItem, key) {
                    if (subItem.disabled == true) return;

                    angular.forEach(_this2.$scope.loadedStates, function (state, key) {
                        if (state.name != subItem.state) return;

                        subItem.state = state;

                        item.children.push(subItem);
                    });
                });

                delete item.subItems;

                if (item.children.length == 0) return;

                return _this2.$scope.navigationList.push(item);
            });
        }
    }]);

    return NavigationController;
}();

var NavigationComponent = {
    controller: NavigationController,
    templateUrl: 'views/common/components/header/navigation.html'
};

exports.default = NavigationComponent;

},{"../../config/navigation.json":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = require('./header/header.component');

var _header2 = _interopRequireDefault(_header);

var _navigation = require('./header/navigation.component');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = angular.module('habboapi.components', []);

app.component('heroicHeader', _header2.default);
app.component('heroicNavigation', _navigation2.default);

exports.default = app;

},{"./header/header.component":2,"./header/navigation.component":3}],5:[function(require,module,exports){
'use strict';

Config.$inject = ["$locationProvider", "$mdThemingProvider", "$urlRouterProvider", "$stateProvider", "$mdAriaProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Config;

var _states = require('./states.json');

var _states2 = _interopRequireDefault(_states);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Config($locationProvider, $mdThemingProvider, $urlRouterProvider, $stateProvider, $mdAriaProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');

  $urlRouterProvider.otherwise('/login');

  $mdThemingProvider.disableTheming();

  if (_states2.default != null || _states2.default.length != 0) {
    angular.forEach(_states2.default, function (value, key) {
      $stateProvider.state(value.name, value);
    });
  }

  $mdAriaProvider.disableWarnings();
}

},{"./states.json":9}],6:[function(require,module,exports){
module.exports={"api":"http://localhost/api","siteName":"HabboAPI","siteLink":"http://localhost","siteImages":{"images":"http://localhost/assets/images","badges":"http://localhost/assets/c_images/album1584","groupBadges":"http://localhost/assets/c_images/Badgeparts/generated","avatars":"http://avatar-retro.com/habbo-imaging/avatarimage?figure="}}

},{}],7:[function(require,module,exports){
module.exports={
	"navigation": [{
			"name": "current_username",
			"icon": "home",
			"state": "me",
			"url": "me.home",
			"sort": 1,
			"disabled": false,
			"subItems": [
				{
					"name": "What's Up",
					"state": "me.home",
					"sort": 1,
					"disabled": false
				},
				{
					"name": "Website Updates",
					"state": "me.about",
					"sort": 2,
					"disabled": false
				}
			]
		},
		{
			"name": "Community",
			"icon": "users",
			"state": "community",
			"url": "community.home",
			"sort": 2,
			"disabled": false,
			"subItems": [
				{
					"name": "Home",
					"state": "community.home",
					"sort": 1,
					"disabled": false
				},
				{
					"name": "Photos",
					"state": "community.photos",
					"sort": 2,
					"disabled": false
				},
				{
					"name": "Online",
					"state": "community.online",
					"sort": 3,
					"disabled": false
				},
				{
					"name": "News",
					"state": "community.categories",
					"url": "community.categories",
					"sort": 4,
					"disabled": false
				},
				{
					"name": "Leaderboards",
					"state": "community.leaderboards",
					"sort": 5,
					"disabled": false
				},
				{
					"name": "Staff",
					"state": "community.staff",
					"sort": 6,
					"disabled": false
				}
			]
		}
	]
}

},{}],8:[function(require,module,exports){
'use strict';

Run.$inject = ["AppConstants", "SessionService", "$window", "$state", "$rootScope"];
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Run;
function Run(AppConstants, SessionService, $window, $state, $rootScope) {
    'ngInject';

    $rootScope.appConfig = AppConstants;
    $rootScope.state = $state;

    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        return SessionService.validateSession().then(function (session) {
            if (next.guestOnly) {
                event.preventDefault();
                return $state.go('me');
            }

            return next;
        }).catch(function (err) {
            $rootScope.currentUser = null;

            if (next.loginRequired == true) {
                event.preventDefault();
                return $state.go('login');
            }

            return next;
        });
    });

    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, prev, prevParams) {

        $window.scrollTo(0, 0);

        $rootScope.previousState = prev.name == undefined || prev.name == '' || null ? $state.get('login') : prev;
        $rootScope.previousParams = prevParams;
        $rootScope.currentState = to;

        $rootScope.goBack = function () {
            return $state.go($rootScope.previousState.name, $rootScope.previousParams);
        };
    });
}

},{}],9:[function(require,module,exports){
module.exports={
	"login": {
		"name": "login",
		"url": "/login",
		"templateUrl": "views/session/guest/login.html",
		"controller": "LoginController",
		"guestOnly": true
	},

	"register": {
		"name": "register",
		"url": "/register",
		"templateUrl": "views/session/guest/register.html",
		"controller": "RegisterController",
		"guestOnly": true
	},

	"me": {
		"abstract": true,
		"name": "me",
		"template": "<div ui-view></div>",
		"loginRequired": true
	},

	"me.home": {
		"name": "me.home",
		"url": "/me",
		"templateUrl": "views/session/user/home/me.html",
		"controller": "MeController",
		"loginRequired": true
	},

	"me.about": {
		"name": "me.about",
		"url": "/about",
		"templateUrl": "views/session/user/home/about.html",
		"controller": "AboutController",
		"loginRequired": true
	},


	"me.settings": {
		"name": "me.settings",
		"url": "/settings",
		"templateUrl": "views/session/user/home/settings.html",
		"controller": "SettingsController",
		"loginRequired": true
	},


	"community": {
		"abstract": true,
		"name": "community",
		"url": "/community",
		"template": "<div ui-view></div>"
	},

	"community.home": {
		"name": "community.home",
		"url": "/home",
		"template": "welcome to the community homepage"
	},

	"community.photos": {
		"name": "community.photos",
		"url": "/community/photos",
		"template": "welcome to the community homepage"
	},

	"community.online": {
		"name": "community.online",
		"url": "/community/online",
		"template": "welcome to the community homepage"
	},

	"community.categories": {
		"name": "community.categories",
		"url": "/community/categories",
		"template": "welcome to the community homepage"
	},

	"community.leaderboards": {
		"name": "community.leaderboards",
		"url": "/community/leaderboards",
		"template": "welcome to the community homepage"
	},

	"community.staff": {
		"name": "community.staff",
		"url": "/community/staff",
		"template": "welcome to the community homepage"
	}


}

},{}],10:[function(require,module,exports){
'use strict';

angular.module('app.templates', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('views/index.html', '<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en_US" lang="en_US">\n\n<head>\n    <base href="/">\n    <title>{{ website.name }} - {{ website.page }}</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">\n    <meta http-equiv="content-type" content="text/html; charset=utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n    <link rel="stylesheet" type="text/css" href="assets/css/app.css" />\n    <link rel="stylesheet" type="text/css" href="assets/css/override.css" />\n    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css" />\n</head>\n\n<body class="app" ng-cloak ng-class="{\'show-client\': $root.state.includes(\'client\')}">\n    <div class="content">\n      <heroic-header ng-hide="$root.currentUser == undefined"></heroic-header>\n        <main ui-view></main>\n    </div>\n    <habbo-footer>\n        <footer class="wrapper">\n            <div class="footer__media">\n                <p class="footer__media__label">Follow Habbo</p>\n                <ul>\n                    <link>\n                    <li class="footer__media__item">\n                        <a class="footer__media__link"><i class="icon icon--facebook"></i></a>\n                    </li>\n                    <li class="footer__media__item">\n                        <a class="footer__media__link"><i class="icon icon--twitter"></i></a>\n                    </li>\n                    <li class="footer__media__item">\n                        <a class="footer__media__link"><i class="icon icon--youtube"></i></a>\n                    </li>\n                    <li class="footer__media__item">\n                        <a class="footer__media__link"><i class="icon icon--rss"></i></a>\n                    </li>\n                </ul>\n            </div>\n            <div class="footer__content">\n                <ul class="footer__nav">\n                    <li class="footer__nav__item">\n                        <a sref="/about" class="footer__nav__link">About CMS</a>\n                    </li>\n                </ul>\n                <p class="footer__copyright"> Powered by Heroic Framework by LeChris <br> Built with Node and Angular <br> Extended from HabboAPI by Bill</p>\n                <a id="footer_logo"></a>\n            </div>\n        </footer>\n    </habbo-footer>\n    <script type="text/javascript" src="vendor.js"></script>\n    <script type="text/javascript" src="habbo-api.js"></script>\n</body>\n\n</html>\n');
  $templateCache.put('views/messages.html', '<ng-message when="invalidUsername" class="error">Invalid Username</ng-message>\n<ng-message when="invalidUsernameAvailability" class="error">That username is not available</ng-message>\n<ng-message when="invalidEmail" class="error">Please enter a valid email address</ng-message>\n<ng-message when="invalidEmailAvailability" class="error">That email address is already registered</ng-message>\n<ng-message when="invalidEmailAvailability2" class="error">That email address is already registered</ng-message>\n<ng-message when="invalidLogin" class="error">Invalid Login</ng-message>\n<ng-message when="required" class="error">This field is required</ng-message>\n<ng-message when="maxlength" class="error">This field has reached the maximum length</ng-message>');
  $templateCache.put('views/session/guest/login.html', '  <habbo-header-large active="home">\n    <div habbo-sticky-header="" class="header__top sticky-header sticky-header--top">\n        <div class="wrapper">\n            <div class="header__top__content">\n                <div ng-init="toggle = false;">\n                    <button ng-click="toggle = true;" ng-disabled="toggle" ng-hide="toggle" class="header__top__toggle">Login</button>\n                    <div ng-show="toggle" class="header__login-form ng-hide">\n                        <habbo-login-form>\n                            <form name="loginForm" class="login-form__form" ng-submit="login()">\n                                <fieldset class="form__fieldset login-form__fieldset">\n                                    <div class="form__field">\n                                        <input name="username" type="text" required="" placeholder="Username" class="form__input login-form__input" ng-model="loginFormDetails.username" ng-change="loginForm.username.$setValidity(\'invalidLogin\', true)" autofocus required>\n                                    </div>\n                                </fieldset>\n                                <fieldset class="form__fieldset login-form__fieldset">\n                                    <div class="form__field">\n                                        <input name="password" type="password" placeholder="Password" class="form__input login-form__input" ng-model="loginFormDetails.password" required>\n                                    </div>\n                                </fieldset>\n                                <button type="submit" class="login-form__button" ng-disabled="loginForm.$invalid">Let\'s go!</button>\n                            </form>\n                            <div class="login-form__social" style="color:white;">\n                              {{ website.online }} users online\n                            </div>\n                        </habbo-login-form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="header__content">\n        <habbo-register-banner>\n            <div class="register-banner__hotel"></div>\n            <div class="register-banner__wrapper">\n                <div class="register-banner__register">\n                    <h1 class="register-banner__logo">Habbo</h1>\n                    <h2 class="register-banner__title">Make friends &amp; chat with millions in a virtual world</h2>\n                    <a ui-sref="register" class="register-banner__button">Join for free!</a>\n                </div>\n            </div>\n        </habbo-register-banner>\n    </div>\n    <header class="header__wrapper wrapper">\n      <a ui-sref="" class="header__habbo__logo"><h1 class="header__habbo__name" id="ga-linkid-habbo-large">Habbo</h1></a>\n    </header>\n    <habbo-navigation active="home">\n        <nav class="navigation">\n            <ul class="navigation__menu">\n            </ul>\n        </nav>\n    </habbo-navigation>\n</habbo-header-large>\n<div class="content">\n    <main>\n');
  $templateCache.put('views/session/guest/register.html', '<habbo-registration-form>\n    <h1>Join for free!</h1>\n    <form method="post" class="form form--left registration-form">\n\n      <habbo-email-address>\n          <fieldset class="form__fieldset">\n              <div>\n                <label class="form__label">Username</label>\n                  <p>This is how you will be recognized in game.</p>\n              </div>\n              <div class="form__field">\n                <input name="username" type="text" autocomplete="off" class="form__input">\n              </div>\n          </fieldset>\n      </habbo-email-address>\n\n      <habbo-email-address>\n          <fieldset class="form__fieldset">\n              <div>\n                <label class="form__label">Email</label>\n                  <p>You\'ll need to use this email address to reset your password in the future.</p>\n              </div>\n              <div class="form__field">\n                <input name="mail" type="email" autocomplete="off" class="form__input">\n              </div>\n          </fieldset>\n      </habbo-email-address>\n\n      <habbo-password-new>\n          <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\n            <label class="form__label">Password</label>\n              <p>Use at least 6 characters. Include at least one letter and at least one number or special character.</p>\n              <div class="form__field">\n                <input name="password" type="password" autocomplete="off" class="form__input">\n                  <i class="password-toggle-mask__icon"></i>\n              </div>\n          </fieldset>\n          <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\n            <label class="form__label">Repeat Password</label>\n              <div class="form__field">\n                <input name="password_rep" type="password" autocomplete="off" class="form__input">\n                  <i class="password-toggle-mask__icon"></i>\n              </div>\n          </fieldset>\n      </habbo-password-new>\n\n      <p class="registration-form__safety">Welcome to {{ website.name }}! Have fun and <a>stay safe</a>!</p>\n      <div class="form__footer"><button type="submit" class="form__submit registration-form__button">Done! Let\'s start playing!</button></div>\n    </form>\n</habbo-registration-form>\n');
  $templateCache.put('views/common/components/header/header.html', '<habbo-header-small>\r\n    <header class="header__wrapper wrapper">\r\n        <a class="header__habbo__logo">\r\n            <h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1>\r\n        </a>\r\n        <div class="header__aside" ng-if="$root.currentUser == undefined">\r\n          <a ui-sref="login">\r\n            <button class="header__login__button"><span class="header__login__icon">Login</span></button>\r\n          </a>\r\n        </div>\r\n        <habbo-user-menu class="header__aside header__aside--user-menu" ng-if="$root.currentUser.login_status">\r\n            <div class="user-menu" ng-init="toggle = false;">\r\n                <div class="user-menu__header">\r\n                    <a class="user-menu__toggle" ng-click="toggle = !toggle;">\r\n                        <div class="user-menu__name__wrapper">\r\n                            <div class="user-menu__name" ng-class="{ \'user-menu__name--open\': toggle }" >\r\n                                {{ $root.currentUser.user_name }}\r\n                            </div>\r\n                        </div>\r\n                        <habbo-imager class="user-menu__avatar">\r\n                            <img width="54" height="62" class="imager" src="https://avatar-retro.com/habbo-imaging/avatarimage?figure={{ $root.currentUser.user_info.look }}&headonly=1" style="min-width: 54px;">\r\n                        </habbo-imager>\r\n                    </a>\r\n                </div>\r\n                <ul class="user-menu__list"  ng-class="{ \'ng-hide\': !toggle }" >\r\n                    <li class="user-menu__item">\r\n                        <a sref="me.profile" class="user-menu__link user-menu__link--profile">My Profile</a>\r\n                    </li>\r\n\r\n                    <li class="user-menu__item">\r\n                        <a sref="me.settings" class="user-menu__link user-menu__link--settings">Settings</a>\r\n                    </li>\r\n\r\n                    <li class="user-menu__item">\r\n                        <a sref="logout" class="user-menu__link user-menu__link--logout">Logout</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </habbo-user-menu>\r\n    </header>\r\n    <heroic-navigation ng-hide="$root.state.includes(\'login\') || $root.state.includes(\'register\') || $root.state.includes(\'banned\')"></heroic-navigation>\r\n  </habbo-header-small>\r\n');
  $templateCache.put('views/common/components/header/navigation.html', '<habbo-navigation active="home">\r\n    <nav class="navigation">\r\n        <ul class="navigation__menu">\r\n          <li ng-repeat="item in navigationList | orderBy: \'sort\'" class="navigation__item navigation__link"ng-class="{\'navigation__link--active\': $root.state.includes(item.state.name)}" ng-click="(item.url == null) ? $root.state.go(item.state.name) : $root.state.go(item.url)"  style="color:#036;">\r\n              <i class="fa fa-{{ item.icon }}"></i> {{ (item.name == \'current_username\') ? $root.currentUser.user_name : item.name }}\r\n          </li>\r\n          <li class="navigation__item navigation__item--aside navigation__item--hotel">\r\n              <habbo-hotel-button>\r\n                <a sref="app.client" class="hotel-button" id="ga-linkid-hotel"><span class="hotel-button__text" >Enter Hotel <small style="font-size:10px;">{{ website.online }} online</small></span> </a>\r\n              </habbo-hotel-button>\r\n          </li>\r\n        </ul>\r\n    </nav>\r\n</habbo-navigation>\r\n<div class="wrapper"></div>\r\n</habbo-header-small>\r\n<habbo-tabs>\r\n  <nav class="tabs">\r\n    <ul class="tabs__menu" ng-repeat="item in navigationList | orderBy: \'sort\'" ng-if="$root.state.includes(item.state.name)">\r\n      <habbo-tab class="sub-list no-padding" ng-repeat="child in item.children">\r\n        <li class="tab">\r\n          <a class="tab__link" ng-class="{\'tab__link--active\': $root.state.includes(child.state.name)}" ng-click="(child.url == null) ? $root.state.go(child.state.name) : $root.state.go(child.url)">\r\n            {{ child.name }}\r\n          </a>\r\n        </li>\r\n      </habbo-tab>\r\n    </ul>\r\n  </nav>\r\n</habbo-tabs>\r\n');
  $templateCache.put('views/session/user/home/about.html', '\n<section id="tabs">\n  <header class="rooms__header">\n    <div class="rooms__header__container wrapper">\n      <div class="rooms__header__content">\n        <h1 class="rooms__header__title">CMS Information</h1>\n        <nav class="news-category__navigation">\n            <ul class="news-category__list">\n              <li class="news-category__item">\n                <a ng-click="setTab(1)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(1) }">Developers</a>\n              </li>\n              <li class="news-category__item">\n                <a ng-click="setTab(2)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(2) }">Build Information</a>\n              </li>\n            </ul>\n        </nav>\n      </div>\n    </div>\n  </header>\n\n  <div class="wrapper wrapper--content">\n    <section class="wrapper wrapper--content rooms-wrapper" style="float:left;">\n      <div ng-show="isSet(1)">\n        <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n        <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n        <article class="news-header news-header--column">\n            <a class="news-header__link news-header__banner">\n                <figure class="news-header__viewport" style="border-radius:50%">\n                    <img src="/assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\n                    <div class="staff_avatar" style="background: url(https://avatar-retro.com/habbo-imaging/avatarimage?figure=ch-215-62.sh-3068-62-62.hr-893-1041.ca-1804-64.lg-3088-1195-1193.hd-3092-1&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\n                </figure>\n            </a>\n            <a class="news-header__link news-header__wrapper">\n                <h2 class="news-header__title">LeChris</h2>\n            </a>\n            <aside class="news-header__wrapper news-header__info">\n                <ul class="news-header__categories">\n                    <li class="news-header__category">\n                      <a class="news-header__category__link">CMS Developer</a>\n                    </li>\n                </ul>\n            </aside>\n        </article>\n        <article class="news-header news-header--column">\n            <a class="news-header__link news-header__banner">\n                <figure class="news-header__viewport" style="border-radius:50%">\n                    <img src="/assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\n                    <div class="staff_avatar" style="background: url(https://avatar-retro.com/habbo-imaging/avatarimage?figure=ch-215-62.sh-3068-62-62.hr-893-1041.ca-1804-64.lg-3088-1195-1193.hd-3092-1&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\n                </figure>\n            </a>\n            <a class="news-header__link news-header__wrapper">\n                <h2 class="news-header__title">Bill</h2>\n            </a>\n            <aside class="news-header__wrapper news-header__info">\n                <ul class="news-header__categories">\n                    <li class="news-header__category">\n                      <a class="news-header__category__link">CMS Developer</a>\n                    </li>\n                </ul>\n            </aside>\n        </article>\n      </div>\n      <div ng-show="isSet(2)">\n        <habbo-web-pages key="common/box_parents_guide" class="aside aside--box aside--fixed">\n            <aside class="static-content">\n              <h3>Version <small>0.01</smalL> </h3>\n              <p>Heroic Framework is built upon Angular with a backend server written in Node.  This allows us to provide the best user experience possible to rush ahead of our competitors.</p>\n            </aside>\n        </habbo-web-pages>\n      </div>\n    </section>\n  </div>\n</section>\n');
  $templateCache.put('views/session/user/home/me.html', '<div class="wrapper wrapper--content">\n  <section>\n      <h1>Hey, {{ $root.currentUser.user_name }}</h1>\n      <div class="main main--fixed">\n        <p>What the fuck is this?  New shit.  Deal with it</p>\n        <a app-logout>Log The Fuck Out</a>\n      </div>\n  </section>\n</div>\n');
}]);

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AboutController = function AboutController(UtilityService, $scope, $rootScope, $localStorage) {
        'ngInject';

        _classCallCheck(this, AboutController);

        this.UtilityService = UtilityService;
        this.$scope = $scope;

        $scope.tab = 1;
        $scope.setTab = function (newTab) {
                $scope.tab = newTab;
        };

        $scope.isSet = function (tabNum) {
                return $scope.tab === tabNum;
        };
};
AboutController.$inject = ["UtilityService", "$scope", "$rootScope", "$localStorage"];

exports.default = AboutController;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MeController = function MeController(UtilityService, $scope, $rootScope, $localStorage) {
  'ngInject';

  _classCallCheck(this, MeController);

  this.UtilityService = UtilityService;
  this.$scope = $scope;
  this.$rootScope = $rootScope;
  this.$localStorage = $localStorage;

  console.log($localStorage);

  this.$rootScope.header = {
    tabs: {
      "What's Up": {
        href: "#"
      }
    }
  };
};
MeController.$inject = ["UtilityService", "$scope", "$rootScope", "$localStorage"];

exports.default = MeController;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('./login.controller');

var _login2 = _interopRequireDefault(_login);

var _register = require('./register.controller');

var _register2 = _interopRequireDefault(_register);

var _me = require('./home/me.controller');

var _me2 = _interopRequireDefault(_me);

var _about = require('./home/about.controller');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = angular.module('habboapi.controllers', []);

app.controller('LoginController', _login2.default);
app.controller('RegisterController', _register2.default);
app.controller('MeController', _me2.default);
app.controller('AboutController', _about2.default);

exports.default = app;

},{"./home/about.controller":11,"./home/me.controller":12,"./login.controller":14,"./register.controller":15}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginController = function () {
    LoginController.$inject = ["AppConstants", "UtilityService", "AuthenticationService", "$state", "$scope"];
    function LoginController(AppConstants, UtilityService, AuthenticationService, $state, $scope) {
        'ngInject';

        var _this = this;

        _classCallCheck(this, LoginController);

        this.AppConstants = AppConstants;
        this.UtilityService = UtilityService;
        this.AuthenticationService = AuthenticationService;
        this.$state = $state;
        this.$scope = $scope;

        this.$scope.loginFormDetails = {
            username: null,
            password: null
        };

        this.$scope.login = function () {
            return _this.login();
        };
    }

    _createClass(LoginController, [{
        key: 'login',
        value: function login() {
            var _this2 = this;

            if (this.$scope.loginFormDetails.username == '' || null || this.$scope.loginFormDetails.password == '' || null) return;

            return this.AuthenticationService.login(this.$scope.loginFormDetails.username, this.$scope.loginFormDetails.password).then(function (session) {
                return _this2.$state.go('me.home');
            }).catch(function (err) {
                _this2.$scope.loginFormDetails.username = null;
                _this2.$scope.loginFormDetails.password = null;

                _this2.$scope.loginForm.password.$setPristine();

                document.getElementById("username").focus();

                if (err == 'invalid_login') return _this2.$scope.loginForm.username.$setValidity('invalidLogin', false);
            });
        }
    }]);

    return LoginController;
}();

exports.default = LoginController;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegisterController = function () {
    RegisterController.$inject = ["AppConstants", "UtilityService", "AuthenticationService", "UserService", "$state", "$scope"];
    function RegisterController(AppConstants, UtilityService, AuthenticationService, UserService, $state, $scope) {
        'ngInject';

        var _this = this;

        _classCallCheck(this, RegisterController);

        this.AppConstants = AppConstants;
        this.UtilityService = UtilityService;
        this.AuthenticationService = AuthenticationService;
        this.UserService = UserService;
        this.$state = $state;
        this.$scope = $scope;

        this.$scope.header = true;

        this.$scope.registerFormDetails = {
            username: null,
            email: null,
            password: null,
            passwordConfirm: null
        };

        this.$scope.register = function () {
            return _this.register();
        };
    }

    _createClass(RegisterController, [{
        key: 'register',
        value: function register() {
            var _this2 = this;

            if (this.$scope.registerFormDetails == undefined || this.$scope.registerFormDetails.length == 0 || this.$scope.registerFormDetails.password != this.$scope.registerFormDetails.passwordConfirm) return this.UtilityService.alert('An erorr has occurred');

            return this.UserService.addUser(this.$scope.registerFormDetails.username, this.$scope.registerFormDetails.email, this.$scope.registerFormDetails.password).then(function (user) {
                return _this2.AuthenticationService.login(_this2.$scope.registerFormDetails.username, _this2.$scope.registerFormDetails.password);
            }).then(function (session) {
                return _this2.$state.go('me');
            }).catch(function (err) {

                if (err == 'max_accounts') {
                    _this2.UtilityService.alert('Max accounts');
                    return _this2.$state.go('login');
                }

                if (err == 'username_unavailable') return _this2.$scope.registerForm.username.$setValidity('invalidUsernameAvailability', false);
                if (err == 'invalid_email') return _this2.$scope.registerForm.email.$setValidity('invalidEmail', false);
                if (err == 'email_unavailable') return _this2.$scope.registerForm.email.$setValidity('invalidEmailAvailability2', false);

                return _this2.UtilityService.alert('An erorr has occurred');
            });
        }
    }]);

    return RegisterController;
}();

exports.default = RegisterController;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logout = require('./logout.directive');

var _logout2 = _interopRequireDefault(_logout);

var _validateUsername = require('./validate.username.directive');

var _validateUsername2 = _interopRequireDefault(_validateUsername);

var _validateEmail = require('./validate.email.directive');

var _validateEmail2 = _interopRequireDefault(_validateEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directivesModule = angular.module('habboapi.directives', []);

directivesModule.directive('appLogout', function () {
  return new _logout2.default();
});
directivesModule.directive('validateUsername', function () {
  return new _validateUsername2.default();
});
directivesModule.directive('validateEmail', function () {
  return new _validateEmail2.default();
});

exports.default = directivesModule;

},{"./logout.directive":17,"./validate.email.directive":18,"./validate.username.directive":19}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogoutDirective = function () {
    function LogoutDirective() {
        _classCallCheck(this, LogoutDirective);

        this.restrict = 'A';
        this.replace = true;
    }

    _createClass(LogoutDirective, [{
        key: 'controller',
        value: ["SessionService", "$localStorage", "$state", "$mdDialog", "$scope", function controller(SessionService, $localStorage, $state, $mdDialog, $scope) {
            'ngInject';

            $scope.SessionService = SessionService;
            $scope.localStorage = $localStorage;
            $scope.state = $state;
            $scope.mdDialog = $mdDialog;
        }]
    }, {
        key: 'link',
        value: function link(scope, element, attrs) {
            element.on('click', function (event) {
                if (scope.localStorage.currentUser == undefined || null) return;
                scope.SessionService.destroySession();
                return scope.state.go('login');
            });
        }
    }]);

    return LogoutDirective;
}();

exports.default = LogoutDirective;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidateEmailDirective = function () {
    function ValidateEmailDirective() {
        _classCallCheck(this, ValidateEmailDirective);

        this.restrict = 'A';
        this.require = 'ngModel';
    }

    _createClass(ValidateEmailDirective, [{
        key: 'controller',
        value: ["ValidatorService", "$scope", function controller(ValidatorService, $scope) {
            'ngInject';

            $scope.ValidatorService = ValidatorService;
        }]
    }, {
        key: 'link',
        value: function link(scope, element, attrs, ngModel) {
            element.on('blur', function () {
                if (element.val() == undefined || null || element.val() == '') return;

                return scope.ValidatorService.validateEmail(element.val()).then(function () {
                    ngModel.$setValidity('invalidEmail', true);
                    return ngModel.$setValidity('invalidEmailAvailability', true);
                }).catch(function (err) {
                    if (err == 'invalid_parameters' || err == 'invalid_email') return ngModel.$setValidity('invalidEmail', false);
                    if (err == 'email_unavailable') return ngModel.$setValidity('invalidEmailAvailability', false);
                });
            });
        }
    }]);

    return ValidateEmailDirective;
}();

exports.default = ValidateEmailDirective;

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidateUsernameDirective = function () {
    function ValidateUsernameDirective() {
        _classCallCheck(this, ValidateUsernameDirective);

        this.restrict = 'A';
        this.require = 'ngModel';
    }

    _createClass(ValidateUsernameDirective, [{
        key: 'controller',
        value: ["ValidatorService", "$scope", function controller(ValidatorService, $scope) {
            'ngInject';

            $scope.ValidatorService = ValidatorService;
        }]
    }, {
        key: 'link',
        value: function link(scope, element, attrs, ngModel) {
            element.on('blur', function () {
                if (element.val() == undefined || null || element.val() == '') return;

                return scope.ValidatorService.validateUsername(element.val()).then(function () {
                    return ngModel.$setValidity('invalidUsernameAvailability', true);
                }).catch(function (err) {
                    return ngModel.$setValidity('invalidUsernameAvailability', false);
                });
            });
        }
    }]);

    return ValidateUsernameDirective;
}();

exports.default = ValidateUsernameDirective;

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var filtersModule = angular.module('habboapi.filters', []);

exports.default = filtersModule;

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthenticationService = function () {
    AuthenticationService.$inject = ["AppConstants", "SessionService", "$http", "$q"];
    function AuthenticationService(AppConstants, SessionService, $http, $q) {
        'ngInject';

        _classCallCheck(this, AuthenticationService);

        this.AppConstants = AppConstants;
        this.SessionService = SessionService;
        this.$http = $http;
        this.$q = $q;
    }

    _createClass(AuthenticationService, [{
        key: 'login',
        value: function login(username, password) {
            var _this = this;

            if (username == '' || null || password == '' || null) return this.$q.reject('invalid_parameters');

            return this.$http.post(this.AppConstants.api + '/authentication/login', { username: username, password: password }).then(function (res) {
                if (res.data.session == undefined || res.data.session.length == 0 || null) return _this.$q.reject('invalid_session');

                return _this.SessionService.createSession();
            }).catch(function (res) {
                return _this.$q.reject(res.data.error);
            });
        }
    }]);

    return AuthenticationService;
}();

exports.default = AuthenticationService;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('./utility.service');

var _utility2 = _interopRequireDefault(_utility);

var _authentication = require('./authentication.service');

var _authentication2 = _interopRequireDefault(_authentication);

var _session = require('./session.service');

var _session2 = _interopRequireDefault(_session);

var _user = require('./user.service');

var _user2 = _interopRequireDefault(_user);

var _validator = require('./validator.service');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicesModule = angular.module('habboapi.services', []);

servicesModule.service('UtilityService', _utility2.default);
servicesModule.service('AuthenticationService', _authentication2.default);
servicesModule.service('SessionService', _session2.default);
servicesModule.service('UserService', _user2.default);
servicesModule.service('ValidatorService', _validator2.default);

exports.default = servicesModule;

},{"./authentication.service":21,"./session.service":23,"./user.service":24,"./utility.service":25,"./validator.service":26}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionService = function () {
    SessionService.$inject = ["AppConstants", "$localStorage", "$http", "$state", "$q", "$rootScope"];
    function SessionService(AppConstants, $localStorage, $http, $state, $q, $rootScope) {
        'ngInject';

        _classCallCheck(this, SessionService);

        this.AppConstants = AppConstants;
        this.$localStorage = $localStorage;
        this.$http = $http;
        this.$state = $state;
        this.$q = $q;
        this.$rootScope = $rootScope;
    }

    _createClass(SessionService, [{
        key: 'createSession',
        value: function createSession() {
            var _this = this;

            return this.$http.get(this.AppConstants.api + '/authentication/session/getSession').then(function (res) {
                _this.$localStorage.$reset();

                if (res.data.session == undefined || res.data.session.length == 0 || null) return _this.$q.reject('invalid_session');

                _this.$localStorage.currentUser = res.data.session;
                _this.$rootScope.currentUser = res.data.session;

                return _this.$q.resolve(_this.$localStorage.currentUser);
            }).catch(function (res) {
                _this.$localStorage.$reset();
                _this.$rootScope.currentUser = null;

                if (res.data.error == 'user_banned') _this.$state.go('banned', { ban: res.data.ban });

                return _this.$q.reject(res.data.error);
            });
        }
    }, {
        key: 'validateSession',
        value: function validateSession() {
            var _this2 = this;

            if (this.$localStorage.currentUser == undefined || this.$localStorage.currentUser.length == 0 || null) return this.$q.reject('invalid_session');

            return this.$http.get(this.AppConstants.api + '/authentication/session/getSession').then(function (res) {
                if (res.data.session == undefined || res.data.session.length == 0 || null) return _this2.$q.reject('invalid_session');

                if (res.data.session.user_session != _this2.$localStorage.currentUser.user_session) return _this2.$q.reject('invalid_session');

                angular.forEach(res.data.session.user_info.settings, function (value, key) {
                    if (key == 'id' || key == 'user_id') return;

                    res.data.session.user_info.settings[key] = value == '0' ? false : true;
                });

                _this2.$localStorage.currentUser = res.data.session;
                _this2.$rootScope.currentUser = res.data.session;

                return _this2.$q.resolve(_this2.$localStorage.currentUser);
            }).catch(function (res) {
                _this2.$localStorage.$reset();
                _this2.$rootScope.currentUser = null;

                return _this2.$q.reject(res.data.error);
            });
        }
    }, {
        key: 'destroySession',
        value: function destroySession() {
            var _this3 = this;

            return this.$http.get(this.AppConstants.api + '/authentication/session/destroySession').then(function (res) {
                _this3.$localStorage.$reset();
                _this3.$rootScope.currentUser = null;

                return _this3.$q.resolve(null);
            }).catch(function (res) {
                _this3.$localStorage.$reset();
                _this3.$rootScope.currentUser = null;

                return _this3.$q.resolve(null);
            });
        }
    }]);

    return SessionService;
}();

exports.default = SessionService;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    UserService.$inject = ["AppConstants", "$localStorage", "$http", "$q"];
    function UserService(AppConstants, $localStorage, $http, $q) {
        'ngInject';

        _classCallCheck(this, UserService);

        this.AppConstants = AppConstants;
        this.$localStorage = $localStorage;
        this.$http = $http;
        this.$q = $q;
    }

    _createClass(UserService, [{
        key: 'addUser',
        value: function addUser(username, email, password) {
            var _this = this;

            if (username == '' || null || email == '' || null || password == '' || null) return this.$q.reject('invalid_paramemters');

            return this.$http.post(this.AppConstants.api + '/hotel/user/addUser', { username: username, password: password, email: email }).then(function (res) {
                return _this.$q.resolve(null);
            }).catch(function (res) {
                return _this.$q.reject(res.data.error == undefined || null ? 'invalid_user' : res.data.error);
            });
        }
    }]);

    return UserService;
}();

exports.default = UserService;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UtilityService = function () {
    UtilityService.$inject = ["$mdToast", "$mdDialog"];
    function UtilityService($mdToast, $mdDialog) {
        'ngInject';

        _classCallCheck(this, UtilityService);

        this.$mdToast = $mdToast;
        this.$mdDialog = $mdDialog;
    }

    _createClass(UtilityService, [{
        key: 'toast',
        value: function toast(message) {
            if (message == '' || null) return;

            return this.$mdToast.show(this.$mdToast.simple({
                hideDelay: 3000,
                textContent: message
            }));
        }
    }, {
        key: 'alert',
        value: function alert(message) {
            if (message == '' || null) return;

            return this.$mdDialog.show(this.$mdDialog.alert({
                title: 'HabboAPI',
                textContent: message,
                ok: 'Close'
            }));
        }
    }]);

    return UtilityService;
}();

exports.default = UtilityService;

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorService = function () {
    ValidatorService.$inject = ["AppConstants", "$http", "$q"];
    function ValidatorService(AppConstants, $http, $q) {
        'ngInject';

        _classCallCheck(this, ValidatorService);

        this.AppConstants = AppConstants;
        this.$http = $http;
        this.$q = $q;
    }

    _createClass(ValidatorService, [{
        key: 'validateUsername',
        value: function validateUsername(username) {
            var _this = this;

            if (username == '' || null) return this.$q.reject('invalid_parameters');

            return this.$http.post(this.AppConstants.api + '/hotel/validators/validateUsername', { username: username }).then(function (res) {
                return _this.$q.resolve(null);
            }).catch(function (res) {
                return _this.$q.reject(res.data.error == undefined || null ? 'invalid_username' : res.data.error);
            });
        }
    }, {
        key: 'validateEmail',
        value: function validateEmail(email) {
            var _this2 = this;

            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (email == '' || null) return this.$q.reject('invalid_parameters');

            if (regex.test(email) == false) return this.$q.reject('invalid_email');

            return this.$http.post(this.AppConstants.api + '/hotel/validators/validateEmail', { email: email }).then(function (res) {
                return _this2.$q.resolve(null);
            }).catch(function (res) {
                return _this2.$q.reject(res.data.error == undefined || null ? 'invalid_email' : res.data.error);
            });
        }
    }]);

    return ValidatorService;
}();

exports.default = ValidatorService;

},{}]},{},[1]);
