import { Read } from './Read';
import { Write } from './Write';

export interface IBaseBusiness<T> extends Read<T>, Write<T> { }