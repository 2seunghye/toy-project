import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './routes.js';
import { handleHome, handleSearch } from './controllers/controller';
import path from 'path';

const app = express();

// Static files from ./public
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(routes.home, handleHome);
app.get(routes.search, handleSearch);

export default app;
