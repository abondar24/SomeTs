import { Request,Response } from "express";
import { getLocalTime,getTimeInZone,getTimeByStamp } from '../services/timeService' 

/**
 * @swagger
 * /time/local:
 *   get:
 *     summary: Local time endpoint
 *     responses:
 *       200:
 *         descriptiion: return local server time
 *         content:
 *           application/json:
 *              example:
 *                time: 10/23/2023, 3:23:25 PM
 */
export const localTime = (req: Request, resp: Response): void => {
    resp
    .json({
        time: getLocalTime()
    });
};

/**
 * @swagger
 * /time/zone/{zone}:
 *   get:
 *     summary: Time in provided timezone
 *     parameters:
 *       - in: path
 *         name: zone
 *         required: true
 *         schema:
 *           type: string
 *         description: timezone to convert
 *     responses:
 *       200:
 *         description: return time in provided zone
 *         content:
 *           application/json:
 *              example:
 *                time: 10/23/2023, 3:23:25 AM
 *       400:
 *         description: unknown timezone
 *         content:
 *           application/json:
 *              example:
 *                message: Unknown timezone
 */
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


/**
 * @swagger
 * /time/timestamp/{stamp}:
 *   get:
 *     summary: Time convertion from timestamp
 *     parameters:
 *       - in: path
 *         name: timestamp
 *         required: true
 *         schema:
 *           type: integer
 *         description: timestamp to be converted
 *     responses:
 *       200:
 *         description: return time and date by timestamp
 *         content:
 *           application/json:
 *              example:
 *                time: 10/23/2023, 3:23:25 AM
 */
export const timeByStamp = (req: Request, resp: Response): void => {
       let timestamp = parseInt(req.params.timestamp,10);
       resp
       .status(200)
       .json({
        time: getTimeByStamp(timestamp)
  })
};