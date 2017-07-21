module Apptus.Jewellery.Controllers {
    "use strict";

    import Utilities = Apptus.Jewellery.Common.Utility;
    export class DesignController {
        static $inject = ["DesignService", "$scope"];

        private designModel: Models.Design;
        private designs: Models.Design[] = [];

        constructor(private designService: Apptus.Jewellery.Services.DesignService, private $scope: any) {
            this.designs = new Array();
            $scope.ViewDesign = this.ViewDesign.bind(this);
            $scope.CreateDesign = this.CreateDesign.bind(this);
            this.GetDesigns();
        }

        public get Designs(): Models.Design[] {
            return this.designs;
        }

        public set Designs(designList: Models.Design[]) {
            this.designs = designList;
        }

        public get Design(): Models.Design {
            return this.designModel;
        }

        public set Design(currentDesign: Models.Design) {
            this.designModel = currentDesign;
        }

        public IsNameEmpty(): boolean {
            return Utilities.StringUtilities.IsNullOrEmpty(this.designModel.Name);
        }

        public IsDescriptionEmpty(): boolean {
            return Utilities.StringUtilities.IsNullOrEmpty(this.designModel.Description);
        }

        public CreateDesign(): void {
            if (!this.designModel.Id) {
                let current = this;
                this.designService.CreateDesign(this.designModel).then(function (response: boolean) {
                    current.designModel = new Models.Design();                    
                    alert("Design is created successfully.");
                    current.GetDesigns();
                }, function (errorResponse: boolean) {
                    alert("There is a problem while creating a design.");
                    });
            }
        }

        public ViewDesign(selectedDesign: Models.Design): void {
            this.designModel = selectedDesign;
        }

        public GetDesigns(): void {
            let current = this;
            this.designService.GetDesigns().then(function (response) {
                current.designs = response;
            });
        }
    }

    JewelleryModule.controller("DesignController", DesignController);
}