module Apptus.Jewellery.Common.Services {
    "use strict";

    export class CRUDOperation {
        static $inject = ['$http'];

        constructor(private httpService: ng.IHttpService) {
        }

        private baseURL: string = 'http://localhost:12345/odata/';

        private config: ng.IRequestShortcutConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            cache: false,
            responseType: 'json'
        };

        private GetFullURL(url: string) {
            return this.baseURL + url;
        }

        public Get(url: string): ng.IPromise<any> {

            return this.httpService.get(this.GetFullURL(url), this.config).then(function (response: any) {
                return response;
            }, function (error: any) {
                return error;
            });
        }

        public Update(url: string, data: any, onSuccess: (response: Object) => any, onFailure: (error: Error) => void): void {
            this.httpService.put(this.GetFullURL(url), data, this.config).then(onSuccess, onFailure);
        }

        public Create(url: string, data: any): ng.IPromise<any> {
            this.httpService.defaults.headers.post["Content-Type"] = "application/json";
            return this.httpService.post(this.GetFullURL(url),JSON.stringify(data))
                .then(function (response: any) {
                    return response;
                },
                function (error: any) {
                    return error;
                });
        }

        public Delete(url: string, onSuccess: (response: Object) => any, onFailure: (error: Error) => void): void {
            this.httpService.delete(this.GetFullURL(url), this.config).then(onSuccess, onFailure);
        }
    }

    JewelleryModule.service("CRUDOperationService", CRUDOperation);
}