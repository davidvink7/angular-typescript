import express from 'express';
import helmet from 'helmet';
import { itemsRouter } from './items/items.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.use(helmet());
app.use(express.json());
app.use('/api/items', itemsRouter);

let ping = (req, res) => res.status(200).send('pong');

app.get('/ping', ping);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(4201, '127.0.0.1', function() {
    console.log(`Server is listening on 4201`);
});