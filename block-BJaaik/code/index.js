
class Person{
    constructor(name , age , gender){
       this.name=name
       this.age=age
       this.gender=gender
    }

    eat(){};
    sleep(){};
    walk(){};
}

class Player extends Person{
    constructor(sportsName,name,age,gender){
        super(name,age,gender)
        this.sportsName=sportsName
    }

    play(){}
}

class Cricketer extends Player{
    constructor(teamName,sportsName){
        super(sportsName)
        this.teamName=teamName
    }
    playCricker(){}
}

class Teacher extends Person{
    constructor(instituteName,name,age,gender){
        super(name,age,gender)
        this.instituteName=instituteName
    }

    teach(){}
}

class Artist extends Person{
    constructor(kind,name,age,gender){
        super(name,age,gender)
        this.kind=kind
    }

    createArt(){}
}

console.log("hello")
console.log("hello")