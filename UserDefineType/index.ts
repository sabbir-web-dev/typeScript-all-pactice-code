// built-in data tpe: number,string,bollean,void,undefind,null
let id : number;
let firstName: string ;
let lastName: string;
let fullNamee :  string;
let idActivated : boolean;


id = 12;
firstName = "Sabbir";
lastName = " Hosen";
idActivated = true;
fullNamee = firstName.concat(lastName) 

console.log(`Your Id ${id}, UserName : ${fullNamee}, You Select: ${idActivated}`);

console.log(fullNamee.toUpperCase())
console.log(fullNamee.toLowerCase())


// void 
function display () : void{
  console.log("Hi iam Voit Display")
}