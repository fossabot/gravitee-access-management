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
    NewServiceResource,
    NewServiceResourceFromJSON,
    NewServiceResourceToJSON,
    ServiceResource,
    ServiceResourceFromJSON,
    ServiceResourceToJSON,
    UpdateServiceResource,
    UpdateServiceResourceFromJSON,
    UpdateServiceResourceToJSON,
} from '../models';

export interface Create7Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: NewServiceResource;
}

export interface Delete10Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: string;
}

export interface Get17Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: string;
}

export interface Get37Request {
    resource: string;
}

export interface GetSchema6Request {
    resource: string;
}

export interface List15Request {
    organizationId: string;
    environmentId: string;
    domain: string;
}

export interface List37Request {
    expand?: Array<string>;
}

export interface Update9Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    resource: string;
    identity: UpdateServiceResource;
}

/**
 * 
 */
export class ResourceApi extends runtime.BaseAPI {

    /**
     * User must have the DOMAIN_RESOURCE[CREATE] permission on the specified domain or DOMAIN_RESOURCE[CREATE] permission on the specified environment or DOMAIN_RESOURCE[CREATE] permission on the specified organization
     * Create a resource
     */
    async create7Raw(requestParameters: Create7Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling create7.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling create7.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling create7.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling create7.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewServiceResourceToJSON(requestParameters.resource),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_RESOURCE[CREATE] permission on the specified domain or DOMAIN_RESOURCE[CREATE] permission on the specified environment or DOMAIN_RESOURCE[CREATE] permission on the specified organization
     * Create a resource
     */
    async create7(requestParameters: Create7Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.create7Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[DELETE] permission on the specified domain or DOMAIN_RESOURCE[DELETE] permission on the specified environment or DOMAIN_RESOURCE[DELETE] permission on the specified organization
     * Delete a resource
     */
    async delete10Raw(requestParameters: Delete10Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling delete10.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling delete10.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling delete10.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling delete10.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_RESOURCE[DELETE] permission on the specified domain or DOMAIN_RESOURCE[DELETE] permission on the specified environment or DOMAIN_RESOURCE[DELETE] permission on the specified organization
     * Delete a resource
     */
    async delete10(requestParameters: Delete10Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.delete10Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[READ] permission on the specified domain or DOMAIN_RESOURCE[READ] permission on the specified environment or DOMAIN_RESOURCE[READ] permission on the specified organization
     * Get a resource
     */
    async get17Raw(requestParameters: Get17Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ServiceResource>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling get17.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling get17.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling get17.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling get17.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceResourceFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_RESOURCE[READ] permission on the specified domain or DOMAIN_RESOURCE[READ] permission on the specified environment or DOMAIN_RESOURCE[READ] permission on the specified organization
     * Get a resource
     */
    async get17(requestParameters: Get17Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ServiceResource> {
        const response = await this.get17Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin
     */
    async get37Raw(requestParameters: Get37Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling get37.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/resources/{resource}`.replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin
     */
    async get37(requestParameters: Get37Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.get37Raw(requestParameters, initOverrides);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin\'s schema
     */
    async getSchema6Raw(requestParameters: GetSchema6Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling getSchema6.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/resources/{resource}/schema`.replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get a resource plugin\'s schema
     */
    async getSchema6(requestParameters: GetSchema6Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getSchema6Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[LIST] permission on the specified domain or DOMAIN_RESOURCE[LIST] permission on the specified environment or DOMAIN_RESOURCE[LIST] permission on the specified organization Each returned resource is filtered and contains only basic information such as id, name and resource type.
     * List registered resources for a security domain
     */
    async list15Raw(requestParameters: List15Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<ServiceResource>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling list15.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling list15.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling list15.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ServiceResourceFromJSON));
    }

    /**
     * User must have the DOMAIN_RESOURCE[LIST] permission on the specified domain or DOMAIN_RESOURCE[LIST] permission on the specified environment or DOMAIN_RESOURCE[LIST] permission on the specified organization Each returned resource is filtered and contains only basic information such as id, name and resource type.
     * List registered resources for a security domain
     */
    async list15(requestParameters: List15Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<ServiceResource>> {
        const response = await this.list15Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List resource plugins
     */
    async list37Raw(requestParameters: List37Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/resources`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List resource plugins
     */
    async list37(requestParameters: List37Request = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.list37Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_RESOURCE[UPDATE] permission on the specified domain or DOMAIN_RESOURCE[UPDATE] permission on the specified environment or DOMAIN_RESOURCE[UPDATE] permission on the specified organization
     * Update a resource
     */
    async update9Raw(requestParameters: Update9Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ServiceResource>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling update9.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling update9.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling update9.');
        }

        if (requestParameters.resource === null || requestParameters.resource === undefined) {
            throw new runtime.RequiredError('resource','Required parameter requestParameters.resource was null or undefined when calling update9.');
        }

        if (requestParameters.identity === null || requestParameters.identity === undefined) {
            throw new runtime.RequiredError('identity','Required parameter requestParameters.identity was null or undefined when calling update9.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"resource"}}`, encodeURIComponent(String(requestParameters.resource))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateServiceResourceToJSON(requestParameters.identity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceResourceFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_RESOURCE[UPDATE] permission on the specified domain or DOMAIN_RESOURCE[UPDATE] permission on the specified environment or DOMAIN_RESOURCE[UPDATE] permission on the specified organization
     * Update a resource
     */
    async update9(requestParameters: Update9Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ServiceResource> {
        const response = await this.update9Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
