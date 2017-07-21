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
                    set: function (designList) {
                        this.designs = designList;
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
                        var current_1 = this;
                        this.designService.CreateDesign(this.designModel).then(function (response) {
                            current_1.designModel = new Jewellery.Models.Design();
                            alert("Design is created successfully.");
                            current_1.GetDesigns();
                        }, function (errorResponse) {
                            alert("There is a problem while creating a design.");
                        });
                    }
                };
                DesignController.prototype.ViewDesign = function (selectedDesign) {
                    this.designModel = selectedDesign;
                };
                DesignController.prototype.GetDesigns = function () {
                    var current = this;
                    this.designService.GetDesigns().then(function (response) {
                        current.designs = response;
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