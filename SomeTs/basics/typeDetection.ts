function detectType(val: number | string){
    if (typeof val === "string"){
       return val.toLowerCase();
    }

    return val + 3;
}

console.log(detectType(5));
console.log(detectType("TEST"));


function detectString(val: any): string{
    if (val instanceof String){
       return val.toUpperCase() + " is a string";
    } else {
        return  ""+val+"";
    }
}

console.log(detectString(7));
console.log(detectString(new String("test")));
