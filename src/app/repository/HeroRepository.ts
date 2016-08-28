import * as mongoose from 'mongoose';
import { IBaseRepository } from './interfaces/BaseRepository';
import { IHeroModel } from '../models/interfaces/HeroModel';

export class HeroRepository implements IBaseRepository<IHeroModel> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: IHeroModel, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    getAll(callback: (error: any, result: any) => void) {
        this._model.find({}, callback);
    }

    update(_id: mongoose.Types.ObjectId, item: IHeroModel, callback: (error: any, result: any) => void) {
        this._model.update({ _id: _id }, item, callback);
    }

    delete(_id: mongoose.Types.ObjectId, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: _id }, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: IHeroModel) => void) {
        this._model.findById(_id, callback);
    }
}