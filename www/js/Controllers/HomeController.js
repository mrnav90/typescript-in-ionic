var IonicGreen;
(function (IonicGreen) {
    var Controller;
    (function (Controller) {
        var HomeController = (function () {
            function HomeController($rootScope, User, Users) {
                this.$rootScope = $rootScope;
                this.User = User;
                this.Users = Users;
            }
            HomeController.$inject = ['$rootScope', 'User', 'Users'];
            return HomeController;
        }());
        Controller.HomeController = HomeController;
        angular.module('IonicGreen').controller('HomeController', IonicGreen.Controller.HomeController);
    })(Controller = IonicGreen.Controller || (IonicGreen.Controller = {}));
})(IonicGreen || (IonicGreen = {}));
