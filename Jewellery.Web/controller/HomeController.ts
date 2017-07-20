module Apptus.Jewellery {
	"use strict";

	class HomeController {

		static $inject = ["$state","$scope"];

		constructor(private state: angular.ui.IStateService, private $scope: any) {
			$scope.NavToAbout = this.NavToAbout.bind(this);
			$scope.NavToHome = this.NavToHome.bind(this);
		}

		public NavToAbout(): void {
			this.state.go('About');
		}

		public NavToHome(): void {
			this.state.go('Home');
		}
	}

	JewelleryModule.controller("apptusJewelleryHomeController", HomeController);
}	