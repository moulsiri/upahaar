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




//animations
loadingAnimaiton()
scrollBased()
howToProceedScroll()

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();
