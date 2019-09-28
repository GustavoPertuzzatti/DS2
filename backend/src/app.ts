import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import estadoRouter from './Router/estado.router';

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
    }

}

export default new App().express;