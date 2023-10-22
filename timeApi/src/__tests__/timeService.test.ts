import { getLocalTime, getTimeInZone, getTimeByStamp } from "../services/timeService";

describe ('Time service',()=>{

    it ('should return local datetime', ()=>{
        let date = getLocalTime();
        console.log(`Local Date/Time: ${date}`);

        expect(date).not.toBeNull();
    }); 

    it ('should return datetime in time zone', ()=>{
        let timeZone = "AST";
        let dateInZone = getTimeInZone(timeZone);
        console.log(`Date/Time in ${timeZone} is ${dateInZone}`);
        
        expect(dateInZone).not.toBeNull();

        let dz = new Date(dateInZone);
        let current = new Date();

        expect(dz.getMinutes()).toBe(current.getMinutes());
        expect(dz.getUTCMinutes()).toBe(current.getUTCMinutes());
    }); 

    it ('should throw an expection if timezone is wrong', ()=>{
    
        expect(() => {
            getTimeInZone("TIME"); 
        }).toThrowError(new RangeError('Invalid time zone specified: TIME'));
    }); 

    it ('should return date by timestamp', ()=>{
        let timeStamp = 12456789;
        let date = getTimeByStamp(timeStamp);
        console.log(`Time by timestamp: ${date}`);

        expect(date).not.toBeNull();

        let tsDate = new Date(timeStamp);
        let resDate = new Date(date);

        expect(tsDate.getMonth()).toBe(resDate.getMonth());
        expect(tsDate.getHours()).toBe(resDate.getHours());
        expect(tsDate.getMinutes()).toBe(resDate.getMinutes());
    }); 
});