import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const loadingAnimaiton=()=>{
    let tl=gsap.timeline({
       
    }  
    );
    tl.from("#motoTxt .a-child",{
        y:-100,
        ease:'Power1.easeInOut',
        duration:2
    })
    .to("#motoTxt .a-abs-child",{
        top:0,
        ease:'expo.easeInOut'
    },'+=.5')
    tl.to("#motoTxt .a-child",{
        y:100,
    },'a')
    .to("#motoTxt .a-abs-child",{
        top:100,
    },'a')
    .from("#m-texture",{
        scaleX:0, 
        transformOrigin:'left center',
        ease: "expo.inOut",
        duration:1
    
    })
    .to("#m-texture",{
        height:"100%",
        ease: "expo.inOut", 

    })
    .to("#m-texture",{
        left:"100%",
        ease: "expo.inOut", 
    })
    .set("#a-gift-container",{
        display:'initial'
    })                           // gift transition
    .to(".a-giftCard:nth-child(1)",{
        top:0,
        duration:0.3,
        ease: "expo.inOut",

    })
    .to(".a-giftCard:nth-child(1)",{
        left:'-100%',
        delay:0.1,
        ease: "expo.inOut",

    })
    .to(".a-giftCard:nth-child(2)",{
        top:0,
        duration:0.3,
        ease: "expo.inOut",
    })
    .to(".a-giftCard:nth-child(2)",{
        left:'-100%',
        delay:0.1,
        ease: "expo.inOut",
    })
    .to(".a-giftCard:nth-child(3)",{
        top:0,
        duration:0.3,
        ease: "expo.inOut",

    })
    .to(".a-giftCard:nth-child(3)",{
        left:'-100%',
        delay:0.1,
        ease: "expo.inOut",

    })
    .to(".a-giftCard:nth-child(4)",{
        top:0,
        duration:0.3,
        ease: "expo.inOut",

    })
    .to(".a-giftCard:nth-child(4)",{
        left:'-100%',
        delay:.1,
        ease: "expo.inOut",
    })
    .to(".a-giftCard:nth-child(5)",{
        top:0,
        duration:0.3,
        ease: "expo.inOut",

    })
    .to(".a-giftCard:nth-child(5)",{
        left:'-100%',
        delay:.1,
        ease: "expo.inOut",
    })
    .to(".a-giftCard:nth-child(6)",{
        top:0,
        duration:.3,
        ease: "expo.inOut",
    })
    .to('#startAnimContainer',{
        left:'75%',
        top:'75%'
    },'m')
    .to("#startAnimContainer",{
        height:'80vmin',
        top:'60%',
        width:'40vmax'
    },'m')
    .set("#a-gift-container",{
        transformOrigin:'bottom',
    },'m')
    .to("#a-gift-container",{
        scale:2,
    },'m')
    .from('nav .a-child',{
        y:100
    },'m')
    .from('#m-catalogueBtn i',{
        opacity:0
    },'m')
    .from('#m-h-txt h1 .a-child',{
        y:100,
        opacity:0,
        duration:2,
        ease:'Power1.InOut'
    },'m')
    .from("#m-h-txt .wsvg",{
        opacity:0,
        duration:1,
        stagger:.2,
        ease:'Power1.InOut'
        
    },'m')
    // .to("#m-texture",{
    //     top:'50%'
    // })

}
export const scrollBased=()=>{

    let shift=document.querySelector(".vElm").getBoundingClientRect().width+20
    let tl=gsap.timeline({
        scrollTrigger:{
            start:'top top',
            scrub:true,
            trigger:"#hero",
            pin: "#hero",
            }
    })
    tl.from('#m-h-txt p',{
        opacity:0,
        duration:1.5,
        ease:"power1.easeInOut"
    },'i')
    .from("#giftBoxes",{
        bottom:'-100%',
        duration:1.5,
        ease:"power1.easeInOut"
    },'i')
    .from(".orderBtn",{
        y:10,
        opacity:0,
        duration:1.5,
        ease:"power1.easeInOut"
    })


let tl2=gsap.timeline({
    scrollTrigger:{
        start:'top 80%',
        scrub:true,
        trigger:"#showcase",
        end: 'top 10%',
        }

})
let sPin=gsap.timeline({
    scrollTrigger:{
        start:'top top',
        scrub:true,
        trigger:"#showcase",
        pin: "#showcase",
        end: "+=" + window.innerHeight * 10,
        }

})

    tl2         //one part completed
    .from("#m-mtexture",{
        bottom:'-100%',
        ease:'expo.easeOut'
    },'chng')
    .from("#m-video-container",{
        scaleX:0,
        transformOrigin:'right center',
        ease:'expo.easeOut'
    },'nbgn')
    .from("#showcase svg path",{
        strokeDasharray:"890px",
        strokeDashoffset:"890px",
        duration:1,
        stagger:.2,
        opacity:0,
    },'nbgn')
    .from("#m-tLine",{
        width:0,
        ease:'expo.easeOut'

    },'nbgn')
    .from("#m-mainHeading .a-child",{
        y:100,
        ease:'power1.inOut',
        duration:2
    },'nbgn')
    .from("#videos-reel-container",{
        opacity:0,
        x:100,
        ease:'power1.inOut',
        duration:2
    },'nbgn')
    .to("#m-img-container .m-pics:nth-child(4)",{
        top:'0%',
        ease:'expo.inOut'
    },'nbgn')
    .from(".rt-txt-elm:nth-child(1) .a-child",{
        y:100,
        ease:'power1.inOut',
        duration:2
    },'nbgn')
    .from(".rt-txt-elm:nth-child(1) p",{
        opacity:0,
        ease:'power1.inOut',
        duration:2

    },'nbgn') 
    sPin  //changing videos
    .to("#videos-reel-container",{
        x:`-${shift}px`,
        ease:'power1.inOut',
        duration:2
    },'s')
    .to("#m-img-container .m-pics:nth-child(4)",{
        left:'-100%',
        ease:'expo.inOut',
        duration:2
    },'s')
    .to(".rt-txt-elm:nth-child(1) .a-child",{
        y:-100,
        ease:'power1.inOut',
        duration:2
    },'s') 
    .to(".rt-txt-elm:nth-child(1) p",{
        opacity:0,
        ease:'power1.inOut',
        duration:2
    },'s')  ///next rotation
    .to('.vElm:nth-child(2)',{
        opacity:1,
        ease:'power1.inOut',
        duration:2
    },'s1')
    .to(".m-pics:nth-child(3)",{
        top:'0%',
        ease:'expo.inOut',
        duration:2
    },'s1')
    .set(".rt-txt-elm:nth-child(2)",{
        top:0,
        ease:'power1.inOut',
        duration:2
    },'s1')
    .from(".rt-txt-elm:nth-child(2) .a-child",{
        y:0,
        ease:'power1.inOut',
        duration:2
    },'s1')/////changing video
    .to("#videos-reel-container",{
        x:`-${shift*2}px`,
        ease:'power1.inOut',
        duration:2
    },'s11')
    .to("#m-img-container .m-pics:nth-child(3)",{
        left:'-100%',
        ease:'expo.inOut',
        duration:2
    },'s11')
    .to(".rt-txt-elm:nth-child(2) .a-child",{
        y:-100,
        ease:'power1.inOut',
        duration:2
    },'s11') 
    .to(".rt-txt-elm:nth-child(2) p",{
        opacity:0,
        ease:'power1.inOut',
        duration:2
    },'s11') //-------------->
    .to('.vElm:nth-child(3)',{
        opacity:1,
        ease:'power1.inOut',
        duration:2
    },'s2')
    .to(".m-pics:nth-child(2)",{
        top:'0%',
        ease:'expo.inOut',
        duration:2
    },'s2')
    .set(".rt-txt-elm:nth-child(3)",{
        top:0,
        ease:'power1.inOut',
        duration:2
    },'s2')
    .from(".rt-txt-elm:nth-child(3) .a-child",{
        y:0,
        ease:'power1.inOut',
        duration:2
    },'s2')
    /////changing video
    .to("#videos-reel-container",{
        x:`-${shift*3+10}px`,
        ease:'power1.inOut',
        duration:2
    },'s21')
    .to("#m-img-container .m-pics:nth-child(2)",{
        left:'-100%',
        ease:'expo.inOut',
        duration:2
    },'s21')
    .to(".rt-txt-elm:nth-child(3) .a-child",{
        y:-100,
        ease:'power1.inOut',
        duration:2
    },'s21') 
    .to(".rt-txt-elm:nth-child(3) p",{
        opacity:0,
        ease:'power1.inOut',
        duration:2
    },'s21') //-------------->
    .to('.vElm:nth-child(4)',{
        opacity:1,
        ease:'power1.inOut',
        duration:2
    },'s3')
    .to(".m-pics:nth-child(1)",{
        top:'0%',
        ease:'expo.inOut',
        duration:2
    },'s3')
    .set(".rt-txt-elm:nth-child(4)",{
        top:0
    },'s3')
    .from(".rt-txt-elm:nth-child(4) .a-child",{
        y:0,
        ease:'power1.inOut',
        duration:2,
        onComplete:()=>{
            document.querySelector("#hero").style.height=document.querySelector("#hero").offsetHeight-window.innerHeight
        }
    },'s3')

    


}
