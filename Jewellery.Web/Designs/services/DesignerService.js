var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Services;
        (function (Services) {
            "use strict";
            var DesignService = (function () {
                function DesignService(crudOperationService) {
                }
                DesignService.$inject = ["CRUDOperationService"];
                return DesignService;
            }());
            Services.DesignService = DesignService;
            Jewellery.JewelleryModule.service("DesignService", DesignService);
        })(Services = Jewellery.Services || (Jewellery.Services = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=DesignerService.js.map