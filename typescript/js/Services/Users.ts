module IonicGreen.Service {
    interface IUserService {

    }

    class Users implements IUserService {
        constructor(
            private $q: ng.IQService,
            private $http: ng.IHttpService
        ) {

        }
    }

    service.$inject = ['$q', '$http'];
    function service($q: ng.IQService, $http: ng.IHttpService): IUserService {
        return new Users($q, $http);
    }

    angular.module('IonicGreen').service('Users', service)
}
