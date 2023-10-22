import { Request,Response } from "express";
import { localTime } from "../controllers/timeController";

describe ('Health controller',()=>{

    it ('should return health message', ()=>{
        const mockReq = {} as Request;

        const mockResp = {
            json: jest.fn(),
        } as unknown as Response;

        localTime(mockReq, mockResp);

        expect(mockResp.json).toHaveBeenCalledTimes(1);
       
    }); 
});