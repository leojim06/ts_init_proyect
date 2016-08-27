import * as express from 'express'

export interface IWriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
}
// export = WriteController;