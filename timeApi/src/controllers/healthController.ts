import { Request,Response } from "express";

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Healthcheck endpoint 
 *     responses:
 *       200:
 *         description: app is running.
*         content:
 *           application/json:
 *              example:
 *                message: Time API is up
 */
export const health = (req: Request, resp: Response): void => {
    resp.json({
        message: 'Time API is up'
    });
};

