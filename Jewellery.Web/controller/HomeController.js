var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        "use strict";
        var HomeController = (function () {
            function HomeController(state, $scope) {
                this.state = state;
                this.$scope = $scope;
                $scope.NavToAbout = this.NavToAbout.bind(this);
                $scope.NavToHome = this.NavToHome.bind(this);
            }
            HomeController.prototype.NavToAbout = function () {
                this.state.go('About');
            };
            HomeController.prototype.NavToHome = function () {
                this.state.go('Home');
            };
            HomeController.$inject = ["$state", "$scope"];
            return HomeController;
        }());
        Jewellery.JewelleryModule.controller("apptusJewelleryHomeController", HomeController);
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=HomeController.js.map