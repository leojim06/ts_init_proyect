import { IReadRepository } from './Read';
import { IWriteRepository } from './Write';

export interface IBaseRepository<T> extends IReadRepository<T>, IWriteRepository<T> { }