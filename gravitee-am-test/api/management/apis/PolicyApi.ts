/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Access Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface Get34Request {
    policy: string;
}

export interface GetDocumentationRequest {
    policy: string;
}

export interface GetSchema4Request {
    policy: string;
}

export interface List35Request {
    expand?: Array<string>;
}

/**
 * 
 */
export class PolicyApi extends runtime.BaseAPI {

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a policy plugin
     */
    async get34Raw(requestParameters: Get34Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.policy === null || requestParameters.policy === undefined) {
            throw new runtime.RequiredError('policy','Required parameter requestParameters.policy was null or undefined when calling get34.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/policies/{policy}`.replace(`{${"policy"}}`, encodeURIComponent(String(requestParameters.policy))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a policy plugin
     */
    async get34(requestParameters: Get34Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.get34Raw(requestParameters, initOverrides);
    }

    /**
     * Get a policy plugin\'s documentation
     */
    async getDocumentationRaw(requestParameters: GetDocumentationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.policy === null || requestParameters.policy === undefined) {
            throw new runtime.RequiredError('policy','Required parameter requestParameters.policy was null or undefined when calling getDocumentation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/policies/{policy}/documentation`.replace(`{${"policy"}}`, encodeURIComponent(String(requestParameters.policy))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get a policy plugin\'s documentation
     */
    async getDocumentation(requestParameters: GetDocumentationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getDocumentationRaw(requestParameters, initOverrides);
    }

    /**
     * Get a policy plugin\'s schema
     */
    async getSchema4Raw(requestParameters: GetSchema4Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.policy === null || requestParameters.policy === undefined) {
            throw new runtime.RequiredError('policy','Required parameter requestParameters.policy was null or undefined when calling getSchema4.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/policies/{policy}/schema`.replace(`{${"policy"}}`, encodeURIComponent(String(requestParameters.policy))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get a policy plugin\'s schema
     */
    async getSchema4(requestParameters: GetSchema4Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getSchema4Raw(requestParameters, initOverrides);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List policy plugins
     */
    async list35Raw(requestParameters: List35Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/policies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List policy plugins
     */
    async list35(requestParameters: List35Request = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.list35Raw(requestParameters, initOverrides);
    }

}
