import * as HeroSchema from '../models/schemas/HeroSchema';
import { IHeroModel } from '../models/interfaces/HeroModel';
import { BaseRepository } from './interfaces/BaseRepository';

export class HeroRepository extends BaseRepository<IHeroModel> {
    constructor () {
        super(HeroSchema);
    }
}