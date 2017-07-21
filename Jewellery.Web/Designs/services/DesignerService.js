var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Services;
        (function (Services) {
            "use strict";
            var DesignService = (function () {
                function DesignService(crudOperationService, $q) {
                    this.crudOperationService = crudOperationService;
                    this.$q = $q;
                }
                DesignService.prototype.GetDesigns = function () {
                    return this.crudOperationService.Get("Design/").then(function (response) {
                        console.log(response);
                        var jsonResonse = response.data;
                        return jsonResonse;
                    }, function (error) {
                        console.log(error);
                        return null;
                    });
                };
                DesignService.prototype.CreateDesign = function (design) {
                    return this.crudOperationService.Create("Design/", design).then(function (response) {
                        return true;
                    }, function (error) {
                        return false;
                    });
                };
                DesignService.$inject = ["CRUDOperationService", "$q"];
                return DesignService;
            }());
            Services.DesignService = DesignService;
            Jewellery.JewelleryModule.service("DesignService", DesignService);
        })(Services = Jewellery.Services || (Jewellery.Services = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=DesignerService.js.map