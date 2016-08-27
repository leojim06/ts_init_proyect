import { ISpartanModel } from './interfaces/SpartanModel';

export class SpartanModel {
    private _spartanModel: ISpartanModel;

    constructor(spartanModel: ISpartanModel) {
        this._spartanModel = spartanModel;
    }

    public get name() : string {
        return this._spartanModel.name;
    }

    public get folk() : string {
        return this._spartanModel.folk;
    }

    public get amoutPeopleKilled() : number {
        return this._spartanModel.amountPeopleKilled;
    }
}