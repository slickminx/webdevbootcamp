// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com/page1', 
//     function(response){
//         console.log("it worked!!!");
//         console.log(response);
//         fakeRequestCallback('books.com/page2', function(response){
//             console.log("it worked again!!!!!");
//             console.log(response);
//             fakeRequestCallback('books.com/page3', function(response){
//                 console.log("it worked for a third time!!!!!");
//                 console.log(response);
//             }, function(err){
//                 console.log("ERRROR!!!! (3r Request)", err);
//             });
//         }, function(err) {
//             console.log("ERRROR!!!! (2nd Request)", err);
//         });
//     }, function(err){
//             console.log("ERRROR!!!!", err);
//         })

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })



// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then (() => {
//     console.log("It Worked!!! (Page 1)");
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(() => {
//             console.log("It Worked!!! (Page 2)");
//             fakeRequestPromise('yelp.com/api/coffee/page3')
//                 .then(() => {
//                     console.log("It Worked!!! (Page 3)");
//                 }).catch(() => {
//                     console.log('Oh no, Error (page 3)!!!!');
//                 });
//             }).catch(() => {
//                 console.log('Oh no, Error (page 2)!!!!');
//             });
//         }).catch(() => {
//             console.log('Oh no, Error!!!! (Page 1)');
//         });

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("It Worked!!! (Page 1)");
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!! (PAGE 2)");
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!! (PAGE 3)");
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .catch((err) =>{ 
//         console.log("Oh No. A request failed!!!");
//         console.log(err);
//     })

const fakeRequest = (url) => {
    new Promise((resolve, reject) => {
        const rand = Math.random();
        
        setTimeout(() =>{
            if(rand < 0.7){
                resolve("Your Fake Data HERE");
            } 
            reject("Request Error!");
        }, 1000)
    })
}

fakeRequestPromise('/dogs/1')
    .then((data) => {
        console.log("Done with Request!");
        console.log("data is: ", data);
    }).catch((err) => {
        console.log("OH NO!", err)
    })

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();

//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 2000))
    .then(() => delayedColorChange('yellow', 2000))
    .then(() => delayedColorChange('green', 2000))
    .then(() => delayedColorChange('blue', 2000))
    .then(() => delayedColorChange('indigo', 2000))
    .then(() => delayedColorChange('purple', 2000))
    
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// // THE CLEANEST OPTION WITH THEN/CATCH
// // RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })



