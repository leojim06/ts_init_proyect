import * as SpartanSchema from '../models/schemas/SpartanSchema';
import { ISpartanModel } from '../models/interfaces/SpartanModel';
import { BaseRepository } from './interfaces/BaseRepository';

export class SpartanRepository extends BaseRepository<ISpartanModel> {
    constructor() {
        super(SpartanSchema);
    }
}