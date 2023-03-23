const menu = document.querySelector('.menu')
const navList = document.querySelector('.nav-list')
menu.addEventListener('click', function(){
    navList.classList.toggle('show-nav')
    // console.log(navList.style);
})