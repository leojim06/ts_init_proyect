import * as express from 'express';
import { HeroController } from './../controllers/HeroController';

const router = express.Router();

export class HeroRoutes {
    private _heroController: HeroController;

    constructor() {
        this._heroController = new HeroController;
    }

    public get routes(): express.Router {
        let controller = this._heroController;
        router.get('/heroes', controller.getAll);
        router.post('/heroes', controller.create);
        router.put('/heroes/:_id', controller.update);
        router.get('/heroes/:_id', controller.findById);
        router.delete('/heroes/:_id', controller.delete);
        return router
    }
}