import { Request,Response } from "express";
import { getLocalTime,getTimeInZone,getTimeByStamp } from '../services/timeService' 

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


export const timeByStamp = (req: Request, resp: Response): void => {
       let timestamp = parseInt(req.params.timestamp,10);
       resp
       .status(200)
       .json({
        time: getTimeByStamp(timestamp)
  })
};