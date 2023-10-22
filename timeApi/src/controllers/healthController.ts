import { Request,Response } from "express";

export const health = (req: Request, resp: Response): void => {
    resp.json({
        status: 'Time API is up'
    });
};

