import LogoutDirective from './logout.directive';
import ValidateUsernameDirective from './validate.username.directive';
import ValidateEmailDirective from './validate.email.directive';

let directivesModule = angular.module('heroic.directives', []);

directivesModule.directive('appLogout', () => new LogoutDirective);
directivesModule.directive('validateUsername', () => new ValidateUsernameDirective);
directivesModule.directive('validateEmail', () => new ValidateEmailDirective);

export default directivesModule;
