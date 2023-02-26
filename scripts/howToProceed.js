import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const howToProceedScroll=()=>{
  let tl=gsap.timeline({
    scrollTrigger:{
      start:'top 60%',
      scrub:true,
      end: 'top 10%',
      scroller:"#main",
      // markers:true,
      }
  })

  tl.from("#rTxt2 p",{
    opacity:0,
    y:100,
    ease:'power1.inOut',
    duration:2
  }) 
  .from("#rTxt2 svg path",{
    strokeDasharray:"890px",
    strokeDashoffset:"890px",
    duration:1,
    stagger:.2,
    opacity:0,
  })
  .from("#rTxt1 p",{
    opacity:0,
    y:100,
    ease:'power1.inOut',
    duration:2
  }) 
  .from("#rTxt1 svg path",{
    strokeDasharray:"890px",
    strokeDashoffset:"890px",
    duration:1,
    stagger:.2,
    opacity:0,
  })
  .from("#hp-box h1 ",{
    y:100,
    opacity:0,
    ease:'power1.inOut',
    duration:2,
    rotate:0


  })

  let hPin=gsap.timeline({
    scrollTrigger:{
      start:'top top',
      scrub:true,
      trigger:"#howToProceed",
      pin: "#howToProceed",
      end: "+=" + window.innerHeight * 10,
      }
  })



  hPin.from("#helm1",{
    top:"100%",
    ease:'Expo.easeInOut',
    duration:.3,
    rotate:0,
    left:'50%',

  },'m')
  .from("#helm2",{
    top:"100%",
    ease:'Expo.easeInOut',
    duration:.3,
    left:'50%',
    rotate:0

  },'m')
  .from("#helm3",{
    top:"100%",
    ease:'Expo.easeInOut',
    duration:.3,
    rotate:0,
    left:'50%',


  },'m')
  .from("#helm4",{
    top:"100%",
    ease:'Expo.easeInOut',
    duration:.3,
    rotate:0,
    left:'50%',


  },'m')
  .from(".hElm img",{
   opacity:0,
   duration:.3,
   ease:'Expo.easeInOut',
   y:30
  },'m')
  .from(".hElm h3",{
    opacity:0,
    duration:.3,
    ease:'Expo.easeInOut',
    y:30
   },'m')
}