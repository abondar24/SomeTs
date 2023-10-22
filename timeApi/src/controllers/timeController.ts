import { Request,Response } from "express";
import { getLocalTime } from '../services/timeService' 

export const localTime = (req: Request, resp: Response): void => {
    resp.json({
        time: getLocalTime()
    });
};

//todo: add endpoint to convert to timezone seletec by user
//todo: add endpoint to get date from timestamp