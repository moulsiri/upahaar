import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const howToProceedScroll=()=>{
  let tl=gsap.timeline({
    scrollTrigger:{
      start:'top 60%',
      scrub:true,
      trigger:"#howToProceed",
      end: 'top 10%',
      // markers:true,
      }
  })
  // let hPin=gsap.timeline({
  //   start:'top top',
  //   scrub:true,
  //   trigger:"#howToProceed",
  //   pin:true,
  //   markers:true
  //   // end: "+=" + window.innerHeight * 10,
  // })

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
  .from("#helm1",{
    top:"100%",
    ease:'power1.inOut',
    duration:3,
    rotate:0
  })
  .from("#helm2",{
    top:"100%",
    ease:'power1.inOut',
    duration:3,
    rotate:0

  })
  .from("#helm3",{
    top:"100%",
    ease:'power1.inOut',
    duration:3,
    rotate:0

  })
  .from("#helm4",{
    top:"100%",
    ease:'power1.inOut',
    duration:3,
    rotate:0

  })
  .from("#hp-box h1 ",{
    y:100,
    opacity:0,
    ease:'power1.inOut',
    duration:2,
    rotate:0


  })

}