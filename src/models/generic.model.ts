import { Model, isValidObjectId } from 'mongoose';
import IGenericModel from "./interfaces/generic.model";

export default abstract class GenericModel<T> implements IGenericModel<T> {
  protected _modelMongoose: Model<T>;

  constructor(modelMongoose: Model<T>) {
    this._modelMongoose = modelMongoose;
  }

  public async create(entity: T): Promise<T | null> {
    const entityCreated = await this._modelMongoose.create(entity);
    return entityCreated;
  }

  public async update(id: string, entity: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const entityUpdated = await this._modelMongoose.findByIdAndUpdate({ _id: id }, entity, { returnOriginal: false });
    return entityUpdated;
  }
  
  public async findAll(): Promise<T[]> {
    const entities = await this._modelMongoose.find();
    return entities;
  }
  
  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const entity = await this._modelMongoose.findById(id);
    return entity;
  }
  
  public async deleteById(id: string): Promise<void> {
    if (!isValidObjectId(id)) return;
    await this._modelMongoose.findByIdAndDelete(id);
  }
  
  // protected abstract getMongooseModel(): Model<T>;
}