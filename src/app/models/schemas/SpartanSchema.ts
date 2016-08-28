import { DataAccess } from '../../../config/DataAccess';
import { ISpartanModel } from '../interfaces/SpartanModel';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnetion = DataAccess.mongooseConnection;

class SpartanSchema {
    static get schema() {
        let schema = mongoose.Schema({
            name: {type: String, required: true},
            folk: {type: String, required: true},
            amountPeopleKilled: {type: Number, required: true}
        });
        return schema; 
    }
}

const Spartanes = mongooseConnetion.model<ISpartanModel>('Spartanes', SpartanSchema.schema);
export = Spartanes;