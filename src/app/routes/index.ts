import * as express from 'express';
import { HeroRoutes } from './HeroRoutes';
import { SpartanRoutes } from './SpartanRoutes';

const app = express();

export class Routes {
    public get routes(): express.Application {
        app.use("/api/heroes", new HeroRoutes().routes);
        app.use("/api/spartanes", new SpartanRoutes().routes);
        return app;
    }
}