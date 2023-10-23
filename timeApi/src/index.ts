import express from 'express';
import { health } from './controllers/healthController';
import { localTime,timeByZone,timeByStamp } from './controllers/timeController';
import { Endpoint } from './constants/endpoints';
import { QueryParam } from './constants/params';
import { param } from 'express-validator';
import { specs } from './swagger'; 
import swaggerUi from 'swagger-ui-express';

const app = express();
const PORT = 8024;

app.get(Endpoint.HEALTH, health);
app.get(Endpoint.LOCAL, localTime);
app.get(Endpoint.ZONE,param(QueryParam.ZONE).isString(), timeByZone)
app.get(Endpoint.STAMP,param(QueryParam.STAMP).isInt(), timeByZone)
app.use(Endpoint.API, swaggerUi.serve, swaggerUi.setup(specs));

const server = app.listen(PORT, ()=>{
  console.log(`TimeApi is running on port ${PORT}`)
});

export default server;
