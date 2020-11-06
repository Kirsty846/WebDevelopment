
// setTimeout(()=> {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=> {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(()=> {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(()=> {
//                 document.body.style.backgroundColor = 'green';
            
//             },1000)
//         },1000)
//     },1000)
// },1000)

// const delayedColorChange = (newColor, delay, doNext)=>{
//     setTimeout(()=> {
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     },delay)
// }

// delayedColorChange('red', 3000, ()=> {
//     delayedColorChange('green', 3000, ()=>{
//         delayedColorChange('orange', 3000,()=>{});
//     });
// });

// const delayedColorChange = (color, delay) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
// .then(()=> delayedColorChange('orange', 1000))
// .then(()=> delayedColorChange('yellow', 1000))
// .then(()=> delayedColorChange('green', 1000))
// .then(()=> delayedColorChange('blue', 1000))
// .then(()=> delayedColorChange('violet', 1000))


const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(()=> delayedColorChange('orange', 1000))
.then(()=> delayedColorChange('yellow', 1000))
.then(()=> delayedColorChange('green', 1000))
.then(()=> delayedColorChange('blue', 1000))
.then(()=> delayedColorChange('violet', 1000))

async function rainbow(){
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
}


const fakeRequest = (url) => {
    new Promise((resolve, reject) =>{
        const rand = math.random();
        setTimeout(() =>{
            if(rand < 0.7)
            {
                resolve("return fake data");  
            }
            reject("oops something went wrong");
        },2000)
    })
}

async function makeTwoRequest(){
    try {
        let data1 = await fakeRequest('/page1');
        let data12 = await fakeRequest('/page12');
    }
    catch(e)
    {
        console.log("caught error") ;
        console.log("error is:",e)
    }
}

// fakeRequest('/dogs/1')
// .then((data)=> {
//     console.log("done");
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


const login = async (username, password)=>{
    if(!username || !password) throw 'Missing Credentials'
    if(password === "piet") return 'Welcome'
    throw 'invalid password'
}

login('testing')
.then(msg =>{
    console.log("logged in")
    console.log(msg)
})
.catch(err =>{
    console.log("error")
    console.log(err)
})