interface User {
    email: string,
    userId: number,
    combineData: () => string;
    incrementId: (inc: number) => number
}


let alex: User = {
    email: "test",
    userId: 1,
    combineData: function() {
        return this.email + this.userId
    },
    incrementId: function(inc: number)  {
        return this.userId +=inc;
    }
}

console.log(alex)
console.log(alex.combineData())
console.log(alex.incrementId(5))


export{}