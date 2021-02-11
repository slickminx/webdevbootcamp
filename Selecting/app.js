// const allImages = document.getElementsByTagName('img');

// for(let img of allImages){
//     console.log(img.src);
//     img.src = 'c
// }


// const squareImages = document.getElementsByClassName('square');

// for(let img of squareImages){
//     img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png';
// }
// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

const links = document.querySelectorAll('p a');

for(let link of links){
    console.log(link.href);
}