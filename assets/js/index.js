import {workInfo} from './components/work-info.js';
customElements.define('info-card',workInfo);

const curtain = document.querySelector('#curtain');


document.addEventListener('DOMContentLoaded', function(){

    // Click event - mobile menu
    const mobile_menu_options = document.getElementById('mobile-menu-options-list');
    document.getElementById('hamburguer-botton').addEventListener('click', function(){
        mobile_menu_options.classList.toggle('display');
    });


    //Click event - grid elements
    const elements = document.querySelectorAll('.cell');
    elements.forEach(element => {
        element.addEventListener('click', function(){
            curtain_down();

            setTimeout(function(){
                document.body.style.overflow = 'hidden';
                const card_number = element.dataset.cell;
                const info_card = document.createElement("info-card");
                info_card.setAttribute('title','INDEED - SMART AND SMALL');
                info_card.setAttribute('imageNumber',card_number);
                document.body.appendChild(info_card);
            }, 1000)

        });
        
    });

});



function curtain_down(){
    curtain.classList.add('curtain');

    setTimeout(function (){
        curtain.classList.remove('curtain');
    }, 2100);
}