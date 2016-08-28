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
                    res.status(400).send({ "error": error });
                } else {
                    res.status(201).send({ "success": "Hero creado", "data": hero });
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ "error": "error en su solicitud" });
        }
    }

    getAll(req: express.Request, res: express.Response): void {
        try {
            let heroBusiness = new HeroBusiness();
            heroBusiness.getAll((error, result) => {
                if (error) {
                    res.status(400).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Heroes no encontrados" });
                } else {
                    res.status(200).send(result);
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ "error": "error en su solicitud" });
        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            let hero: IHeroModel = <IHeroModel>req.body;
            let _id: string = req.params._id;
            let heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, (error, result) => {
                if (error) {
                    res.status(400).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Hero no encontrado - no se puede actualizar" });
                } else {
                    res.status(200).send({ "sucsess": "Hero actualizado", "data": hero });
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ "error": "error en su solicitud" });
        }
    }

    delete(req: express.Request, res: express.Response): void {
        try {
            let _id: string = req.params._id;
            let heroBusiness = new HeroBusiness();
            heroBusiness.delete(_id, (error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Hero no encontrado - no se puede borrar" })
                } else {
                    res.status(200).send({ "success": "Hero borrado" });
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ "error": "error en su solicitud" });
        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {
            let _id: string = req.params._id;
            let heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, (error, result) => {
                if (error) {
                    res.status(400).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Hero no encontrado" });
                } else {
                    res.status(200).send(result);
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ "error": "error en su solicitud" });
        }
    }
}