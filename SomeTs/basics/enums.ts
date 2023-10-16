enum UserType {
    ADMIN = 7,
    USER = 9,
    SUPERUSER 
}


let usr = UserType.ADMIN;
console.log(usr)
console.log(UserType.SUPERUSER)

enum ApplicationType {
    MONOLITH = "mono",
    MICROSERVICE = "microservice",
    LAMBDA = "function" 
}

console.log(ApplicationType.LAMBDA)
