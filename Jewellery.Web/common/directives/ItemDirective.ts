module Apptus.Jewellery.Common.Directives {
    "use strict";

    function DesignDirective(): angular.IDirective {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'Items/views/Item.html'
        }
    }

    JewelleryModule.directive("jewelleryItem", DesignDirective);
}