import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes/routes'

const server =  express();
const router = express.Router();
const port = parseInt(process.env.PORT, 10) || 8000;

routes(router);

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api/v1/', router);

server.get('*', (req, res) => res.status(404).send({
  message: 'The path you seek does not exist'
}));

const app = http.createServer(server);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



