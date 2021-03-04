// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b){
//     return `rgb(${r}, ${b}, ${g})`;
// }

// hex(255, 100, 25);
// rgb(255,100,25);
// "#ff6419"
// "rgb(255,100,25)";

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function(){
//         console.log(this);
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function() {
//         const {r, g, b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
    
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();
// firstColor.rgb();

// const black = makeColor(0, 0, 0);
// black.rgb();
// black.hex();


function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    // this.rgb = function(){
    //     console.log(this);
    //     const {r, g, b} = this;
    //     return `rgb(${r}, ${g}, ${b})`;
    // }
}
//without the new operator, the this keyword will refer to the window operator.
//adding new will refer to the object within the function
// new Color (255, 50, 100);

Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}
Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function(a = 1.0) {
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const color1 = new Color(40, 50, 60);
const color2 = new Color(140, 150, 160);

