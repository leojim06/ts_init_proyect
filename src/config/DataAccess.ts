/// <reference path="../../typings/index.d.ts" />
import * as Mongoose from 'mongoose';
// import Mongoose = require('mongoose');
import { Config } from '../config/Config'

export class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Conectado a mongodb');
        });

        this.mongooseInstance = Mongoose.connect(Config.DB);
        return this.mongooseInstance;
    }
}

DataAccess.connect();
// export = DataAccess;