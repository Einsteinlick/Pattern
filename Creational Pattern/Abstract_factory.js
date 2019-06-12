class WarFactory{
    constructor(name,country){
    this.name = name ;
    this.country = country ;
     }
    description() {
    
    return("Factory name: "+this.name+"; Country: "+this.country+";");
    }
}
class Tank{
    constructor(name,country,speed,power,health){
	this.name=name;
	this.country=country;
	this.speed=speed;
	this.power= power;
    this.health= health;
    }
	description() {
    return("Tank Name: "+this.name+"; Country: "+this.country+";");
	}
}
class Aircraft{
    constructor(name,country,pilotName,speed,power,health,altitude){
	this.name=name;
	this.country=country;
    this.pilotName=pilotName;
	this.speed=speed;
	this.power=power;
	this.health=health;
    this.altitude  = altitude;
}
	description() {
        return( "Aircraft Name: "+this.name+"; Country:"+this.country+"; Pilot:"+this.pilotName+";");
	}
}

const UssrWarFactory = new WarFactory("Kharkov Diesel Factory","USSR")
UssrWarFactory.createTank=function() {
		return  T34;
    }
UssrWarFactory.createAircraft=function() {
		return  IL2;
	}
const T34 =new Tank("T34","Ussr");

const  IL2 = new Aircraft("IL-2","USSR","Ivan");

const  GermanyWarFactory = new WarFactory("Mittelwerk","Germany")
    GermanyWarFactory.createTank=function() {
		return  E25;
	}
	GermanyWarFactory.createAircraft=function() {
		return MesserschmittBf110;
	}
const  E25 =  new Tank("E25","Germany");

const  MesserschmittBf110 = new Aircraft("Messerschmitt Bf 110","Germany","Hans")

console.log(UssrWarFactory.description());
console.log(GermanyWarFactory.description());
console.log(UssrWarFactory.createTank().description());
console.log(UssrWarFactory.createAircraft().description());
console.log(GermanyWarFactory.createTank().description());
console.log(GermanyWarFactory.createAircraft().description());