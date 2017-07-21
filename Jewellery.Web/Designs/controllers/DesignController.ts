module Apptus.Jewellery.Controllers {
    "use strict";

    import Utilities = Apptus.Jewellery.Common.Utility;
    export class DesignController {
        static $inject = ["DesignService", "$scope"];

        public designModel: Models.Design;
        private designs: Models.Design[] = [];

        constructor(designService: Apptus.Jewellery.Services.DesignService, private $scope: any) {
            this.designs = new Array();
            this.GetDesigns();
        }

        public get Designs(): Models.Design[] {
            return this.designs;
        }

        public IsNameEmpty(): boolean {
            return Utilities.StringUtilities.IsNullOrEmpty(this.designModel.Name);
        }

        public IsDescriptionEmpty(): boolean {
            return Utilities.StringUtilities.IsNullOrEmpty(this.designModel.Description);
        }

        public CreateDesign(): void {

        }

        public ViewDesign(id: number): void {
        }

        public GetDesigns(): void {
            console.log('hi');
            let sampleDesign: Models.Design = new Models.Design();
            sampleDesign.Name = "Name1";
            sampleDesign.Description = "Description1";
            this.designs.push(sampleDesign);
            sampleDesign = new Models.Design();
            sampleDesign.Name = "Name2";
            sampleDesign.Description = "Description2";
            this.designs.push(sampleDesign);
        }
    }

    JewelleryModule.controller("DesignController", DesignController);
}