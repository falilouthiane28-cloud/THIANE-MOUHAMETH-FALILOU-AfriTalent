// BUTTON MODE JOURS/NUITS

const toggleBtn = document.getElementById('theme-toggle');

if(localStorage.getItem('theme')==='dark'){
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '🔆';
}
toggleBtn.addEventListener('click',()=> {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent ='🔆';
    }else{
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent="🌙"
    }
}  
);
//  NAVBAR INTERACIVE AU SCROLL

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',() => {
    if (window.scrollY >50){
        navbar.classList.add('scrolled');
  }else{
    navbar.classList.remove('scrolled');
}
} );

// BUTTON TOP
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll',() => {
    if (window.scrollY >300) {
        backToTop.classList.add('show')
   }else {
        backToTop.classList.remove('show')
    }
}  
);
if (backToTop){
    backToTop.addEventListener('click', () =>{
        window.scrollTo({ top : 0,
             behavior: 'smooth'});
    }
    );
};

