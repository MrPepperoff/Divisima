const crl = document.querySelector('#carouselLatest');
const crlInner = document.querySelector('.latest__carousel-inner');
const crlItems = crlInner.querySelectorAll('.latest__carousel-item');
const btnNext = document.querySelector('.latest__control-next');
const btnPrev = document.querySelector('.latest__control-prev');
let crlWidth;
let ItemWidth;
// поиск рамера карточки товара
crlItems.forEach(item => {
    ItemWidth = item.offsetWidth;
});
crlWidth = ItemWidth * crlItems.length // общий размер для карусели 

let scrollPosition = 0;
crlInner.style.left = `0px`;

btnNext.addEventListener('click', function() {
    if(scrollPosition < (crlWidth- ItemWidth*4)){
        scrollPosition += ItemWidth;
        crlInner.style.left = `-${scrollPosition}px`;
    }
    else{
        scrollPosition = 0;
        crlInner.style.left = `-${scrollPosition}px`;
    }
})
btnPrev.addEventListener('click', function() {
    if(scrollPosition > 0){
        scrollPosition -= ItemWidth;
        crlInner.style.left = `-${scrollPosition}px`;
    }
    else{
        scrollPosition = crlWidth-ItemWidth*4;
        crlInner.style.left = `-${scrollPosition}px`;
    }
})
