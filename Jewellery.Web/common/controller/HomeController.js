var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Common;
        (function (Common) {
            var Controllers;
            (function (Controllers) {
                "use strict";
                var PageType = Apptus.Jewellery.Common.UserDefinedEnums.PageType;
                var HomeController = (function () {
                    function HomeController(state, $scope) {
                        this.state = state;
                        this.$scope = $scope;
                        $scope.NavToDesign = this.NavToDesign.bind(this);
                        $scope.NavToItem = this.NavToItem.bind(this);
                        $scope.IsDesignPage = this.IsDesignPage.bind(this);
                        $scope.IsItemPage = this.IsItemPage.bind(this);
                        this.currentPage = PageType.Design;
                    }
                    HomeController.prototype.NavToDesign = function () {
                        this.currentPage = PageType.Design;
                    };
                    HomeController.prototype.NavToItem = function () {
                        this.currentPage = PageType.Item;
                    };
                    HomeController.prototype.IsDesignPage = function () {
                        return this.currentPage === PageType.Design;
                    };
                    HomeController.prototype.IsItemPage = function () {
                        return this.currentPage === PageType.Item;
                    };
                    HomeController.$inject = ["$state", "$scope"];
                    return HomeController;
                }());
                Jewellery.JewelleryModule.controller("apptusJewelleryHomeController", HomeController);
            })(Controllers = Common.Controllers || (Common.Controllers = {}));
        })(Common = Jewellery.Common || (Jewellery.Common = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=HomeController.js.map