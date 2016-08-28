import { DataAccess } from '../../../config/DataAccess'
import { IHeroModel } from '../interfaces/HeroModel'

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class HeroSchema {
    static get schema() {
        let schema = mongoose.Schema({
            name: { type: String, required: true, unique: true },
            power: { type: String, required: true },
            amountPeopleSaved: { type: Number, required: true }
        });
        return schema;
    }
}

const Heroes = mongooseConnection.model<IHeroModel>('Heroes', HeroSchema.schema);
export = Heroes;