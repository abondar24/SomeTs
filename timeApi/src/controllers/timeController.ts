import { Request,Response } from "express";
import { getLocalTime,getTimeInZone } from '../services/timeService' 

export const localTime = (req: Request, resp: Response): void => {
    resp
    .json({
        time: getLocalTime()
    });
};

export const timeByZone = (req: Request, resp: Response): void => {
    try {
       let timeByZone = req.params.zone;
       resp
       .status(200)
       .json({
        time: getTimeInZone(timeByZone)
    });
    } catch(RangeError){
        resp
        .status(400)
        .json({
            message: 'Unknown timezone'
        });
      
    }
    
};

//todo: add endpoint to get date from timestamp