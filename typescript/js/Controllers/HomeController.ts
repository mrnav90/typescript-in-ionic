module IonicGreen.Controller {
    export class HomeController {
        static $inject = ['$rootScope', 'User', 'Users'];
        constructor(
            private $rootScope: ng.IRootScopeService,
            private User,
            private Users
        ) {

        }
    }

    angular.module('IonicGreen').controller('HomeController', IonicGreen.Controller.HomeController)
}
