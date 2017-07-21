module Apptus.Jewellery.Common.Controllers {
    "use strict";

    import PageType = Apptus.Jewellery.Common.UserDefinedEnums.PageType;

    class HomeController {

        static $inject = ["$state", "$scope"];

        public currentPage: PageType;

        constructor(private state: angular.ui.IStateService, private $scope: any) {
            $scope.NavToDesign = this.NavToDesign.bind(this);
            $scope.NavToItem = this.NavToItem.bind(this);
            $scope.IsDesignPage = this.IsDesignPage.bind(this);
            $scope.IsItemPage = this.IsItemPage.bind(this);
            this.currentPage = PageType.Design;
        }

        public NavToDesign(): void {
            this.currentPage = PageType.Design;
        }

        public NavToItem(): void {
            this.currentPage = PageType.Item;
        }

        public IsDesignPage(): boolean {
            return this.currentPage === PageType.Design;
        }

        public IsItemPage(): boolean {
            return this.currentPage === PageType.Item;
        }
    }

    JewelleryModule.controller("apptusJewelleryHomeController", HomeController);
}	