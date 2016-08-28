import * as mongoose from 'mongoose';

export interface IHeroModel extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}