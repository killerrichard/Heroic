import states from './states.json'

export default function Config($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider)
{
    'ngInject'

    $locationProvider.html5Mode(true)
    $locationProvider.hashPrefix('') 

    $urlRouterProvider.otherwise('/')

    if(states != null || states.length != 0)
  	{
  		angular.forEach(states, (value, key) =>
  		{
  			$stateProvider.state(value.name, value)
  		})
  	}

    $httpProvider.interceptors.push('JWTService')
    $httpProvider.interceptors.push('PromiseService')

}
