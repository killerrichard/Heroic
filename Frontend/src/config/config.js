import states from './states.json';

export default function Config($locationProvider, $mdThemingProvider, $urlRouterProvider, $stateProvider, $mdAriaProvider)
{
    'ngInject';
    
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/login');

    $mdThemingProvider.disableTheming();

    if(states != null || states.length != 0)
	{
		angular.forEach(states, (value, key) =>
		{
			$stateProvider.state(value.name, value);
		});
	}

    $mdAriaProvider.disableWarnings();
}