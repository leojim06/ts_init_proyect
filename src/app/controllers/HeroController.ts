import * as express from 'express';
import { HeroBusiness } from '../business/HeroBusiness';
import { IBaseController } from './interfaces/BaseController';
import { IHeroModel } from '../models/interfaces/HeroModel';

export class HeroController implements IBaseController<HeroBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            let hero: IHeroModel = <IHeroModel>req.body;
            let heroBusiness = new HeroBusiness();
            heroBusiness.create(hero, (error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else {
                    res.status(201).send({"success": hero});
                }
            });
        } catch (error) {
            console.log(error);
            res.status(400).send({"error": "error in your request"});
        }
    }

    getAll(req: express.Request, res: express.Response): void {
        try {
            let heroBusiness = new HeroBusiness();
            heroBusiness.getAll((error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else {
                    res.status(200).send(result);
                }
            });
        } catch (error) {
            console.log(error);
            res.status(400).send({ "error": "error in your request" });
        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            let hero: IHeroModel = <IHeroModel>req.body;
            let _id: string = req.params._id;
            let heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, (error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else {
                    res.status(200).send({ "sucsess": hero });
                }
            });
        } catch (error) {
            console.log(error);
            res.status(400).send({ "error": "error in your request" });
        }
    }

    delete(req: express.Request, res: express.Response): void {
        let _id: string = req.params._id;
        let heroBusiness = new HeroBusiness();
        heroBusiness.delete(_id, (error, result) => {
            if (error) {
                res.status(500).send({ "error": error });
            } else {
                res.status(200).send({ "success": "Hero deleted" })
            }
        });
    }

    findById(req: express.Request, res: express.Response): void {
        try {
            let _id: string = req.params._id;
            let heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, (error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else {
                    res.status(200).send(result);
                }
            });
        } catch (error) {
            console.log(error);
            res.status(400).send({ "error": "error in your request" });
        }
    }
}