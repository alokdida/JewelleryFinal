module Apptus.Jewellery.Common.Directives {
    "use strict";

    function DesignDirective(): angular.IDirective {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'Designs/views/Design.html',
            controller:'DesignController'
        }
    }

    JewelleryModule.directive("jewelleryDesign", DesignDirective);
}