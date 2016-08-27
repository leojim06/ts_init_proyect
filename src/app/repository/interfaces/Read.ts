export interface IRead<T> {
    getAll: (callback: (error: any, resutl: any) => void) => void;
    findById: (id: string, callback: (error: any, result: T) => void) => void;
}