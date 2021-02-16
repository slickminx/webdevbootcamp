const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector('#tweets')
// const lis = document.querySelectorAll('li');

// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     });
// }


tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
   
    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
   //console.log(newTweet);
   
    // console.log(usernameInput.value, tweetInput.value);

});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const btag = document.createElement('b');
    btag.append(username);
    newTweet.append(btag);
    newTweet.append(` - ${tweet}`);  
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function(e){
    e.target.nodeName === 'LI' && e.target.remove();
});