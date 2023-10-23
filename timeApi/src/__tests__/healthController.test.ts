import supertest from 'supertest';
import server from '../index';

describe ('Health controller', ()=>{

    it ('should return health message', async ()=>{
        
        const response = await supertest(server).get("/health");
        expect(response.status).toBe(200)

        const responseBody = response.body;
        expect(responseBody).toHaveProperty('message');
        expect(responseBody.message).toBe('Time API is up');

    }); 

});

afterAll(() => {
    server.close();
  });