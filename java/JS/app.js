// console.log("hi")

// let first_name ="Aung"
// let second_name ="Kyaw"

// console.log(first_name+"asf"+second_name)

// // string
// let name ="Aung"

// // number
// // let age =23
// let age  = "23"
// console.log(age +2) //232   

// let isMarried =false
// console.log(isMarried)

// let empty =null
// console.log(empty)

// let unknownVar;
// console.log(unknownVar  )


// let name = "Aung Khant Kyaw"

// if (name == "Aung Khant Kyaw"){
//     console.log("he is" + " "+name)
// }
// else{
//     console.log("I dont know")
// }


// false condition
// 1. 0
// 2.false
// 3."" or ' '(empty string)
// 4.null 
// 5. undefined

// if("10"===10){
//       console.log("true")
// }
// else{
//     console.log("false")
// }
// // let name = "Aung"
// let name;
// if(name){
//     console.log("name")
// }
// else{
//   console.log("no name")
// }


// let age = 23 
// if (age >20 && age<30){

//     console.log(true)

// }
// else{

//     console.log(false)
// }
// and gate &&
// let age = 23 
// if (age >20 || age<20){

//     console.log(true)

// }
// else{

//     console.log(false)
// }
// or gate ||

// function 
// name()
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");console.log("Hi");
// function name(){

    
    // return "Dog"; 
    // console.log("AUNG");  below return they will not show in console
// }   
// console.log(name());
// name() ReferenceError: Cannot access 'name' before initialization

// let name = function(){

//     console.log("AUng")
// }
// name()
// let name =()=>{             Another way
//     console.log("AU1")
// }
// name()

// let yourname =(name)=>{             
//     console.log(name)
// }
// yourname("DOG")
// name()
// let name =(name,age)=>{             
//     // console.log(name,age)
//     return {name : name,age :age} ;
// }

// console.log(name("God",23))


// in the function only have return  operation
// var getname = yourname=>yourname;

// console.log(getname("Aung Kyaw"))



// Array

// let name = [
    
//     "Aung",
//     "Kyaw2",
//     "God"

// ]

// console.log(name[0])
// for each
// name.forEach((element) => {
//     console.log(element)
// });

//for filter

// let name1 = name.filter((names) =>{

//     return names=="Kyaw2"

// })

// console.log(name1)


// for map

// let newnamearray = name.map((element)=>{
        
//     return ("Mr" + element)
// })
// console.log(newnamearray)
// console.log(name)

//object

// let bio = ["Aung",23,false,2000, "brown"]
// let bio = {
//        Name : "Aung",
//        age :23,
//        isMarried : false,
//        color :"brown",
//       birthday:2024- parseInt("23"),
//        bornyear(){
//             //  return 2024-23;
//             // console.log(this)
//             return 2024-this.age;
           
//        }


// }
// console.log(bio)

// function constructor
// function bio(name,age){
//           this.name  = name;
//           this. age = age;
// }

// let biography = new bio("Aung",23);
// console.log(biography)
