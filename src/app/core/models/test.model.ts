

/*
 
[
    {
        name:"souradip",
        off: "xxx",
        address : {
            city:"how",
            pin:711111,
            test:{
                abc:123,
                txt:'qwe'
            }
        },
        mobile:[1111, 222]

    },
    {
        name:"souradip",
        off: "xxx",
        address : {
            city:"how",
            pin:711111,
            test:{
                abc:123,
                txt:'qwe'
            }
        },
        mobile:[1111, 222]

    }
]

*/

interface ITest{
    abc:number,
    txt ?:string
}

interface IAddress{
    city:string,
    pin:number,
    test:ITest
}

interface IUser{
    address : IAddress,
    mobile : [],
    name:string
}



let user : IUser
let users : IUser[]