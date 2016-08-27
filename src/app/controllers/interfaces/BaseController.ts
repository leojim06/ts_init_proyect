import { IReadController } from './ReadController';
import { IWriteController } from './WriteController';

// import IReadController = require('./ReadController');
// import IWriteController = require('./WriteController');

export interface IBaseController<T> extends IReadController, IWriteController { }