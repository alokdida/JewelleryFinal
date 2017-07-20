module Apptus.Jewellery {
	"use strict";

	let allModules = [
		"ui.router"
	];

	export let JewelleryModule = angular.module('apptusJewelleryModule', allModules);

	JewelleryModule.config([
		"$stateProvider",
		"$urlRouterProvider",
		"$controllerProvider",
		function routes(
			$stateProvider: angular.ui.IStateProvider,
			$urlRouterProvider: angular.ui.IUrlRouterProvider) {
			$urlRouterProvider.otherwise('/Home');

			$stateProvider
				.state("Home", <ng.ui.IState>{
					url: "/Home",
					templateUrl: "common/views/Home.html",
					controller: "apptusJewelleryHomeController"
				})
				.state("About", <ng.ui.IState>{
					url: "/About",
					templateUrl: "common/views/About.html",
					controller: "apptusJewelleryHomeController"
				});
		}]);
}