import states from './states.json'

export default function Config($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider)
{
    'ngInject'

    if(states != null || states.length != 0)
  	{
  		angular.forEach(states, (value, key) =>
  		{
  			$stateProvider.state(value.name, value)
  		})
  	}
}
