/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../context.js"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CategoryWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ClassUniCategorySubCompoundUniqueInput: { // input type
    categoryId: number; // Int!
    subcategoryId: number; // Int!
  }
  ClassWhereUniqueInput: { // input type
    id?: number | null; // Int
    uniCategorySub?: NexusGenInputs['ClassUniCategorySubCompoundUniqueInput'] | null; // ClassUniCategorySubCompoundUniqueInput
  }
  MethodPaymentWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  OriginWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  SectorWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  SubcategoryWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Category: { // root type
    category: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
  }
  Class: { // root type
    categoryId?: number | null; // Int
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    subcategoryId?: number | null; // Int
  }
  MethodPayment: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    methodPayment: string; // String!
  }
  Mutation: {};
  Origin: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    origin: string; // String!
  }
  Query: {};
  Sector: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    sector: string; // String!
  }
  Subcategory: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    subcategory: string; // String!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Category: { // field return type
    category: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
  }
  Class: { // field return type
    category: NexusGenRootTypes['Category'] | null; // Category
    categoryId: number | null; // Int
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    subcategory: NexusGenRootTypes['Subcategory'] | null; // Subcategory
    subcategoryId: number | null; // Int
  }
  MethodPayment: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    methodPayment: string; // String!
  }
  Mutation: { // field return type
    createCategory: NexusGenRootTypes['Category'] | null; // Category
    createClass: NexusGenRootTypes['Class'] | null; // Class
    createMethodPayment: NexusGenRootTypes['MethodPayment'] | null; // MethodPayment
    createOrigin: NexusGenRootTypes['Origin'] | null; // Origin
    createSector: NexusGenRootTypes['Sector'] | null; // Sector
    createSubcategory: NexusGenRootTypes['Subcategory'] | null; // Subcategory
    createUser: NexusGenRootTypes['User'] | null; // User
  }
  Origin: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    origin: string; // String!
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    category: NexusGenRootTypes['Category'] | null; // Category
    class: NexusGenRootTypes['Class'] | null; // Class
    classes: NexusGenRootTypes['Class'][]; // [Class!]!
    methodPayment: NexusGenRootTypes['MethodPayment'] | null; // MethodPayment
    methodPayments: NexusGenRootTypes['MethodPayment'][]; // [MethodPayment!]!
    origin: NexusGenRootTypes['Origin'] | null; // Origin
    origins: NexusGenRootTypes['Origin'][]; // [Origin!]!
    sector: NexusGenRootTypes['Sector'] | null; // Sector
    sectors: NexusGenRootTypes['Sector'][]; // [Sector!]!
    subcategories: NexusGenRootTypes['Subcategory'][]; // [Subcategory!]!
    subcategory: NexusGenRootTypes['Subcategory'] | null; // Subcategory
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Sector: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    sector: string; // String!
  }
  Subcategory: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    subcategory: string; // String!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Category: { // field return type name
    category: 'String'
    createdAt: 'DateTime'
    id: 'Int'
  }
  Class: { // field return type name
    category: 'Category'
    categoryId: 'Int'
    createdAt: 'DateTime'
    id: 'Int'
    subcategory: 'Subcategory'
    subcategoryId: 'Int'
  }
  MethodPayment: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    methodPayment: 'String'
  }
  Mutation: { // field return type name
    createCategory: 'Category'
    createClass: 'Class'
    createMethodPayment: 'MethodPayment'
    createOrigin: 'Origin'
    createSector: 'Sector'
    createSubcategory: 'Subcategory'
    createUser: 'User'
  }
  Origin: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    origin: 'String'
  }
  Query: { // field return type name
    categories: 'Category'
    category: 'Category'
    class: 'Class'
    classes: 'Class'
    methodPayment: 'MethodPayment'
    methodPayments: 'MethodPayment'
    origin: 'Origin'
    origins: 'Origin'
    sector: 'Sector'
    sectors: 'Sector'
    subcategories: 'Subcategory'
    subcategory: 'Subcategory'
    user: 'User'
    users: 'User'
  }
  Sector: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    sector: 'String'
  }
  Subcategory: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    subcategory: 'String'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCategory: { // args
      category: string; // String!
    }
    createClass: { // args
      categoryId: number; // Int!
      subcategoryId: number; // Int!
    }
    createMethodPayment: { // args
      methodPayment: string; // String!
    }
    createOrigin: { // args
      origin: string; // String!
    }
    createSector: { // args
      sector: string; // String!
    }
    createSubcategory: { // args
      subcategory: string; // String!
    }
    createUser: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
  }
  Query: {
    categories: { // args
      after?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      before?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    category: { // args
      where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
    }
    class: { // args
      where: NexusGenInputs['ClassWhereUniqueInput']; // ClassWhereUniqueInput!
    }
    classes: { // args
      after?: NexusGenInputs['ClassWhereUniqueInput'] | null; // ClassWhereUniqueInput
      before?: NexusGenInputs['ClassWhereUniqueInput'] | null; // ClassWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    methodPayment: { // args
      where: NexusGenInputs['MethodPaymentWhereUniqueInput']; // MethodPaymentWhereUniqueInput!
    }
    methodPayments: { // args
      after?: NexusGenInputs['MethodPaymentWhereUniqueInput'] | null; // MethodPaymentWhereUniqueInput
      before?: NexusGenInputs['MethodPaymentWhereUniqueInput'] | null; // MethodPaymentWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    origin: { // args
      where: NexusGenInputs['OriginWhereUniqueInput']; // OriginWhereUniqueInput!
    }
    origins: { // args
      after?: NexusGenInputs['OriginWhereUniqueInput'] | null; // OriginWhereUniqueInput
      before?: NexusGenInputs['OriginWhereUniqueInput'] | null; // OriginWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    sector: { // args
      where: NexusGenInputs['SectorWhereUniqueInput']; // SectorWhereUniqueInput!
    }
    sectors: { // args
      after?: NexusGenInputs['SectorWhereUniqueInput'] | null; // SectorWhereUniqueInput
      before?: NexusGenInputs['SectorWhereUniqueInput'] | null; // SectorWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    subcategories: { // args
      after?: NexusGenInputs['SubcategoryWhereUniqueInput'] | null; // SubcategoryWhereUniqueInput
      before?: NexusGenInputs['SubcategoryWhereUniqueInput'] | null; // SubcategoryWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    subcategory: { // args
      where: NexusGenInputs['SubcategoryWhereUniqueInput']; // SubcategoryWhereUniqueInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}