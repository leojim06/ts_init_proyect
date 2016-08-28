import { IReadController } from './Read';
import { IWriteController } from './Write';

export interface IBaseController<T> extends IReadController, IWriteController { }