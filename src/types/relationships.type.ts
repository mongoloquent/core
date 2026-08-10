import { Model } from "../core";
import {
	BelongsTo,
	BelongsToMany,
	HasMany,
	HasManyThrough,
	HasOne,
	MorphedByMany,
	MorphMany,
	MorphOne,
	MorphToMany,
} from "../relationships";

export enum IRelationshipTypes {
	hasOne = "hasOne",
	belongsTo = "belongsTo",
	hasMany = "hasMany",
	belongsToMany = "belongsToMany",
	hasManyThrough = "hasManyThrough",
	morphOne = "morphOne",
	morphMany = "morphMany",
	morphToMany = "morphToMany",
	morphedByMany = "morphedByMany",
}

export interface IRelationshipOptions<T = any> {
	select?: keyof T | (keyof T)[];
	exclude?: keyof T | (keyof T)[];
	makeVisible?: keyof T | (keyof T)[];
	sort?: [keyof T | (string & {}), "asc" | "desc"];
	skip?: number;
	limit?: number;
}

export interface IRelationshipHasOne<T> {
	type: IRelationshipTypes.hasOne;
	model: Model;
	relatedModel: Model<T>;
	foreignKey: string;
	localKey: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipBelongsTo<T> {
	type: IRelationshipTypes.belongsTo;
	model: Model;
	relatedModel: Model<T>;
	foreignKey: string;
	ownerKey: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipHasMany<T> {
	type: IRelationshipTypes.hasMany;
	model: Model;
	relatedModel: Model<T>;
	foreignKey: string;
	localKey: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipHasManyThrough<T> {
	type: IRelationshipTypes.hasManyThrough;
	model: Model;
	relatedModel: Model<T>;
	throughModel: Model;
	foreignKey: string;
	foreignKeyThrough: string;
	localKey: string;
	localKeyThrough: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipBelongsToMany<T> {
	type: IRelationshipTypes.belongsToMany;
	model: Model;
	relatedModel: Model<T>;
	pivotModel: Model;
	foreignPivotKey: string;
	relatedPivotKey: string;
	parentKey: string;
	relatedKey: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipMorphOne<T> {
	type: IRelationshipTypes.morphOne;
	model: Model;
	relatedModel: Model<T>;
	morph: string;
	morphId: string;
	morphType: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipMorphMany<T> {
	type: IRelationshipTypes.morphMany;
	model: Model;
	relatedModel: Model<T>;
	morph: string;
	morphId: string;
	morphType: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipMorphToMany<T> {
	type: IRelationshipTypes.morphToMany;
	model: Model;
	relatedModel: Model<T>;
	morph: string;
	morphId: string;
	morphType: string;
	morphCollectionName: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export interface IRelationshipMorphedByMany<T> {
	type: IRelationshipTypes.morphedByMany;
	model: Model;
	relatedModel: Model<T>;
	morph: string;
	morphId: string;
	morphType: string;
	morphCollectionName: string;
	alias: string;
	options: IRelationshipOptions<T>;
	nested?: string[];
}

export type ExtractRelationshipType<T, K extends keyof T> = T[K] extends (
	...args: any[]
) => HasOne<any, infer R>
	? R
	: T[K] extends (...args: any[]) => HasMany<any, infer R>
		? R
		: T[K] extends (...args: any[]) => BelongsTo<any, infer R>
			? R
			: T[K] extends (...args: any[]) => BelongsToMany<any, infer R, any>
				? R
				: T[K] extends (...args: any[]) => HasManyThrough<any, infer R, any>
					? R
					: T[K] extends (...args: any[]) => MorphMany<any, infer R>
						? R
						: T[K] extends (...args: any[]) => MorphOne<any, infer R>
							? R
							: T[K] extends (...args: any[]) => MorphToMany<any, infer R>
								? R
								: T[K] extends (...args: any[]) => MorphedByMany<any, infer R>
									? R
									: any;

export type RelationshipKeys<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
