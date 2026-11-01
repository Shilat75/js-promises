//question 1

 function delayedGreet(nameP, delay){
  
    return  new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(nameP)
        },delay)
    })
}


delayedGreet("shilat",2000).then((message) => {
    console.log(`Hey `+message);
});

//q3

 function randomOperation(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let num=Math.random(0,1)
        if(num<0.5){
            resolve("num min fro 0.5");
        }
        else{
             reject("num max from 0.5");
        }
        
    },1000)

    })
 }

 randomOperation()
 .then((message) => {
    console.log(message);})
.catch((message) => {
    console.log(message);})
    
;

//q4


function raceTimers(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Timer A")
        },2000)

        setTimeout(()=>{
            resolve("Timer B")
        },1000)
    }
    
    )
}

raceTimers().then((message)=>{
     console.log(message);
});


//q6

function waitAll(){
    const first=new Promise((resolve)=>{setTimeout(()=>{resolve("first")},1000)});
    const second=new Promise((resolve)=>{setTimeout(()=>{resolve("second")},1000)});
    const third=new Promise((resolve)=>{setTimeout(()=>{resolve("third")},1000)});

    return Promise.all([first,second,third]);
}

waitAll().then((result)=>{
    console.log(result);
});


//q8

function chainedGreetings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hey");
        }, 1000);
    });
}

chainedGreetings()
    .then((result) => {
        console.log(result);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("How are you?");
            }, 2000);
        });
    })
     .then((result) => {
        console.log(result);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("GoodBye");
            }, 2000);
     })
       .then((result) => {
        console.log(result);
    });  
    });


