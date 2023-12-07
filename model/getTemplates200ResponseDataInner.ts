/**
 * ManageSpace Documents API
 * ManageSpace Documents API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { TemplateResponse } from './templateResponse';

export class GetTemplates200ResponseDataInner {
    'results'?: Array<TemplateResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TemplateResponse>"
        }    ];

    static getAttributeTypeMap() {
        return GetTemplates200ResponseDataInner.attributeTypeMap;
    }
}

