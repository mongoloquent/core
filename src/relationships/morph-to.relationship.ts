import {
	Collection,
	Model,
	QueryBuilder,
	IQueryBuilderPaginated,
	IQueryBuilderFormSchema,
	IRelationshipMorphTo,
} from "../index";
import { LookupBuilder } from "./lookup-builder.relationship";
import { BulkWriteOptions, Document, InsertOneOptions, ObjectId, WithId } from "mongodb";

export class MorphTo<T = any, M = any> extends QueryBuilder<M> {
	public model: Model<T>;
	public relatedModel: Model<M>;
	public morph: string;
	public morphId: keyof T;
	public morphType: keyof T;

	constructor(model: Model<T>, relatedModel: Model<M>, morph: string) {
		super();
		this.model = model;
		this.relatedModel = relatedModel;
		this.morph = morph;
		this.morphId = `${morph}Id` as keyof T;
		this.morphType = `${morph}Type` as keyof T;

		this.setConnection(relatedModel["$connection"]);
		this.setCollection(relatedModel["$collection"]);
		this.setDatabaseName(relatedModel["$databaseName"]);
		this.setUseSoftDelete(relatedModel["$useSoftDelete"]);
		this.setUseTimestamps(relatedModel["$useTimestamps"]);
		this.setIsDeleted(relatedModel["$isDeleted"]);
	}

	public firstOrNew(
		filter: Partial<IQueryBuilderFormSchema<M>>,
		doc?: Partial<IQueryBuilderFormSchema<M>>,
		options?: InsertOneOptions,
	): Promise<M> {
		const _filter = {
			...filter,
			[this.morphType]: this.model.constructor.name,
			[this.morphId]: (this.model["$original"] as any)["_id"],
		} as IQueryBuilderFormSchema<M>;
		return super.firstOrNew(_filter, doc, options);
	}

	public firstOrCreate(
		filter: Partial<IQueryBuilderFormSchema<M>>,
		doc?: Partial<IQueryBuilderFormSchema<M>>,
		options?: InsertOneOptions,
	): Promise<M> {
		const _filter = {
			...filter,
			[this.morphType]: this.model.constructor.name,
			[this.morphId]: (this.model["$original"] as any)["_id"],
		} as IQueryBuilderFormSchema<M>;

		return super.firstOrCreate(_filter, doc, options);
	}

	public updateOrCreate(
		filter: Partial<IQueryBuilderFormSchema<M>>,
		doc?: Partial<IQueryBuilderFormSchema<M>>,
		options?: InsertOneOptions,
	): Promise<M | WithId<IQueryBuilderFormSchema<M>>> {
		const _filter = {
			...filter,
			[this.morphType]: this.model.constructor.name,
			[this.morphId]: (this.model["$original"] as any)["_id"],
		} as IQueryBuilderFormSchema<M>;

		return super.updateOrCreate(_filter, doc, options);
	}

	// @ts-ignore
	public save(doc: Partial<IQueryBuilderFormSchema<M>>, options?: InsertOneOptions): Promise<M> {
		const data = {
			...doc,
			[this.morphType]: this.model.constructor.name,
			[this.morphId]: (this.model["$original"] as any)["_id"],
		} as IQueryBuilderFormSchema<M>;

		return this.insert(data, options);
	}

	public saveMany(
		docs: Partial<IQueryBuilderFormSchema<M>>[],
		options?: BulkWriteOptions,
	): Promise<ObjectId[]> {
		const data = docs.map(doc => ({
			...doc,
			[this.morphType]: this.model.constructor.name,
			[this.morphId]: (this.model["$original"] as any)["_id"],
		})) as IQueryBuilderFormSchema<M>[];

		return this.insertMany(data, options);
	}

	// @ts-ignore
	public create(doc: Partial<IQueryBuilderFormSchema<M>>, options?: InsertOneOptions): Promise<M> {
		return this.save(doc, options);
	}

	// @ts-ignore
	public createMany(
		docs: Partial<IQueryBuilderFormSchema<M>>[],
		options?: BulkWriteOptions,
	): Promise<ObjectId[]> {
		return this.saveMany(docs, options);
	}

	public all(): Promise<Collection<M>> {
		return super.all();
	}

	public async get<K extends keyof M>(
		...fields: (K | (string & {}) | (K | (string & {}))[])[]
	): Promise<Collection<Pick<M, K>>> {
		await this.setDefaultCondition();
		return super.get(...fields);
	}

	public async paginate(
		page: number = 1,
		limit: number = 15,
	): Promise<IQueryBuilderPaginated<Collection<M>>> {
		await this.setDefaultCondition();
		return super.paginate(page, limit);
	}

	public first<K extends keyof M>(
		...fields: (K | (string & {}) | (K | (string & {}))[])[]
	): Promise<Pick<M, K> | null> {
		return super.first(...fields);
	}

	public async count(): Promise<number> {
		await this.setDefaultCondition();
		return super.count();
	}

	public async sum<K extends keyof M>(field: K | (string & {})): Promise<number> {
		await this.setDefaultCondition();
		return super.sum(field);
	}

	public async min<K extends keyof M>(field: K | (string & {})): Promise<number> {
		await this.setDefaultCondition();
		return super.min(field);
	}

	public async max<K extends keyof M>(field: K | (string & {})): Promise<number> {
		await this.setDefaultCondition();
		return super.max(field);
	}

	public async avg<K extends keyof M>(field: K | (string & {})): Promise<number> {
		await this.setDefaultCondition();
		return super.avg(field);
	}

	private async setDefaultCondition() {
		this.where(this.morphType as any, this.model.constructor.name).where(
			this.morphId as any,
			(this.model["$original"] as any)["_id"],
		);
	}

	static generate<T>(morphTo: IRelationshipMorphTo<T>): Document[] {
		const lookup = this.lookup<T>(morphTo);
		let hidden = morphTo.relatedModel.getHidden();

		if (morphTo.options?.select) {
			const select = LookupBuilder.select<T>(morphTo.options.select, morphTo.alias);
			lookup.push(...select);
		}

		if (morphTo.options?.exclude) {
			const excludeArray = Array.isArray(morphTo.options.exclude)
				? morphTo.options.exclude
				: [morphTo.options.exclude];
			hidden.push(...excludeArray);
		}

		if (morphTo.options.makeVisible) {
			const makeVisibleArray = Array.isArray(morphTo.options.makeVisible)
				? morphTo.options.makeVisible
				: [morphTo.options.makeVisible];

			hidden = hidden.filter(el => !makeVisibleArray.map(v => String(v)).includes(String(el)));
		}

		if (hidden.length > 0) {
			const exclude = LookupBuilder.exclude<T>(hidden, morphTo.alias);
			lookup.push(...exclude);
		}

		return lookup;
	}

	static lookup<T>(morphTo: IRelationshipMorphTo<T>): Document[] {
		const alias = morphTo.alias || "alias";
		const lookup: Document[] = [{ $project: { alias: 0 } }];
		const pipeline: Document[] = [];

		if (morphTo.relatedModel["$useSoftDelete"]) {
			pipeline.push({
				$match: {
					$expr: {
						$and: [
							{ $eq: [`$${morphTo.relatedModel.getIsDeleted()}`, false] },
							{ $eq: ["$$morphType", morphTo.relatedModel.constructor.name] },
						],
					},
				},
			});
		} else {
			pipeline.push({
				$match: {
					$expr: {
						$and: [
							{ $eq: ["$$morphType", morphTo.relatedModel.constructor.name] },
						],
					},
				},
			});
		}

		morphTo.model["$nested"].forEach(el => {
			if (typeof morphTo.relatedModel[el] === "function") {
				morphTo.relatedModel["$alias"] = el;
				const nested = morphTo.relatedModel[el]();
				pipeline.push(...nested.model.$lookups);
			}
		});

		const $lookup = {
			from: morphTo.relatedModel["$collection"],
			localField: `${morphTo.morphId}`,
			foreignField: "_id",
			let: { morphType: `$${morphTo.morphType}` },
			as: alias,
			pipeline: pipeline,
		};
		lookup.push({ $lookup });
		lookup.push({
			$unwind: {
				path: `$${alias}`,
				preserveNullAndEmptyArrays: true,
			},
		});

		return lookup;
	}
}
