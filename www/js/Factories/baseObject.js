var IonicGreen;
(function (IonicGreen) {
    var Factory;
    (function (Factory) {
        var BaseObject = (function () {
            function BaseObject() {
            }
            BaseObject.prototype.setData = function (object) {
                this.data = !!object ? object : {};
            };
            BaseObject.prototype.getData = function () {
                return this.data;
            };
            BaseObject.prototype.getId = function () {
                return this.get('id');
            };
            BaseObject.prototype.setId = function (id) {
                this.set('id', id);
            };
            BaseObject.prototype.set = function (key, value) {
                this.data[key] = value;
            };
            BaseObject.prototype.get = function (key) {
                if (!!this.data[key]) {
                    return this.data[key];
                }
                else if (this.data[key] === false) {
                    return false;
                }
                else {
                    return null;
                }
            };
            BaseObject.prototype.validate = function (validation) {
            };
            return BaseObject;
        }());
        Factory.BaseObject = BaseObject;
    })(Factory = IonicGreen.Factory || (IonicGreen.Factory = {}));
})(IonicGreen || (IonicGreen = {}));
