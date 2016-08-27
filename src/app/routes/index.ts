import * as express from 'express';
import { HeroRoutes } from './HeroRoutes';

const app = express();

export class Routes {

    public get routes(): express.Application {
        app.use("/api", new HeroRoutes().routes);
        return app;
    }
}