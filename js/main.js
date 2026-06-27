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



// COMPTEURS ANIMES

const counters = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const target = entry.target;
            const finalValue = parseInt(target.dataset.target);
            let current = 0;
            const increment = finalValue / 100;
           
            const timer = setInterval( () => {
                current += increment;
                if (current >= finalValue){ 
           
                current = finalValue;
                clearInterval(timer);
            }
            target.textContent = '+' + Math.floor(current);
        }, 20);
        countObserver.unobserve(target);
    }
});
 });
 counters.forEach(counter => countObserver.observe(counter));



//  FADE-IN AU SCROLL


 const fadeElements = document.querySelectorAll('.fade-in');
 if (fadeElements.length > 0) {
    const fade0bserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
        if (entry.isIntersecting){entry.target.classList.add('visible');
            fade0bserver.unobserve(entry.target);
        }
    });
 }, { threshold: 0.15});
 fadeElements.forEach((el) => fade0bserver.observe(el)); 
}

// FILTRAGE DES FREELANCES 
const filterBtns = document.querySelectorAll('.filter-btn');
const freelancerCards = document.querySelectorAll(' .freelancer-card');
filterBtns.forEach( btn => {
    btn.addEventListener('click', () =>{
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.dataset.filter;
        freelancerCards.forEach(card => {
            const category = card.dataset.category;
            if (filterValue=== 'all' || category ===filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }); 
    });
} );


//VALIDATIONS JS
const form = document.getElementById('contactform');
if (form){ 
form.addEventListener('submit',function (e){
    e.preventDefault();

const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const sujet = document.getElementById('sujet');
const message = document.getElementById('message');
const errors = form.querySelectorAll('.error, .error-message');
errors.forEach(error=> error.textContent='');
let isValid =true;

    if(nom.value.trim() === ''){
        nom.nextElementSibling.textContent= 'le nom est obligatoire ';
        isValid = false ;
    }
   if(prenom.value.trim() === ''){
        prenom.nextElementSibling.textContent= 'le prenom est obligatoire ';
        isValid = false ;
    } 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === ''){
        email.nextElementSibling.textContent= 'email est requi ';
        isValid = false ;
    } else if (!emailRegex.test(email.value.trim())){
      email.nextElementSibling.textContent= 'email invalide ';
        isValid = false ;  
    }
    if(sujet.value === ''){
        sujet.nextElementSibling.textContent= 'veuillez choisir un sujet ';
        isValid = false ;
    }
    if(message.value.trim() ===''){
        message.nextElementSibling.textContent= 'le message est requis  ';
        isValid = false ;
    } else if (message.value.trim().length <20){
        message.nextElementSibling.textContent= 'le message est requis  ';
        isValid = false ;
    }
    if (isValid) {
        alert('votre message a été envoyer avec success');
        form.reset();
    }

});
}