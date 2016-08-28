import { IReadBusiness } from './Read';
import { IWriteBusiness } from './Write';

export interface IBaseBusiness<T> extends IReadBusiness<T>, IWriteBusiness<T> { }