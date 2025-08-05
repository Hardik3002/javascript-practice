const object =  {
    name : "hardik",
    age : 33,

    welcomemessage : function(name){
        console.log(`${this.name} is ${this.age}years old`);
        console.log(this);
        // we are using here this keyword to refer to the current object
    }
}
object.welcomemessage("hardiksh");
object.name= "hardiksharma";
object.welcomemessage("Hardik Singh");