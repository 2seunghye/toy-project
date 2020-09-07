import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './routes.js';
import { handleHome, handleMovie, handleSearch } from './controllers/controller';
import { localMiddleware } from './middlewares.js';
import path from 'path';

const app = express();

// Static files from ./public
app.use(express.static('public'));
app.use(express.static('resources'));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'pug');
app.engine('html', require('ejs').renderFile);
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localMiddleware);

app.get(routes.home, handleHome);
app.get(routes.search, handleSearch);
app.get(routes.movies, handleMovie);

export default app;
