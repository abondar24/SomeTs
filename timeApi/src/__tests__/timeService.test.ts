import { getLocalTime } from "../services/timeService";

describe ('Time service',()=>{

    it ('should return local datetime', ()=>{
        let date = getLocalTime();

        expect(date).not.toBeNull();
    }); 


});