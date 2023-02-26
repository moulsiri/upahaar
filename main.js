/**
 * external libraries
 */
import 'remixicon/fonts/remixicon.css';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from "gsap/ScrollTrigger";
import './style/locomotive.css';




/**
 * All styles
 */
import './style/nav.scss';
import './style/hero.scss';
import './style/footer.scss';
import './style/animationStyle.scss';
import './style/showcase.scss';
// import './style/HarshStyleFile.css';
import './style/abovegift.scss';
import './style/howToProceed.scss';
import './style/gallery.css';
import './style/newStyling.scss';
import './style/customers.scss';




/**
 * different components
 */
import './scripts/catalogue.js'
import {wrapTxt,splitByLine} from './scripts/textModifier';
import {howToProceedScroll} from './scripts/howToProceed';
import {loadingAnimaiton,scrollBased} from './scripts/initialAnimation';
// import './scripts/HarshScriptFile.js';



//html utils
wrapTxt()
splitByLine()


// connect button hover animation 
let buttons=document.querySelectorAll(".m-btn");
buttons.forEach((elm)=>{
    let bg1=elm.querySelector('.b-bg1');
    let txt1=elm.querySelector('.b-txt1');
    let  txt2=elm.querySelector('.b-txt2');
    elm.addEventListener('mouseenter',function(){
        gsap.to(bg1,{
            top:0,
            duration:.5
        })
        gsap.to(txt1,{
            top:"50%",
            duration:.5
    
        })
        gsap.to(txt2,{
            y:"200%",
            duration:.5
    
        })

    })
    elm.addEventListener("mouseleave",function(){
    gsap.to(bg1,{
        top:"100%",
        duration:.5

    })
    gsap.to(txt1,{
        top:"-100%",
        duration:.5

    })
    gsap.to(txt2,{
        y:"0",
        duration:.5

    })
})
})

  
window.addEventListener('popstate', function(event) {
    return true;
   });

//animations
loadingAnimaiton()
scrollBased()
howToProceedScroll()

