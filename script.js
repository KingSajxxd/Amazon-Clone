// Creating Variables for the classes

const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');


let n = 0;
// Scrollable Headers with arrows
function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';

}
changeSlide();
// Adding a function for the previous arrow to change slide
prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})
// Adding a function for the previous arrow to change slide
next_btn.addEventListener('click', (e)=>{
    if (n < imgs.length - 1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();

})
// Scroll the product slider using the mouse wheel
const scrollContainer = document.querySelectorAll('.product');
for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}