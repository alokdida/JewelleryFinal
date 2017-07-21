var Apptus;
(function (Apptus) {
    var Jewellery;
    (function (Jewellery) {
        var Common;
        (function (Common) {
            var Utility;
            (function (Utility) {
                "use strict";
                var StringUtilities = (function () {
                    function StringUtilities() {
                    }
                    Object.defineProperty(StringUtilities, "EmptyString", {
                        get: function () {
                            return "";
                        },
                        enumerable: true,
                        configurable: true
                    });
                    StringUtilities.IsTrue = function (value) {
                        var returnValue = false;
                        returnValue = (value && (value.toLowerCase() === 'true' || this.IsYes(value)));
                        return returnValue;
                    };
                    StringUtilities.IsYes = function (value) {
                        return value.toLowerCase() === "yes" || value.toLowerCase() === "y";
                    };
                    StringUtilities.IsNullOrEmpty = function (str) {
                        return str == null || str == undefined || str == "";
                    };
                    return StringUtilities;
                }());
                Utility.StringUtilities = StringUtilities;
            })(Utility = Common.Utility || (Common.Utility = {}));
        })(Common = Jewellery.Common || (Jewellery.Common = {}));
    })(Jewellery = Apptus.Jewellery || (Apptus.Jewellery = {}));
})(Apptus || (Apptus = {}));
//# sourceMappingURL=StringUtilities.js.map