var IonicGreen;
(function (IonicGreen) {
    var Service;
    (function (Service) {
        var Users = (function () {
            function Users($q, $http) {
                this.$q = $q;
                this.$http = $http;
            }
            return Users;
        }());
        service.$inject = ['$q', '$http'];
        function service($q, $http) {
            return new Users($q, $http);
        }
        angular.module('IonicGreen').service('Users', service);
    })(Service = IonicGreen.Service || (IonicGreen.Service = {}));
})(IonicGreen || (IonicGreen = {}));
