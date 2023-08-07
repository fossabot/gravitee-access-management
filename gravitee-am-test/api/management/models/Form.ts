/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Form
 */
export interface Form {
  /**
   *
   * @type {string}
   * @memberof Form
   */
  id?: string;
  /**
   *
   * @type {boolean}
   * @memberof Form
   */
  enabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof Form
   */
  referenceType?: FormReferenceTypeEnum;
  /**
   *
   * @type {string}
   * @memberof Form
   */
  referenceId?: string;
  /**
   *
   * @type {string}
   * @memberof Form
   */
  client?: string;
  /**
   *
   * @type {string}
   * @memberof Form
   */
  template?: string;
  /**
   *
   * @type {string}
   * @memberof Form
   */
  content?: string;
  /**
   *
   * @type {string}
   * @memberof Form
   */
  assets?: string;
  /**
   *
   * @type {number}
   * @memberof Form
   */
  createdAt?: number;
  /**
   *
   * @type {number}
   * @memberof Form
   */
  updatedAt?: number;
}

/**
 * @export
 */
export const FormReferenceTypeEnum = {
  Platform: 'PLATFORM',
  Domain: 'DOMAIN',
  Application: 'APPLICATION',
  Organization: 'ORGANIZATION',
  Environment: 'ENVIRONMENT',
} as const;
export type FormReferenceTypeEnum = typeof FormReferenceTypeEnum[keyof typeof FormReferenceTypeEnum];

export function FormFromJSON(json: any): Form {
  return FormFromJSONTyped(json, false);
}

export function FormFromJSONTyped(json: any, ignoreDiscriminator: boolean): Form {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    referenceType: !exists(json, 'referenceType') ? undefined : json['referenceType'],
    referenceId: !exists(json, 'referenceId') ? undefined : json['referenceId'],
    client: !exists(json, 'client') ? undefined : json['client'],
    template: !exists(json, 'template') ? undefined : json['template'],
    content: !exists(json, 'content') ? undefined : json['content'],
    assets: !exists(json, 'assets') ? undefined : json['assets'],
    createdAt: !exists(json, 'createdAt') ? undefined : json['createdAt'],
    updatedAt: !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
  };
}

export function FormToJSON(value?: Form | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    enabled: value.enabled,
    referenceType: value.referenceType,
    referenceId: value.referenceId,
    client: value.client,
    template: value.template,
    content: value.content,
    assets: value.assets,
    createdAt: value.createdAt,
    updatedAt: value.updatedAt,
  };
}
