import { DataAccess } from '../../../config/DataAccess'
// import DataAccess = require('../../../config/DataAccess');
import { IHeroModel } from '../interfaces/HeroModel'

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class HeroSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: { type: String, required: true },
            power: { type: String, required: true },
            amoutPeopleSaved: { type: String, required: true }
        });

        return schema;
    }
}

var schema = mongooseConnection.model<IHeroModel>('Heroes', HeroSchema.schema);
export = schema;