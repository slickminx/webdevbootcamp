async function hello () {

}

// const sing = async () => {
// throw "OH Shit";
//  return 'LA LA LA LA'
// }

// sing().then((data) => { 
//      console.log("Promised resolved with: ", data);
// }).catch(err => {
//     console.log("OH Shit.  Promise rejected!");
//     console.log(err);
// })

const login = async (username, password) => {
    if(!username || !password) throw "Missing Credentials"
    if(password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
    
}

login('adfafs', 'corgifeetarecute')
.then(msg => {
    console.log("Logged in!!!");
    console.log(msg)
})
.catch(err => {
    console.log("ERROR: ", err)
})

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 2000))
//     .then(() => delayedColorChange('yellow', 2000))
//     .then(() => delayedColorChange('green', 2000))
//     .then(() => delayedColorChange('blue', 2000))
//     .then(() => delayedColorChange('indigo', 2000))
//     .then(() => delayedColorChange('purple', 2000))
    

// async function rainbow(){
//    await delayedColorChange('red', 1000);
//    await delayedColorChange('orange', 1000);
//    await delayedColorChange('yellow', 1000);
//    await delayedColorChange('green', 1000);
//    await delayedColorChange('blue', 1000);
//    await delayedColorChange('indigo', 1000);
//    await delayedColorChange('violet', 1000);
//    return "All Done!"
// }

// rainbow().then(() => console.log("End of Rainbow"))

// async function printRainbow() {
//     await rainbow();
//     console.log("End of the Rainbow");
// }

// const delayedColorChange = (newColor, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             document.body.style.backgroundColor = newColor;
//             resolve();
//         }, delay);
//     })
// }

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


async function makeTwoRequests() {
    try{
        let fakedata = await fakeRequest('/page1');
        console.log(fakedata);
        let fakedata2 = await fakeRequest('/page2');
        console.log(fakedata2);
    }catch(e){
        console.log("Caught an Error! ");
        console.log("error is:", e);
    }

}