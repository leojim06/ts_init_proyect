import { HeroRepository } from '../repository/HeroRepository';
import { IBaseBusiness } from './interfaces/BaseBusiness';
import { IHeroModel } from '../models/interfaces/HeroModel';

export class HeroBusiness implements IBaseBusiness<IHeroModel> {
    private _heroRepository: HeroRepository;

    constructor() {
        this._heroRepository = new HeroRepository();
    }

    create(item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.create(item, callback);
    }

    getAll(callback: (error: any, result: any) => void) {
        this._heroRepository.getAll(callback);
    }

    update(_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            }
            this._heroRepository.update(res._id, item, callback);
        });
    }

    delete(_id: string, callback:(error:any, result:any) => void) {
        this._heroRepository.delete(_id, callback);
    }

    findById(_id: string, callback:(error:any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }
}