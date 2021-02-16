// const clickme = document.querySelector('#clickme');
// let values = document.querySelector('#values');

// clickme.addEventListener('click', () => {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let body = document.querySelector('body');
    
//     body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//     values.innerText = ` (${red}, ${green}, ${blue})`;
// });

const clickme = document.querySelector('#clickme');
const h1 = document.querySelector('h1');
clickme.addEventListener('click', () => {
   
    const newColor = randomColor();
    
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;

}