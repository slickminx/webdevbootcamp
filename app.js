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

// const links = document.querySelectorAll('p a');

// for(let link of links){
//     console.log(link.href);
// }

// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.innerText = "I am a link";
// }

// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.style.color = '#00bbaa';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }

//Wrong way to do tings via using inline style classes via Javascript
// const h2 = document.querySelector('h2');
// console.log(h2.getAttribute('class'));

// h2.setAttribute('class', 'purple');
// h2.setAttribute('class', 'border');

// let cursrentClasses = h2.getAttribute('class');

// console.log(currentClasses);

// h2.setAttribute('class', `${currentClasses} purple`);

//Do the below instead
// const h2 = document.querySelector('h2');
// console.log(h2.classList);
// h2.classList.add('purple');
// h2.classList.add('border');
// h2.classList.remove('border');

// //toggle classes
// console.group(h2.classList.contains('border'));
// console.group(h2.classList.contains('purple'));

// console.log(h2.classList.toggle('purple'));

// const firstBold = document.querySelector('b');
// console.log(firstBold);

// console.log(firstBold.parentElement);
// console.log(firstBold.parentElement.parentElement);
// console.log(firstBold.parentElement.parentElement.parentElement);


// const paragraph = firstBold.parentElement;
// console.log(paragraph.childElementCount);
// console.log(paragraph.children);
// console.log(paragraph.children[0]);

// const squareImg = document.querySelector('.square');

// console.log(squareImg.parentElement);
// console.log(squareImg.children);


// console.log(squareImg.nextSibling);
// console.log(squareImg.previousSibling);

// //use this to get the next sibling
// console.log(squareImg.previousElementSibling);
// console.log(squareImg.nextElementSibling);

// //create element
// const newImg = document.createElement('img');

// console.log(newImg);

// newImg.src= "https://images.unsplash.com/photo-1612958859598-110231d1f2da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
// document.body.appendChild(newImg);
// newImg.classList.add('square');
// const newH3 = document.createElement('h3');

// newH3.innerText = 'I am new';

// document.body.appendChild(newH3);

// //Another method to create an element

// const p = document.querySelector('p');

// p.append("I've been added", "afkjadkjfaklfjiaj");

// //prepend function doesn't work in IE.  :( - Video 251

// const h2 = document.createElement('h2');

// h2.append("are you adorable?");
// const h1 = document.querySelector('h1');

// h1.insertAdjacentElement('afterend', h2);

//to remove a element

// const firstLi = document.querySelector ('li');
// const ul = firstLi.parentElement;
// ul.removeChild(firstLi);

// const img = document.querySelector('img');
// img.remove();