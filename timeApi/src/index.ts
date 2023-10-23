import express from 'express';
import { health } from './controllers/healthController';
import { localTime,timeByZone } from './controllers/timeController';
import { Endpoint } from './constants/endpoints';
import { param } from 'express-validator';

const app = express();
const PORT = 8024;

app.get(Endpoint.HEALTH, health);
app.get(Endpoint.LOCAL, localTime);
app.get(Endpoint.ZONE,param('zone').isString(), timeByZone)

const server = app.listen(PORT, ()=>{
  console.log(`TimeApi is running on port ${PORT}`)
});

export default server;
