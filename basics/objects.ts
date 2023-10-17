type User = {
    readonly _id: string,
    name: string,
    age: number,
    isPremium: boolean,
    address?: Address
}

type Address = {
    readonly _id: string,
    street: string,
    houseNum: number,
    city: string,
    zipCode?: string,
}


let usr: User = {
    _id: "1",
    name: "alex",
    age: 31,
    isPremium: true
}
console.log(usr)

usr.address= {
    _id : "1",
    street: "test",
    houseNum:0,
    city: "test"
}
console.log(usr)

type FullUser = User & Address & {
    isBanned: true
}

let full: FullUser = {
    _id:"7",
    name: "dsff",
    age:100,
    isBanned:true,
    isPremium:false,
    street: "f",
    houseNum:100,
    city: "tes"
}
console.log(full)

export{}