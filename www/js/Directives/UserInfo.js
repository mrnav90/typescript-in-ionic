var IonicGreen;
(function (IonicGreen) {
    var Directive;
    (function (Directive) {
        var UserInfoController = (function () {
            function UserInfoController() {
            }
            UserInfoController.$inject = [];
            return UserInfoController;
        }());
        directive.$inject = [];
        function directive() {
            var directive = {
                restrict: 'A',
                controller: UserInfoController
            };
            return directive;
        }
        angular.module('IonicGreen').directive('userInfo', directive);
    })(Directive = IonicGreen.Directive || (IonicGreen.Directive = {}));
})(IonicGreen || (IonicGreen = {}));
