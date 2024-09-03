let c = (element)=>document.querySelector(element);
let cs = (element)=>document.querySelectorAll(element);

//qt slides
let totalSlides = cs('.slider--item').length;
//slide atual
let currentSlide = 0;

let sliderWidth = c('.slider').clientWidth;

//width slider que gira
c('.slider--width').style.width =`${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;

//height dos controls = sliders
document.querySelector('.slider--controls').style.height = 
    `${c('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    //se currentSlide é o primeiro, vá para o último
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    //se currentSlide é o último, vá para o primeiro
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = c('.slider--item').clientWidth;
    //margin na div = nSlides * largura tela nav
    let newMargin = (currentSlide * sliderItemWidth);
    //jogando margin pro html
    c('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

//mude imagem a cada 5s
setInterval(goNext, 4000);