import express from 'express';
import { health } from './controllers/healthController';

const app = express();
const PORT = 8024;

app.get('/health', health);

app.listen(PORT, ()=>{
  console.log(`TimeApi is running on port ${PORT}`)
});