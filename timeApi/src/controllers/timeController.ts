import { Request,Response } from "express";
import { getLocalTime } from '../services/timeService' 

export const localTime = (req: Request, resp: Response): void => {
    resp.json({
        time: getLocalTime()
    });
};
