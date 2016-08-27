import * as express from 'express';
import { SpartanBusiness } from '../business/SpartanBusiness';
import { IBaseController } from './interfaces/BaseController';
import { ISpartanModel } from '../models/interfaces/SpartanModel';

export class SpartanController implements IBaseController<SpartanBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {
            let spartan: ISpartanModel = <ISpartanModel>req.body;
            let spartanBusiness = new SpartanBusiness();
            spartanBusiness.create(spartan, (error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else {
                    res.status(201).send({"success": spartan});
                }
            });
        } catch (error) {
            console.log(error);
            res.status(400).send({"error": "error in your request"});
        }
    }

    getAll(req: express.Request, res: express.Response): void {
        try {
            let spartanBusiness = new SpartanBusiness();
            spartanBusiness.getAll((error, result) => {
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
            let spartan: ISpartanModel = <ISpartanModel>req.body;
            let _id: string = req.params._id;
            let spartanBusiness = new SpartanBusiness();
            spartanBusiness.update(_id, spartan, (error, result) => {
                if (error) {
                    res.status(500).send({ "error": error });
                } else {
                    res.status(200).send({ "sucsess": spartan });
                }
            });
        } catch (error) {
            console.log(error);
            res.status(400).send({ "error": "error in your request" });
        }
    }

    delete(req: express.Request, res: express.Response): void {
        let _id: string = req.params._id;
        let spartanBusiness = new SpartanBusiness();
        spartanBusiness.delete(_id, (error, result) => {
            if (error) {
                res.status(500).send({ "error": error });
            } else {
                res.status(200).send({ "success": "Spartan deleted" })
            }
        });
    }

    findById(req: express.Request, res: express.Response): void {
        try {
            let _id: string = req.params._id;
            let spartanBusiness = new SpartanBusiness();
            spartanBusiness.findById(_id, (error, result) => {
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