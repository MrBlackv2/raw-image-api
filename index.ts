import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

import { router } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', router);

app.listen(PORT, () => console.log('API listening on 3000'));
