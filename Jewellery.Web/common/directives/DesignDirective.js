var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Common;
        (function (Common) {
            var Directives;
            (function (Directives) {
                "use strict";
                function DesignDirective() {
                    return {
                        replace: true,
                        restrict: 'E',
                        templateUrl: 'Designs/views/Design.html',
                        controller: 'DesignController'
                    };
                }
                Jewellery.JewelleryModule.directive("jewelleryDesign", DesignDirective);
            })(Directives = Common.Directives || (Common.Directives = {}));
        })(Common = Jewellery.Common || (Jewellery.Common = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=DesignDirective.js.map