var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Common;
        (function (Common) {
            var Services;
            (function (Services) {
                "use strict";
                var CRUDOperation = (function () {
                    function CRUDOperation(httpService) {
                        this.httpService = httpService;
                        this.baseURL = 'http://localhost:12345/api/';
                        this.config = {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Accept-Encoding': 'gzip, deflate'
                            },
                            cache: false,
                            responseType: 'json'
                        };
                    }
                    CRUDOperation.prototype.GetFullURL = function (url) {
                        return this.baseURL + url;
                    };
                    CRUDOperation.prototype.Get = function (url, onSuccess, onFailure) {
                        this.httpService.get(this.GetFullURL(url), this.config).success(onSuccess).error(onFailure);
                    };
                    CRUDOperation.prototype.Update = function (url, data, onSuccess, onFailure) {
                        this.httpService.put(this.GetFullURL(url), data, this.config).success(onSuccess).error(onFailure);
                    };
                    CRUDOperation.prototype.Create = function (url, data, onSuccess, onFailure) {
                        this.httpService.post(this.GetFullURL(url), data, this.config).success(onSuccess).error(onFailure);
                    };
                    CRUDOperation.prototype.Delete = function (url, onSuccess, onFailure) {
                        this.httpService.delete(this.GetFullURL(url), this.config).success(onSuccess).error(onFailure);
                    };
                    CRUDOperation.$inject = ['$http'];
                    return CRUDOperation;
                }());
                Services.CRUDOperation = CRUDOperation;
                Jewellery.JewelleryModule.service("CRUDOperationService", CRUDOperation);
            })(Services = Common.Services || (Common.Services = {}));
        })(Common = Jewellery.Common || (Jewellery.Common = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=CRUDOperations.js.map