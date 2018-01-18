export default class Socket
{

    constructor(Configuration, $rootScope)
    {
      'ngInject'
      $rootScope.socket = io(Configuration.websocket, {transports: ['websocket']})
    }

}
