import * as express from 'express';
import { SpartanController } from './../controllers/SpartanController';

const router = express.Router();

export class SpartanRoutes {
    private _spartanController: SpartanController;

    constructor() {
        this._spartanController = new SpartanController();
    }

    public get routes(): express.Router {
        let controller = this._spartanController;
        router.get('/', controller.getAll);
        router.post('/', controller.create);
        router.put('/:_id', controller.update);
        router.get('/:_id', controller.findById);
        router.delete('/:_id', controller.delete);
        return router
    }
}