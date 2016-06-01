module IonicGreen.Directive {
    class UserInfoController {
        static $inject = [];
        constructor() {

        }
    }

    directive.$inject = [];
    function directive(): ng.IDirective {
        let directive = <ng.IDirective>{
            restrict: 'A',
            controller: UserInfoController
        }

        return directive;
    }

    angular.module('IonicGreen').directive('userInfo', directive);
}
