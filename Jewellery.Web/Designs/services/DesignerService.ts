module Apptus.Jewellery.Services {
    "use strict";

    export class DesignService {
        static $inject = ["CRUDOperationService"];

        constructor(crudOperationService: Apptus.Jewellery.Common.Services.CRUDOperation) {

        }
    }

    JewelleryModule.service("DesignService", DesignService);
}