module IonicGreen {
    export class Router {
        static $inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', '$locationProvider'];
        constructor(
            private $stateProvider: ng.ui.IStateProvider,
            private $urlRouterProvider: ng.ui.IUrlRouterProvider,
            private $ionicConfigProvider: ionic.utility.IonicConfigProvider,
            private $locationProvider: ng.ILocationProvider
        ) {
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
                })
        }
    }

    angular.module('IonicGreen').config(IonicGreen.Router)
}
