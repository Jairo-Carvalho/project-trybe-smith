import express from 'express';

import productRoute from './routes/products.routes';
import loginRoute from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/products', productRoute);

export default app;
