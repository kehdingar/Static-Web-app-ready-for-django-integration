var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var subMenu = document.querySelectorAll('.main-nav__subitems >li');
var mainMenu = document.querySelectorAll('.main-nav__item  >a');
var mainMenuNextElementSibling = document.querySelectorAll('.main-nav__subitems');


var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


console.dir(mainMenu);
console.dir(subMenu);
console.log("Testing new Branch");
//  console.dir(selectPlanButton);

for(var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click',function(){
            // backdrop.style.display="block";
            // modal.style.display="block";
            // modal.className = 'open'; This will completely overwite the complete class list
            modal.classList.add('open');
            backdrop.classList.add('open');


        });
}

backdrop.addEventListener("click",function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
});

modalNoButton.addEventListener("click",closeModal);

function closeModal(){
    // backdrop.style.display="none";
    // modal.style.display="none";
    modal.classList.remove('open');
    backdrop.classList.remove('open');

}

toggleButton.addEventListener('click',function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display="block";
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});















 
            
            // for(var i = 0; i < mainMenu.length; i++){

            

            //     mainMenu[i].addEventListener('mouseover',function(){
            //         if(mainMenu[i].nextSibling,classList.contains('main-nav__subitems')){
            //             for(var k = 0; k < subMenu.length; k++){
            //                 subMenu[k].style.display="block";
            //             }
                       
            //         }

            //     });
            // }
            
            // for(var i = 0; i < mainMenu.length; i++){
            
            //     mainMenu[i].addEventListener('mouseout',function(){
            //         for(var k = 0; k < subMenu.length; k++){
            //             subMenu[k].style.display="none";
            //         }
            //     });
            // }
  











