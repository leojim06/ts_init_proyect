import { SpartanRepository } from '../repository/SpartanRepository';
import { IBaseBusiness } from './interfaces/BaseBusiness';
import { ISpartanModel } from '../models/interfaces/SpartanModel';

export class SpartanBusiness implements IBaseBusiness<ISpartanModel> {
    private _spartanRepository: SpartanRepository;

    constructor() {
        this._spartanRepository = new SpartanRepository();
    }

    create(item: ISpartanModel, callback: (error: any, result: any) => void) {
        this._spartanRepository.create(item, callback);
    }

    getAll(callback: (error: any, result: any) => void) {
        this._spartanRepository.getAll(callback);
    }

    update(_id: string, item: ISpartanModel, callback: (error: any, result: any) => void) {
        this._spartanRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            this._spartanRepository.update(res._id, item, callback);
        });
    }

    delete(_id: string, callback:(error:any, result:any) => void) {
        this._spartanRepository.delete(_id, callback);
    }

    findById(_id: string, callback:(error:any, result: ISpartanModel) => void) {
        this._spartanRepository.findById(_id, callback);
    }
}