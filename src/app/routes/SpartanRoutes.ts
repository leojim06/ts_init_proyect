import * as express from 'express';
import { SpartanController } from './../controllers/SpartanController';

const router = express.Router();

export class SpartanRoutes {
    private _spartanController: SpartanController;

    constructor() {
        this._spartanController = new SpartanController;
    }

    public get routes(): express.Router {
        let controller = this._spartanController;
        router.get('/spartanes', controller.getAll);
        router.post('/spartanes', controller.create);
        router.put('/spartanes/:_id', controller.update);
        router.get('/spartanes/:_id', controller.findById);
        router.delete('/spartanes/:_id', controller.delete);
        return router
    }
}