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
//     if(request.readyState===4){

//     console.log(request.responseText);
//     }
// })

// request.open("GET","https://jsonplaceholder.typicode.com/todos/");

// request.send();


let request = new XMLHttpRequest();

request.addEventListener("readystatechange",()=>{
    if(request.readyState===4 && request.status===200){

    console.log(request.responseText);
    }
    else if(request.status===404){
        console.log("Error Http")
    }
})

request.open("GET","https://jsonplaceholder.typicode.com/todos/");

request.send();

console.log("I am first")