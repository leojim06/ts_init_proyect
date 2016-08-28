import * as mongoose from 'mongoose';
export interface IWriteRepository<T> {
    create: (item: T, callback: (error: any, result: any) => void) => void;
    update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
    delete: (_id: mongoose.Types.ObjectId, callback: (error: any, result: any) => void) => void;
}