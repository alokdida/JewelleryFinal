module Apptus.Jewellery.Common.Services {
	"use strict";

	export class CRUDOperation {
		static $inject = ['$http'];

		constructor(private httpService: ng.IHttpService) {
		}

		private baseURL: string = 'http://localhost:12345/api/';

		private config: ng.IRequestShortcutConfig = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Accept-Encoding': 'gzip, deflate'
			},
			cache: false,
			responseType: 'json'
		};

		private GetFullURL(url: string) {
			return this.baseURL + url;
		}

		public Get(url: string, onSuccess: (response: Object) => any, onFailure: (error: Error) => void): void {
			this.httpService.get(this.GetFullURL(url), this.config).success(onSuccess).error(onFailure);
		}

		public Update(url: string, data: any, onSuccess: (response: Object) => any, onFailure: (error: Error) => void): void {
			this.httpService.put(this.GetFullURL(url), data, this.config).success(onSuccess).error(onFailure);
		}

		public Create(url: string, data: any, onSuccess: (response: Object) => any, onFailure: (error: Error) => void): void {
			this.httpService.post(this.GetFullURL(url), data, this.config).success(onSuccess).error(onFailure);
		}

		public Delete(url: string, onSuccess: (response: Object) => any, onFailure: (error: Error) => void): void {
			this.httpService.delete(this.GetFullURL(url), this.config).success(onSuccess).error(onFailure);
		}
	}

	JewelleryModule.service("CRUDOperationService", CRUDOperation);
}