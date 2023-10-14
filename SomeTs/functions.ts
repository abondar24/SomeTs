function addTwo(num: number): number{
    return num + 2;
}

function getUpper(val: string): string{
    return val.toUpperCase()
}

console.log(addTwo(9));
console.log(getUpper("test"))

let check = (check: boolean =  true,name: string) => {}

console.log(check(false,"alex"))

function log(msg: string | number): void {
    console.log(msg);
}

log("test err")

export{}