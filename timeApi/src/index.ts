import express from 'express';
import { health } from './controllers/healthController';
import { localTime } from './controllers/timeController';
import { Endpoint } from './constants/endpoints';

const app = express();
const PORT = 8024;

app.get(Endpoint.HEALTH, health);
app.get(Endpoint.LOCAL,localTime)

app.listen(PORT, ()=>{
  console.log(`TimeApi is running on port ${PORT}`)
});

export default app;