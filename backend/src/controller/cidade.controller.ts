import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CidadeEntity } from "../entity/cidade.entity";

class CidadeController {

    public async find(req: Request, res: Response) {

        try {
            const cidades = await getRepository(CidadeEntity).find({relations: ['estado']});
            res.send(cidades);            
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const cidade = req.body;

        try {
            await getRepository(CidadeEntity).save(cidade);
            res.send(cidade);
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new CidadeController();