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
    CertificateEntity,
    CertificateEntityFromJSON,
    CertificateEntityToJSON,
    CertificateKey,
    CertificateKeyFromJSON,
    CertificateKeyToJSON,
    NewCertificate,
    NewCertificateFromJSON,
    NewCertificateToJSON,
    UpdateCertificate,
    UpdateCertificateFromJSON,
    UpdateCertificateToJSON,
} from '../models';

export interface CreateCertificateRequest {
    organizationId: string;
    environmentId: string;
    domain: string;
    certificate: NewCertificate;
}

export interface DeleteCertificateRequest {
    organizationId: string;
    environmentId: string;
    domain: string;
    certificate: string;
}

export interface FindCertificateRequest {
    organizationId: string;
    environmentId: string;
    domain: string;
    certificate: string;
}

export interface Get31Request {
    certificate: string;
}

export interface GetCertificatePublicKeyRequest {
    organizationId: string;
    environmentId: string;
    domain: string;
    certificate: string;
}

export interface GetCertificatePublicKeysRequest {
    organizationId: string;
    environmentId: string;
    domain: string;
    certificate: string;
}

export interface GetSchema1Request {
    certificate: string;
}

export interface ListCertificatesRequest {
    organizationId: string;
    environmentId: string;
    domain: string;
    use?: string;
}

export interface UpdateCertificateRequest {
    organizationId: string;
    environmentId: string;
    domain: string;
    certificate: string;
    certificate2: UpdateCertificate;
}

/**
 * 
 */
export class CertificateApi extends runtime.BaseAPI {

    /**
     * User must have the DOMAIN_CERTIFICATE[CREATE] permission on the specified domain or DOMAIN_CERTIFICATE[CREATE] permission on the specified environment or DOMAIN_CERTIFICATE[CREATE] permission on the specified organization
     * Create a certificate
     */
    async createCertificateRaw(requestParameters: CreateCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CertificateEntity>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling createCertificate.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling createCertificate.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling createCertificate.');
        }

        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling createCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/certificates`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewCertificateToJSON(requestParameters.certificate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificateEntityFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[CREATE] permission on the specified domain or DOMAIN_CERTIFICATE[CREATE] permission on the specified environment or DOMAIN_CERTIFICATE[CREATE] permission on the specified organization
     * Create a certificate
     */
    async createCertificate(requestParameters: CreateCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CertificateEntity> {
        const response = await this.createCertificateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[DELETE] permission on the specified domain or DOMAIN_CERTIFICATE[DELETE] permission on the specified environment or DOMAIN_CERTIFICATE[DELETE] permission on the specified organization
     * Delete a certificate
     */
    async deleteCertificateRaw(requestParameters: DeleteCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling deleteCertificate.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling deleteCertificate.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling deleteCertificate.');
        }

        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling deleteCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/certificates/{certificate}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"certificate"}}`, encodeURIComponent(String(requestParameters.certificate))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[DELETE] permission on the specified domain or DOMAIN_CERTIFICATE[DELETE] permission on the specified environment or DOMAIN_CERTIFICATE[DELETE] permission on the specified organization
     * Delete a certificate
     */
    async deleteCertificate(requestParameters: DeleteCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.deleteCertificateRaw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[READ] permission on the specified domain or DOMAIN_CERTIFICATE[READ] permission on the specified environment or DOMAIN_CERTIFICATE[READ] permission on the specified organization
     * Get a certificate
     */
    async findCertificateRaw(requestParameters: FindCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CertificateEntity>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling findCertificate.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling findCertificate.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling findCertificate.');
        }

        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling findCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/certificates/{certificate}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"certificate"}}`, encodeURIComponent(String(requestParameters.certificate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificateEntityFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[READ] permission on the specified domain or DOMAIN_CERTIFICATE[READ] permission on the specified environment or DOMAIN_CERTIFICATE[READ] permission on the specified organization
     * Get a certificate
     */
    async findCertificate(requestParameters: FindCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CertificateEntity> {
        const response = await this.findCertificateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get an certificate plugin
     */
    async get31Raw(requestParameters: Get31Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling get31.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/certificates/{certificate}`.replace(`{${"certificate"}}`, encodeURIComponent(String(requestParameters.certificate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get an certificate plugin
     */
    async get31(requestParameters: Get31Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.get31Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN[READ] permission on the specified domain or DOMAIN[READ] permission on the specified environment or DOMAIN[READ] permission on the specified organization
     * Get the certificate public key
     */
    async getCertificatePublicKeyRaw(requestParameters: GetCertificatePublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCertificatePublicKey.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling getCertificatePublicKey.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling getCertificatePublicKey.');
        }

        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling getCertificatePublicKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/certificates/{certificate}/key`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"certificate"}}`, encodeURIComponent(String(requestParameters.certificate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * User must have the DOMAIN[READ] permission on the specified domain or DOMAIN[READ] permission on the specified environment or DOMAIN[READ] permission on the specified organization
     * Get the certificate public key
     */
    async getCertificatePublicKey(requestParameters: GetCertificatePublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string> {
        const response = await this.getCertificatePublicKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the DOMAIN[READ] permission on the specified domain or DOMAIN[READ] permission on the specified environment or DOMAIN[READ] permission on the specified organization
     * Get the certificate public keys
     */
    async getCertificatePublicKeysRaw(requestParameters: GetCertificatePublicKeysRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<CertificateKey>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCertificatePublicKeys.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling getCertificatePublicKeys.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling getCertificatePublicKeys.');
        }

        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling getCertificatePublicKeys.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/certificates/{certificate}/keys`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"certificate"}}`, encodeURIComponent(String(requestParameters.certificate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CertificateKeyFromJSON));
    }

    /**
     * User must have the DOMAIN[READ] permission on the specified domain or DOMAIN[READ] permission on the specified environment or DOMAIN[READ] permission on the specified organization
     * Get the certificate public keys
     */
    async getCertificatePublicKeys(requestParameters: GetCertificatePublicKeysRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<CertificateKey>> {
        const response = await this.getCertificatePublicKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get an certificate\'s schema
     */
    async getSchema1Raw(requestParameters: GetSchema1Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling getSchema1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/certificates/{certificate}/schema`.replace(`{${"certificate"}}`, encodeURIComponent(String(requestParameters.certificate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * Get an certificate\'s schema
     */
    async getSchema1(requestParameters: GetSchema1Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getSchema1Raw(requestParameters, initOverrides);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List certificate plugins
     */
    async list32Raw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/platform/plugins/certificates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * There is no particular permission needed. User must be authenticated.
     * List certificate plugins
     */
    async list32(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.list32Raw(initOverrides);
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[LIST] permission on the specified domain or DOMAIN_CERTIFICATE[LIST] permission on the specified environment or DOMAIN_CERTIFICATE[LIST] permission on the specified organization. Each returned certificate is filtered and contains only basic information such as id, name and type.
     * List registered certificates for a security domain
     */
    async listCertificatesRaw(requestParameters: ListCertificatesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Set<CertificateEntity>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling listCertificates.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling listCertificates.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling listCertificates.');
        }

        const queryParameters: any = {};

        if (requestParameters.use !== undefined) {
            queryParameters['use'] = requestParameters.use;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/certificates`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => new Set(jsonValue.map(CertificateEntityFromJSON)));
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[LIST] permission on the specified domain or DOMAIN_CERTIFICATE[LIST] permission on the specified environment or DOMAIN_CERTIFICATE[LIST] permission on the specified organization. Each returned certificate is filtered and contains only basic information such as id, name and type.
     * List registered certificates for a security domain
     */
    async listCertificates(requestParameters: ListCertificatesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Set<CertificateEntity>> {
        const response = await this.listCertificatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[UPDATE] permission on the specified domain or DOMAIN_CERTIFICATE[UPDATE] permission on the specified environment or DOMAIN_CERTIFICATE[UPDATE] permission on the specified organization
     * Update a certificate
     */
    async updateCertificateRaw(requestParameters: UpdateCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CertificateEntity>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling updateCertificate.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling updateCertificate.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling updateCertificate.');
        }

        if (requestParameters.certificate === null || requestParameters.certificate === undefined) {
            throw new runtime.RequiredError('certificate','Required parameter requestParameters.certificate was null or undefined when calling updateCertificate.');
        }

        if (requestParameters.certificate2 === null || requestParameters.certificate2 === undefined) {
            throw new runtime.RequiredError('certificate2','Required parameter requestParameters.certificate2 was null or undefined when calling updateCertificate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/certificates/{certificate}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"certificate"}}`, encodeURIComponent(String(requestParameters.certificate))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCertificateToJSON(requestParameters.certificate2),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificateEntityFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_CERTIFICATE[UPDATE] permission on the specified domain or DOMAIN_CERTIFICATE[UPDATE] permission on the specified environment or DOMAIN_CERTIFICATE[UPDATE] permission on the specified organization
     * Update a certificate
     */
    async updateCertificate(requestParameters: UpdateCertificateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CertificateEntity> {
        const response = await this.updateCertificateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
