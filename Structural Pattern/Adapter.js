const Tiger ={
    length:"1,9" ,
    weight:"2,3" , 
    hungry : true , 
    speed:"0" ,
    run : () =>{
        console.log('Danger, tiger is run');  
     } ,
     eat: (status) =>{
         if(status){
             this.hungry=false;
         }

         else{
             this.hungry=true;
         }
     }
}
class MakeWings{
    constructor(Obj){
        this.Object = Obj;
    }
    fly(){
        console.log("I`m flying!");
    }
}
const FlyingTiger = new MakeWings(Tiger);
FlyingTiger.fly();