import UtilityService from './utility.service';
import AuthenticationService from './authentication.service';
import SessionService from './session.service';
import UserService from './user.service';
import ValidatorService from './validator.service';

let servicesModule = angular.module('habboapi.services', []);

servicesModule.service('UtilityService', UtilityService);
servicesModule.service('AuthenticationService', AuthenticationService);
servicesModule.service('SessionService', SessionService);
servicesModule.service('UserService', UserService);
servicesModule.service('ValidatorService', ValidatorService);

export default servicesModule;