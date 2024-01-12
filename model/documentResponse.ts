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
import { DocumentValue } from './documentValue';

export class DocumentResponse {
    /**
    * Document Id
    */
    'documentId': string;
    /**
    * The user ID the document is for.
    */
    'recipientId': string;
    /**
    * Id of the template
    */
    'templateVersionId': string;
    /**
    * Current document status
    */
    'documentStatusId': number;
    /**
    * Current document condition
    */
    'documentConditionId': number;
    /**
    * Key-value pairs to be used in the document.
    */
    'documentValues': Array<DocumentValue>;
    /**
    * Expires At
    */
    'expiresAt': Date | null;
    /**
    * Template type
    */
    'templateTypeId': DocumentResponse.TemplateTypeIdEnum;
    /**
    * Template Name
    */
    'templateName': string;
    /**
    * Pre signed url to download the document
    */
    'downloadUrl': string;
    /**
    * Created At
    */
    'createdAt': Date | null;
    /**
    * Updated At
    */
    'updatedAt'?: Date | null;
    /**
    * Encoded HTML
    */
    'markup': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "recipientId",
            "baseName": "recipientId",
            "type": "string"
        },
        {
            "name": "templateVersionId",
            "baseName": "templateVersionId",
            "type": "string"
        },
        {
            "name": "documentStatusId",
            "baseName": "documentStatusId",
            "type": "number"
        },
        {
            "name": "documentConditionId",
            "baseName": "documentConditionId",
            "type": "number"
        },
        {
            "name": "documentValues",
            "baseName": "documentValues",
            "type": "Array<DocumentValue>"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        },
        {
            "name": "templateTypeId",
            "baseName": "templateTypeId",
            "type": "DocumentResponse.TemplateTypeIdEnum"
        },
        {
            "name": "templateName",
            "baseName": "templateName",
            "type": "string"
        },
        {
            "name": "downloadUrl",
            "baseName": "downloadUrl",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "markup",
            "baseName": "markup",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DocumentResponse.attributeTypeMap;
    }
}

export namespace DocumentResponse {
    export enum TemplateTypeIdEnum {
        NUMBER_1 = <any> 1,
        NUMBER_2 = <any> 2,
        NUMBER_3 = <any> 3,
        NUMBER_4 = <any> 4
    }
}
