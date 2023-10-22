import { Request,Response } from "express";
import { health } from "../controllers/healthController";

describe ('Health controller',()=>{

    it ('should return health message', ()=>{
        const mockReq = {} as Request;

        const mockResp = {
            json: jest.fn(),
        } as unknown as Response;

        health(mockReq, mockResp);

        expect(mockResp.json).toHaveBeenCalledTimes(1);
        expect(mockResp.json).toHaveBeenCalledWith({ message: 'Time API is up' });
    }); 
});