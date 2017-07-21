var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var Utilities = Apptus.Jewellery.Common.Utility;
            var DesignController = (function () {
                function DesignController(designService, $scope) {
                    this.designService = designService;
                    this.$scope = $scope;
                    this.designs = [];
                    this.designs = new Array();
                    $scope.ViewDesign = this.ViewDesign.bind(this);
                    $scope.CreateDesign = this.CreateDesign.bind(this);
                    this.GetDesigns();
                }
                Object.defineProperty(DesignController.prototype, "Designs", {
                    get: function () {
                        return this.designs;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DesignController.prototype, "Design", {
                    get: function () {
                        return this.designModel;
                    },
                    set: function (currentDesign) {
                        this.designModel = currentDesign;
                    },
                    enumerable: true,
                    configurable: true
                });
                DesignController.prototype.IsNameEmpty = function () {
                    return Utilities.StringUtilities.IsNullOrEmpty(this.designModel.Name);
                };
                DesignController.prototype.IsDescriptionEmpty = function () {
                    return Utilities.StringUtilities.IsNullOrEmpty(this.designModel.Description);
                };
                DesignController.prototype.CreateDesign = function () {
                    if (!this.designModel.Id) {
                        this.designService;
                        this.designModel = new Jewellery.Models.Design();
                    }
                };
                DesignController.prototype.ViewDesign = function (selectedDesign) {
                    this.designModel = selectedDesign;
                };
                DesignController.prototype.GetDesigns = function () {
                    this.designService.GetDesigns().then(function (response) {
                        this.designs = response;
                    });
                };
                DesignController.$inject = ["DesignService", "$scope"];
                return DesignController;
            }());
            Controllers.DesignController = DesignController;
            Jewellery.JewelleryModule.controller("DesignController", DesignController);
        })(Controllers = Jewellery.Controllers || (Jewellery.Controllers = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=DesignController.js.map