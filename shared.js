var backdrop=document.querySelector('.backdrop');

var modal=document.querySelector('.modal');

var modal_button_no=document.querySelector('.modal__action--negative');

var selectPlanButton=document.querySelectorAll('.plan button');

var toggleButton = document.querySelector('.toggle-button');

var mobileNav = document.querySelector('.mobile-nav');


var navCta=document.querySelector('.main-nav__item--cta');
var ctaButton = document.querySelector(".main-nav__item--cta");



const closeModal = ()=>{

    // modal.style.display='none';
    // backdrop.style.display='none';

    if(modal){
        modal.classList.remove('open');
       
    }
    backdrop.style.display='none';
    
    

    setTimeout(()=>{
        backdrop.classList.remove('open');
    },200)
 
}


if(modal_button_no){
    modal_button_no.addEventListener('click', closeModal);
}


// navCta.addEventListener('click',()=>{
//     modal.classList.add('open');
//     backdrop.classList.add('open');
// })


selectPlanButton.forEach(i=>{
    i.addEventListener('click',()=>{
        // modal.style.display='block';
        // this.closeModal();

        // modal.className='open'; This will actually overwrite a complete class listing
        
        modal.classList.add('open');
        backdrop.style.display='block';
        
       // closeModal();

       setTimeout (function() {
        backdrop.classList.add('open');
    },10)

    })
})




backdrop.addEventListener('click',()=>{
    
    mobileNav.style.display='none';
    mobileNav.classList.remove("open");
    backdrop.style.display='none';
    backdrop.classList.remove('open');
    modal.classList.remove('open');
   
});


toggleButton.addEventListener('click',()=>{
    mobileNav.classList.add("open");
    backdrop.style.display='block';

    setTimeout(()=>{
        backdrop.classList.add('open');
    },10)
})


ctaButton.addEventListener('animationstart',(event)=>{
    console.log("animation started ",event);
})

ctaButton.addEventListener('animationend',(event)=>{
    console.log("animation ended ",event);
})

ctaButton.addEventListener('animationiteration',(event)=>{
    console.log("animation iteration ",event);
})

//console.log(selectPlanButton)