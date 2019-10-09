import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';


// Rotas
import estadoRouter from './Router/estado.router';
import cidadeRouter from './Router/cidade.router';
import clienteRouter from './Router/cliente.router';

class App {

    public express: express.Application;

    constructor() {

        this.express = express();
        this.middlware();
        this.routers();

    }

    private middlware() {

        this.express.use(bodyParser.json());
        this.express.use(cors());

    }

    private routers(): void {
        this.express.use('/estados', estadoRouter);
        this.express.use('/cidades',  cidadeRouter);
        this.express.use('/clientes',  clienteRouter);
    }

}

export default new App().express;