module Apptus.Jewellery.Services {
    "use strict";

    export class DesignService {
        static $inject = ["CRUDOperationService", "$q"];

        constructor(private crudOperationService: Apptus.Jewellery.Common.Services.CRUDOperation,
            private $q: ng.IQService) {

        }

        public GetDesigns(): ng.IPromise<Models.Design[]> {
            return this.crudOperationService.Get("Design/").then(function (response: any) {
                console.log(response);
                let jsonResonse: Models.Design[] = response.data;
                return jsonResonse;
            }, function (error) {
                console.log(error);
                return null;
            });
        }

        public CreateDesign(design: Models.Design): ng.IPromise<boolean> {
            return this.crudOperationService.Create("Design/", design).then(function (response: any) {
                return true;
            }, function (error: any) {
                return false;
            });
        }
    }

    JewelleryModule.service("DesignService", DesignService);
}