import { html, render } from "https://unpkg.com/lit-html@1.2.1";
// const template = `
//         <div class="card-container"> 

//             <article class="card">
//                 <img src="assets/img/close.svg" class="close-button">
//                 <section class="card-header">
//                     <img src="assets/img/arrow_back_ios.svg" class="arrow-button" id="arrow-back">
//                     <img src="assets/img/portada-${imageNumber}.jpg" class="card-image">
//                     <img src="assets/img/arrow_forward_ios.svg" class="arrow-button" id="arrow-forward">
//                 </section>
//                 <section class="card-body">
//                     <p class="card-title">${title}</p>
//                     <p class="card-description">
//                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti quas, minima velit dolore magni mollitia sed, itaque reprehenderit, assumenda eius dicta culpa ut odio. Dolore corrupti quibusdam atque praesentium!
//                     </p>
//                 </section>        
//             </article>
//         </div>

//         <style>
//             ::selection{
//                 background-color: #FF8DAC;
//             }

//             .card-container{
//                 display: flex;
//                 justify-content: center;
//                 align-items:center;
                
//                 overflow: auto;
//                 position: fixed;
//                 top: 0;
//                 z-index: 20;
//                 width: 100%;
//                 height: 100%;
            
//                 text-align: center;    
//                 font-size: 16px;
//                 background-color: #16ffbd;
//                 line-height: 2;
//                 border: 1px solid black;
//             }

//             .close-button{
//                 position: absolute;
//                 right: 15px;
//                 top: 10px;
//                 width: 4%;
//                 min-width: 30px;
//                 cursor: pointer;
//             }

//             .card{
//                 width: 60%;
//                 margin-top:5%;
//                 margin-bottom: 2%;
                
//             }

//             .card-header{
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 margin-bottom: 2%;
//             }

//             .card-image{
//                 width: 70%;
//                 min-width: 250px;
//                 margin: 0 2%;
//             }

//             .arrow-button{
//                 width: 5%;
//                 min-width: 20px;
//                 cursor: pointer;
//             }

//             .card-title{
//                 margin: 0;
//                 font-size: 2.5rem;
//                 font-weight: bold;
//             }

//             .card-description{
//                 margin: 0;
//                 font-family: 'Work Sans', sans-serif;
//                 font-size: 1rem;
//             }


//             @media screen and (max-width:900px) {
            
//                 .card-description{
//                     font-size: 14px;
//                 }
                
//                 .card-title{
//                     font-size: 1.7rem;
//                 }
                
//             }


//         </style>`;


export class workInfo extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        
      }


    connectedCallback() {
        this.title = this.getAttribute('title');
        this.imageNumber = this.getAttribute('imageNumber');
        this.render();

    }

    
    render(){
        return render(this.template(), this.shadowRoot, {eventContext: this});
    }

    close(){
        document.body.style.overflow = 'auto';
        this.remove();
    }

    next(){
        if(this.imageNumber < 9){
            this.imageNumber++;
            this.render();
        }
    }

    back(){
        if(this.imageNumber > 1){
            this.imageNumber--;
            this.render();
        }
    }

    template(){
        return html `
        <div class="card-container">

            <article class="card">
                <img src="assets/img/close.svg" class="close-button" @click=${this.close}>
                <section class="card-header">
                    <img src="assets/img/arrow_back_ios.svg" class="arrow-button" id="arrow-back" @click=${this.back}>
                    <div class="card-image-container"><img src="assets/img/portada-0${this.imageNumber}.jpg" width="100%"></div>
                    <img src="assets/img/arrow_forward_ios.svg" class="arrow-button" id="arrow-forward" @click=${this.next}>
                </section>
                <section class="card-body">
                    <p class="card-title">${this.title}</p>
                    <p class="card-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti quas, minima velit dolore magni mollitia sed, itaque reprehenderit, assumenda eius dicta culpa ut odio. Dolore corrupti quibusdam atque praesentium!
                    </p>
                </section>        
            </article>
        </div>
        <style>
            ::selection{
                background-color: #FF8DAC;
            }

            .card-container{
                display: flex;
                justify-content: center;
                align-items: center;    
                overflow: auto;
                position: fixed;
                top: 0;
                z-index: 10;
                width: 100%;
                height: 100vh;
                text-align: center;    
                font-size: 16px;
                background-color: #16ffbd;
                line-height: 2;
                
            }

            .close-button{
                position: absolute;
                right: 15px;
                top: 10px;
                width: 4%;
                min-width: 30px;
                cursor: pointer;
            }

            .card{
                width: 60%;
                margin-top: 100px;
                margin-bottom: 50px;
            }

            .card-header{
                display: flex;
                justify-content: center;
                align-items: center;
                column-gap: 10%;
                margin-bottom: 2%;
                
            }

            .card-image-container{
                width: 55%;
                min-width: 250px;
            }

            .arrow-button{
                width: 5%;
                min-width: 20px;
                cursor: pointer;
            }

            .card-title{
                margin: 0;
                font-size: 2.5rem;
                font-weight: bold;
            }

            .card-description{
                margin: 0;
                font-family: 'Work Sans', sans-serif;
                font-size: 1rem;
            }


            @media screen and (max-width:900px) {
            
                .card-description{
                    font-size: 14px;
                }
                
                .card-title{
                    font-size: 1.7rem;
                }
            }
        </style`;
    }
    
}