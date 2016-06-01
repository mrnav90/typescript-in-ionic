var IonicGreen;
(function (IonicGreen) {
    var Router = (function () {
        function Router($stateProvider, $urlRouterProvider, $ionicConfigProvider, $locationProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            this.$ionicConfigProvider = $ionicConfigProvider;
            this.$locationProvider = $locationProvider;
            this.$locationProvider.html5Mode(false).hashPrefix('!');
            this.$urlRouterProvider.otherwise('/home/main');
            this.$ionicConfigProvider.views.forwardCache(true);
            this.$stateProvider
                .state('home', {
                url: '/home',
                abstract: true,
                templateUrl: 'templates/layout/home.html'
            })
                .state('home.main', {
                url: '/main',
                views: {
                    'content': {
                        templateUrl: 'templates/main.html',
                        controller: 'HomeController as HomeCtrl'
                    }
                }
            });
        }
        Router.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', '$locationProvider'];
        return Router;
    }());
    IonicGreen.Router = Router;
    angular.module('IonicGreen').config(IonicGreen.Router);
})(IonicGreen || (IonicGreen = {}));
