// import IHeroModel = require('./interfaces/HeroModel');
import { IHeroModel } from './interfaces/HeroModel';

class HeroModel {
    private _heroModel: IHeroModel;

    constructor(heroModel: IHeroModel) {
        this._heroModel = heroModel;
    }

    
    public get name() : string {
        return this._heroModel.name;
    }

    
    public get power() : string {
        return this._heroModel.power;
    }

    
    public get amoutPeopleSaved() : number {
        return this._heroModel.amountPeopleSaved;
    }
}

export = HeroModel;