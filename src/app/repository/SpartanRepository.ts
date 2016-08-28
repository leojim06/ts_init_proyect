import * as mongoose from 'mongoose';
import { IBaseRepository } from './interfaces/BaseRepository';
import { ISpartanModel } from '../models/interfaces/SpartanModel';

export class SpartanRepository implements IBaseRepository<ISpartanModel> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: ISpartanModel, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    getAll(callback: (error: any, result: any) => void) {
        this._model.find({}, callback);
    }

    update(_id: mongoose.Types.ObjectId, item: ISpartanModel, callback: (error: any, result: any) => void) {
        this._model.update({ _id: _id }, item, callback);
    }

    delete(_id: mongoose.Types.ObjectId, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: _id }, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: ISpartanModel) => void) {
        this._model.findById(_id, callback);
    }
}