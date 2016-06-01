var IonicGreen;
(function (IonicGreen) {
    var Application = (function () {
        function Application($ionicPlatform, $window) {
            this.$ionicPlatform = $ionicPlatform;
            this.$window = $window;
            this.$ionicPlatform.ready(function () {
                if (this.$window.cordova && this.$window.cordova.plugins && this.$window.cordova.plugins.Keyboard) {
                    this.$window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    this.$window.cordova.plugins.Keyboard.disableScroll(true);
                }
                if (this.$window.StatusBar) {
                    this.$window.StatusBar.styleLightContent();
                }
            });
        }
        Application.$inject = ['$ionicPlatform', '$window'];
        return Application;
    }());
    IonicGreen.Application = Application;
    var Config = (function () {
        function Config() {
        }
        Config.$inject = [];
        return Config;
    }());
    IonicGreen.Config = Config;
    angular.module('IonicGreen', [
        'ionic',
        'IonicGreen.ExceptionHandler'
    ])
        .run(IonicGreen.Application)
        .config(IonicGreen.Config);
})(IonicGreen || (IonicGreen = {}));
