import * as express from 'express';

export interface IReadController {
    getAll: express.RequestHandler;
    findById: express.RequestHandler;
}