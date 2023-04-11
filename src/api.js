import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import products from './routes/products.js';
import health from './routes/health.js';
import connection from './db.js';

const app = express();
connection();

// settings
app.set('appName', 'atp-server');
app.set('port', 8080);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin: '*'}));

// Routes
app.use('/products', products);
app.use('/health', health);

// Listen
app.listen(app.get('port'), () => {
  console.log(app.get('appName'), 'on port', app.get('port'));
});