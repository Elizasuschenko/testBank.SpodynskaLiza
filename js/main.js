let imgBlock = document.querySelector('.first_block-container-picture');
let picture = document.querySelector('.first_block-picture');
let pictureWidth = picture.offsetWidth;
let pictureHeight = picture.offsetHeight;
let style = imgBlock.getBoundingClientRect();
function styleRotate(pictureElement, clientElement, firstStyle, secondStyle){
    let maxProcent = 11;
    let procent;
    let items = pictureElement / 2 / 100;
    if((clientElement - firstStyle) < pictureElement / 2 ) {
        let item = (clientElement - firstStyle) / items;
        procent = maxProcent - item * (maxProcent / 100)
    }
    else{
        let item = (clientElement - secondStyle) / items;
        procent = -(maxProcent + item * (maxProcent / 100));
    }
    return procent
}
picture.addEventListener('mousemove', function (event) {
    picture.style.transition = '0.2s all ease';
    let styleWidth = styleRotate(pictureWidth, event.clientX, style.left, style.right);
    let styleHeight = styleRotate(pictureHeight, event.clientY, style.top, style.bottom);
    picture.style.transform = 'rotateY(' + String(styleWidth) + 'deg) rotateX(' + String(-styleHeight) + 'deg)';
});
imgBlock.addEventListener('mouseout', function () {
    picture.style.transform = 'rotateY(0deg)';
    picture.style.transition = '1s all ease';
});
let list = document.querySelector('.second_block');
let listItems = document.querySelectorAll('.second_block-list-item');
let header = document.querySelector('.header');
let firstBlockHeight = document.querySelector('.first_block').offsetHeight;
list.addEventListener('mouseover', function () {
    let blockItem = event.target.closest('.second_block-list-item');
    if(blockItem === null){
        for(let i= 0; i<listItems.length; i++){
            listItems[i].classList.remove('hover')
        }
        return false
    }
    if(blockItem.querySelector('.second_block-list-item-link') !== null){
        blockItem.classList.add('hover');
        blockItem.addEventListener('click', function () {
            blockItem.querySelector('.second_block-list-item-link').click()
        })
    }
    return true
});
window.addEventListener('scroll', function () {

    if(window.pageYOffset > (firstBlockHeight - 300)){
        header.classList.add('fixed');
    }
    else{
        header.classList.remove('fixed');
    }
});
