
user={
    FirstName:'usha',
    LastName:'rani'
}

function printAdress(village,city,state,nation){
     console.log(`Name:${this.FirstName} ${this.LastName} 
village:${village}
city:${city}
state:${state}
Nation:${nation}`)
}

Function.prototype.mybind=function(...args){

const params=args.slice(1)

    return (...args1)=>{
        

this.apply(args[0],[...params,...args1])
    }
}
const userAdress=printAdress.mybind(user,'ajjavar','cbpur')

userAdress('Karnataka','India');