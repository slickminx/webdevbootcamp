const button = document.querySelector('#colorBtn');
const container = document.querySelector('#container');


button.addEventListener('click', function(e){
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
});
    container.addEventListener('click', function(){
        container.classList.toggle('hide');
    });


const makeRandColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;

}