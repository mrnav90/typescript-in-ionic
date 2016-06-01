var IonicGreen;
(function (IonicGreen) {
    var Provider;
    (function (Provider) {
        var ExceptionHandler = (function () {
            function ExceptionHandler() {
            }
            ExceptionHandler.prototype.handler = function (exception, cause) {
                console.log(exception);
            };
            ExceptionHandler.prototype.$get = function () {
                return this.handler;
            };
            ExceptionHandler.$inject = [];
            return ExceptionHandler;
        }());
        Provider.ExceptionHandler = ExceptionHandler;
        angular.module('IonicGreen.ExceptionHandler', []).provider('$exceptionHandler', IonicGreen.Provider.ExceptionHandler);
    })(Provider = IonicGreen.Provider || (IonicGreen.Provider = {}));
})(IonicGreen || (IonicGreen = {}));
