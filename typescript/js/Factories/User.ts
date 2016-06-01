module IonicGreen.Factory {
    interface IUserFactory {

    }

    class User extends BaseObject implements IUserFactory {
        constructor() {
            super();
        }
    }

    factory.$inject = [];
    function factory(): IUserFactory {
        return new User();
    }

    angular.module('IonicGreen').factory('User', factory);
}
