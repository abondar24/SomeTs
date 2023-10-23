import supertest from 'supertest';
import server from '../index';


describe ('Time controller',()=>{

    it ('should return local time', async ()=>{
       
        const response = await supertest(server).get("/time/local");
        expect(response.status).toBe(200)

        const responseBody = response.body;
        expect(responseBody).toHaveProperty('time');
        expect(responseBody.time).toBeDefined();

    }); 

     it ('should return time in zone', async ()=>{
        const response = await supertest(server).get("/time/zone/AST");
        expect(response.status).toBe(200)

        const responseBody = response.body;
        expect(responseBody).toHaveProperty('time');
        expect(responseBody.time).toBeDefined();
      
    }); 

    it ('should return 400 with unknown zone', async ()=>{
        const response = await supertest(server).get("/time/zone/TTT");
        expect(response.status).toBe(400)

        const responseBody = response.body;
        expect(responseBody).toHaveProperty('message');
        expect(responseBody.message).toBe('Unknown timezone');
      
    }); 

    it ('should return 400 with number zone', async ()=>{
        const response = await supertest(server).get("/time/zone/123");
        expect(response.status).toBe(400)

        const responseBody = response.body;
        expect(responseBody).toHaveProperty('message');
        expect(responseBody.message).toBe('Unknown timezone');
      
    }); 

    it ('should return time by timestamp', async ()=>{
        const response = await supertest(server).get("/time/timestamp/1235678");
        expect(response.status).toBe(200)

        const responseBody = response.body;
        expect(responseBody).toHaveProperty('time');
        expect(responseBody.time).toBeDefined();
      
    }); 
});

afterAll(() => {
    server.close();
  });

