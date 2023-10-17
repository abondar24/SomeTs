class User {
    public email: string;
    private name: string;
    readonly city: string = "Munich";

    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

}

let alex = new User("alex@test.com","alex");
console.log(alex.email);
console.log(alex.city);
console.log(alex.getName());

alex.setName("Alexander");
console.log(alex.getName());



abstract class Shop {
    readonly city: string = "Munich"
    constructor(public location: string){
       this.location = location
    }

    protected abstract updateShop(job: string)
}

class DemoShop extends Shop {

    public updShop(){
       this.updateShop("sell")
    }

    protected updateShop(job: string){
       console.log(`new job ${job}`)
    }
}

let demo = new DemoShop("test");
console.log(demo)
demo.updShop();