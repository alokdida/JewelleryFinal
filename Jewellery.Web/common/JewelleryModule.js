var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        "use strict";
        var allModules = [
            "ui.router"
        ];
        Jewellery.JewelleryModule = angular.module('apptusJewelleryModule', allModules);
        Jewellery.JewelleryModule.config([
            "$stateProvider",
            "$urlRouterProvider",
            "$controllerProvider",
            function routes($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/Home');
                $stateProvider
                    .state("Home", {
                    url: "/Home",
                    templateUrl: "common/views/Home.html",
                    controller: "apptusJewelleryHomeController"
                })
                    .state("About", {
                    url: "/About",
                    templateUrl: "common/views/About.html",
                    controller: "apptusJewelleryHomeController"
                });
            }]);
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=JewelleryModule.js.map