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
                    this.$scope = $scope;
                    this.designs = [];
                    this.designs = new Array();
                    this.GetDesigns();
                }
                Object.defineProperty(DesignController.prototype, "Designs", {
                    get: function () {
                        return this.designs;
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
                };
                DesignController.prototype.ViewDesign = function (id) {
                };
                DesignController.prototype.GetDesigns = function () {
                    console.log('hi');
                    var sampleDesign = new Jewellery.Models.Design();
                    sampleDesign.Name = "Name1";
                    sampleDesign.Description = "Description1";
                    this.designs.push(sampleDesign);
                    sampleDesign = new Jewellery.Models.Design();
                    sampleDesign.Name = "Name2";
                    sampleDesign.Description = "Description2";
                    this.designs.push(sampleDesign);
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