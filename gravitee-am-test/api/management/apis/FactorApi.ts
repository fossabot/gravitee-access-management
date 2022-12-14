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
import {
    Factor,
    FactorFromJSON,
    FactorToJSON,
    NewFactor,
    NewFactorFromJSON,
    NewFactorToJSON,
    UpdateFactor,
    UpdateFactorFromJSON,
    UpdateFactorToJSON,
} from '../models';

export interface Create6Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    factor: NewFactor;
}

export interface Delete9Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    factor: string;
}

export interface Get16Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    factor: string;
}

export interface Get35Request {
    factor: string;
}

export interface GetSchema5Request {
    factor: string;
}

export interface List14Request {
    organizationId: string;
    environmentId: string;
    domain: string;
}

export interface Update8Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    factor: string;
    identity: UpdateFactor;
}

/**
 * 
 */
export class FactorApi extends runtime.BaseAPI {

    /**
     * User must have the DOMAIN_FACTOR[CREATE] permission on the specified domain or DOMAIN_FACTOR[CREATE] permission on the specified environment or DOMAIN_FACTOR[CREATE] permission on the specified organization
     * Create a factor
     */
    async create6Raw(requestParameters: Create6Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling create6.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling create6.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling create6.');
        }

        if (requestParameters.factor === null || requestParameters.factor === undefined) {
            throw new runtime.RequiredError('factor','Required parameter requestParameters.factor was null or undefined when calling create6.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/factors`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewFactorToJSON(requestParameters.factor),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_FACTOR[CREATE] permission on the specified domain or DOMAIN_FACTOR[CREATE] permission on the specified environment or DOMAIN_FACTOR[CREATE] permission on the specified organization
     * Create a factor
     */
    async create6(requestParameters: Create6Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.create6Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_FACTOR[DELETE] permission on the specified domain or DOMAIN_FACTOR[DELETE] permission on the specified environment or DOMAIN_FACTOR[DELETE] permission on the specified organization
     * Delete a factor
     */
    async delete9Raw(requestParameters: Delete9Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling delete9.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling delete9.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling delete9.');
        }

        if (requestParameters.factor === null || requestParameters.factor === undefined) {
            throw new runtime.RequiredError('factor','Required parameter requestParameters.factor was null or undefined when calling delete9.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/factors/{factor}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"factor"}}`, encodeURIComponent(String(requestParameters.factor))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_FACTOR[DELETE] permission on the specified domain or DOMAIN_FACTOR[DELETE] permission on the specified environment or DOMAIN_FACTOR[DELETE] permission on the specified organization
     * Delete a factor
     */
    async delete9(requestParameters: Delete9Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.delete9Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_FACTOR[READ] permission on the specified domain or DOMAIN_FACTOR[READ] permission on the specified environment or DOMAIN_FACTOR[READ] permission on the specified organization
     * Get a factor
     */
    async get16Raw(requestParameters: Get16Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Factor>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling get16.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling get16.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling get16.');
        }

        if (requestParameters.factor === null || requestParameters.factor === undefined) {
            throw new runtime.RequiredError('factor','Required parameter requestParameters.factor was null or undefined when calling get16.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/factors/{factor}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"factor"}}`, encodeURIComponent(String(requestParameters.factor))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FactorFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_FACTOR[READ] permission on the specified domain or DOMAIN_FACTOR[READ] permission on the specified environment or DOMAIN_FACTOR[READ] permission on the specified organization
     * Get a factor
     */
    async get16(requestParameters: Get16Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Factor> {
        const response = await this.get16Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a factor plugin
     */
    async get35Raw(requestParameters: Get35Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.factor === null || requestParameters.factor === undefined) {
            throw new runtime.RequiredError('factor','Required parameter requestParameters.factor was null or undefined when calling get35.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/factors/{factor}`.replace(`{${"factor"}}`, encodeURIComponent(String(requestParameters.factor))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a factor plugin
     */
    async get35(requestParameters: Get35Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.get35Raw(requestParameters, initOverrides);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a factor plugin\'s schema
     */
    async getSchema5Raw(requestParameters: GetSchema5Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.factor === null || requestParameters.factor === undefined) {
            throw new runtime.RequiredError('factor','Required parameter requestParameters.factor was null or undefined when calling getSchema5.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/factors/{factor}/schema`.replace(`{${"factor"}}`, encodeURIComponent(String(requestParameters.factor))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a factor plugin\'s schema
     */
    async getSchema5(requestParameters: GetSchema5Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getSchema5Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_FACTOR[LIST] permission on the specified domain or DOMAIN_FACTOR[LIST] permission on the specified environment or DOMAIN_FACTOR[LIST] permission on the specified organization Each returned factor is filtered and contains only basic information such as id, name and factor type.
     * List registered factors for a security domain
     */
    async list14Raw(requestParameters: List14Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<Factor>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling list14.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling list14.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling list14.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/factors`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FactorFromJSON));
    }

    /**
     * User must have the DOMAIN_FACTOR[LIST] permission on the specified domain or DOMAIN_FACTOR[LIST] permission on the specified environment or DOMAIN_FACTOR[LIST] permission on the specified organization Each returned factor is filtered and contains only basic information such as id, name and factor type.
     * List registered factors for a security domain
     */
    async list14(requestParameters: List14Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<Factor>> {
        const response = await this.list14Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List factor plugins
     */
    async list36Raw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/factors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List factor plugins
     */
    async list36(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.list36Raw(initOverrides);
    }

    /**
     * User must have the DOMAIN_FACTOR[UPDATE] permission on the specified domain or DOMAIN_FACTOR[UPDATE] permission on the specified environment or DOMAIN_FACTOR[UPDATE] permission on the specified organization
     * Update a factor
     */
    async update8Raw(requestParameters: Update8Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Factor>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling update8.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling update8.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling update8.');
        }

        if (requestParameters.factor === null || requestParameters.factor === undefined) {
            throw new runtime.RequiredError('factor','Required parameter requestParameters.factor was null or undefined when calling update8.');
        }

        if (requestParameters.identity === null || requestParameters.identity === undefined) {
            throw new runtime.RequiredError('identity','Required parameter requestParameters.identity was null or undefined when calling update8.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/factors/{factor}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"factor"}}`, encodeURIComponent(String(requestParameters.factor))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFactorToJSON(requestParameters.identity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FactorFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_FACTOR[UPDATE] permission on the specified domain or DOMAIN_FACTOR[UPDATE] permission on the specified environment or DOMAIN_FACTOR[UPDATE] permission on the specified organization
     * Update a factor
     */
    async update8(requestParameters: Update8Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Factor> {
        const response = await this.update8Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
