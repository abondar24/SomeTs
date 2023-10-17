function idGenerator<T>(val: T): string {
    return "id"+val;
}

console.log(idGenerator<string>("test"));
console.log(idGenerator<number>(1));

const idLog = <T>(id: T) => {
    console.log(id instanceof Number)
}

idLog<string>("test");


function combineIds<T,U>(id: T,id1: U ): object {
   return {
        id,
        id1,
   }
}

console.log(combineIds<string,number>(" 1",1));

class ListNode<T>{
    private value: T
    private next: ListNode<T>

    constructor(value: T){
        this.value = value;
    }

    setNext(next: ListNode<T>){
        this.next = next;
    }
}

let root = new ListNode<Number>(1);
let n1 = new ListNode<Number>(2);

root.setNext(n1);
console.log(root);