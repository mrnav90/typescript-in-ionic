var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IonicGreen;
(function (IonicGreen) {
    var Factory;
    (function (Factory) {
        var User = (function (_super) {
            __extends(User, _super);
            function User() {
                _super.call(this);
            }
            return User;
        }(Factory.BaseObject));
        factory.$inject = [];
        function factory() {
            return new User();
        }
        angular.module('IonicGreen').factory('User', factory);
    })(Factory = IonicGreen.Factory || (IonicGreen.Factory = {}));
})(IonicGreen || (IonicGreen = {}));
