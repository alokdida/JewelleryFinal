module Apptus.Jewellery.Services {
	"use strict";

	export class ItemService {
		static $inject = ["CRUDOperationService"];

		constructor(crudOperationService: Apptus.Jewellery.Common.Services.CRUDOperation) {

		}
	}

	JewelleryModule.service("ItemService", ItemService);
}