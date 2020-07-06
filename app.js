import express from 'express';
import cors from 'cors';

import homeRouter from './routers/homeRouter.js';
import mealRouter from './routers/mealRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/home', homeRouter);
app.use('/meal', mealRouter);

const PORT = process.env.PORT || 9001;
app.listen(PORT, '0.0.0.0', ()=> console.log(`Server running on port ${PORT}`));
