var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Services;
        (function (Services) {
            "use strict";
            var ItemService = (function () {
                function ItemService(crudOperationService) {
                }
                ItemService.$inject = ["CRUDOperationService"];
                return ItemService;
            }());
            Services.ItemService = ItemService;
            Jewellery.JewelleryModule.service("ItemService", ItemService);
        })(Services = Jewellery.Services || (Jewellery.Services = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=ItemService.js.map