module Apptus.Jewellery.Common.Utility {
    "use strict";

    export class StringUtilities {

        public static get EmptyString(): string {
            return "";
        }

        public static IsTrue(value: string): boolean {
            let returnValue: boolean = false;
            returnValue = (value && (value.toLowerCase() === 'true' || this.IsYes(value)));

            return returnValue;
        }

        public static IsYes(value: string): boolean {
            return value.toLowerCase() === "yes" || value.toLowerCase() === "y";
        }

        public static IsNullOrEmpty(str: string): boolean {
            return str == null || str == undefined || str == "";
        }
    }
}