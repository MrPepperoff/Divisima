const burger = document.querySelector('#burger');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('nav__burger_active')
})

const burgerSub = document.querySelectorAll('.menu-item');

// burgerSub.forEach(item => {
//     console.log(item)
    
// });

burgerSub.forEach(item => {
    let span = item.querySelector('span');
    span.addEventListener('click', ()=>{
        item.classList.toggle('menu-item_active');
    });
})