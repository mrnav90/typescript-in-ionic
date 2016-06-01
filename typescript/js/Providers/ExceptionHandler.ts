module IonicGreen.Provider {
    export class ExceptionHandler implements ng.IServiceProvider {
        static $inject = [];
        constructor() {

        }

        private handler(exception, cause): void {
            console.log(exception);
        }

        $get() {
            return this.handler;
        }
    }

    angular.module('IonicGreen.ExceptionHandler', []).provider('$exceptionHandler', IonicGreen.Provider.ExceptionHandler);
}
