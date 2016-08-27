import * as mongoose from 'mongoose';

export interface ISpartanModel extends mongoose.Document {
    name: string;
    folk: string;
    amountPeopleKilled: number;
}