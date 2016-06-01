module IonicGreen {
    export class Application {
        static $inject = ['$ionicPlatform', '$window'];
        constructor(
            private $ionicPlatform: ionic.platform.IonicPlatformService,
            private $window: ng.IWindowService
        ) {
            this.$ionicPlatform.ready(function() {
                if (this.$window.cordova && this.$window.cordova.plugins && this.$window.cordova.plugins.Keyboard) {
                    this.$window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    this.$window.cordova.plugins.Keyboard.disableScroll(true);

                }
                if (this.$window.StatusBar) {
                    this.$window.StatusBar.styleLightContent();
                }
            })
        }
    }

    export class Config {
        static $inject = [];
        constructor() {

        }
    }

    angular.module('IonicGreen', [
        'ionic',
        'IonicGreen.ExceptionHandler'
    ])
        .run(IonicGreen.Application)
        .config(IonicGreen.Config)
}
