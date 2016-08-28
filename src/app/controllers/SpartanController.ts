import * as express from 'express';
import { SpartanBusiness } from '../business/SpartanBusiness';
import { IBaseController } from './interfaces/BaseController';
import { ISpartanModel } from '../models/interfaces/SpartanModel';

export class SpartanController implements IBaseController<SpartanBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            let hero: ISpartanModel = <ISpartanModel>req.body;
            let heroBusiness = new SpartanBusiness();
            heroBusiness.create(hero, (error, result) => {
                if (error) {
                    res.status(400).send({ "error": error });
                } else {
                    res.status(201).send({ "success": "Espartano creado", "data": hero });
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ "error": "error en su solicitud" });
        }
    }

    getAll(req: express.Request, res: express.Response): void {
        try {
            let heroBusiness = new SpartanBusiness();
            heroBusiness.getAll((error, result) => {
                if (error) {
                    res.status(400).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Espartano no encontrados" });
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
            let hero: ISpartanModel = <ISpartanModel>req.body;
            let _id: string = req.params._id;
            let heroBusiness = new SpartanBusiness();
            heroBusiness.update(_id, hero, (error, result) => {
                if (error) {
                    res.status(400).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Espartano no encontrado - no se puede actualizar" });
                } else {
                    res.status(200).send({ "sucsess": "Espartano actualizado", "data": hero });
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
            let heroBusiness = new SpartanBusiness();
            heroBusiness.delete(_id, (error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Espartano no encontrado - no se puede borrar" })
                } else {
                    res.status(200).send({ "success": "Espartano borrado" });
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
            let heroBusiness = new SpartanBusiness();
            heroBusiness.findById(_id, (error, result) => {
                if (error) {
                    res.status(400).send({ "error": error });
                } else if (!result) {
                    res.status(404).send({ "error": "Espartano no encontrado" });
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