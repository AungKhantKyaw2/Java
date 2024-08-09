// console.log(1)


// setTimeout(()=>{
//     console.log("I am async")
// },2000)


// console.log(2)
// console.log(3)
// console.log(4)

//https://jsonplaceholder.typicode.com/todos/1

// let request = new XMLHttpRequest();

// request.addEventListener("readystatechange",()=>{
//     if(request.readyState===1){

//     console.log(request.status);
//     }
// })

// request.open("GET","https://jsonplaceholder.typicode.com/todos/");

// request.send();

// //using call back
// let getTodos = (callback)=>{

//         let request = new XMLHttpRequest();
         
//         request.addEventListener("readystatechange",()=>{
//              if(request.readyState=== 4 && request.status===200){
               
//             // console.log(request.responseText);
//                  callback(request.responseText,undefined )   
//             }
//              else if (request.status===404)
//              {
//                 callback(undefined,"Something went wrong")
//              }
// })
// request.open("GET","https://jsonplaceholder.typicode.com/todos/");

// request.send();
// }
// getTodos((data,err)=>{

//     console.log(data,err)
// })


let getTodos = (resource,callback)=>{

            let request = new XMLHttpRequest();
             
            request.addEventListener("readystatechange",()=>{
                 if(request.readyState=== 4 && request.status===200){
                let datas =JSON.parse(request.responseText);
                // console.log(request.responseText);
                     callback(datas,undefined )   
                }
                 else if (request.status===404)
                 {
                    callback(undefined,"Something went wrong")
                 }
                 else  if (request.status === 304) {
                    callback(undefined, "Resource not modified (304)");}
    })
    request.open("GET",resource);
    
    request.send();

// console.log("I am first")
}
// getTodos((data,err)=>{

//     console.log(data,err)
// })
getTodos("JS/aung.json",(data,err)=>{
    if(data){
        console.log(data);
        getTodos("JS/aung1.json",(data,err)=>{
        if(data){
        
            console.log(data);  
       
        
    }
    
    else{
        console.log(err)
    }   
    })
    }
    else{
        console.log(err)
    }
})

getTodos("JS/aung2.json",(data,err)=>{
       if(data){
        console.log(data);
       }
       else{
        console.log(err)
       }
}) 
