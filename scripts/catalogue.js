import gsap from 'gsap';
let index=0

let tl=gsap.timeline({
    paused:true
})
tl.set("#m-catalogue",{
    display:'initial'
})
.from("#m-catalogue",{
    opacity:0
})
.to("#content",{
    y:0
})
.to("#content",{
    scale:1
})

document.querySelector("#m-catalogueBtn i").addEventListener("click",()=>{
    tl.play();
elmEnter(cards[index])

})
document.querySelector("#m-closeBtn i").addEventListener("click",()=>{
        tl.reverse();
    })


function prevRemove(elm){
     let fade=gsap.utils.toArray(elm.querySelectorAll('.faddedChild'));
    let highLight=elm.querySelector('.highlightedChild');
    let pic=elm.querySelector('.floatingImg');

    let tl=gsap.timeline();
    tl.to(fade,{
        y:"-100px",
        opacity:0
    },'a')
    .to(highLight,{
        y:"100px",
        opacity:0
    },'a')
    .to(pic,{
        top:"100%",
        opacity:0
    },'a')
    
}
function elmEnter(elm){
    let fade=gsap.utils.toArray(elm.querySelectorAll('.faddedChild'));
    let highLight=elm.querySelector('.highlightedChild');
    let pic=elm.querySelector('.floatingImg');

    let tl=gsap.timeline();
    tl.to(fade,{
        y:0,
        opacity:1
    },'a')
    .to(highLight,{
        y:0,
        opacity:1
    },'a')
    .to(pic,{
        top:"50%",
        opacity:1
    },'a')
   
};
function strokVisible(elm){
    let fade=gsap.utils.toArray(elm.querySelectorAll('.faddedChild'));
    let highLight=elm.querySelector('.highlightedChild');
    let tl=gsap.timeline();
    // console.log(fade)
    tl.to(fade,{
        // webkitTextStroke:"1px solid #fff",
        color:"transparent",
        stroke:3,
        webkitTextStrokeWidth:1,
        webkitTextStrokeColor:'#D8C19A'
    },'a')
    .to(highLight,{
        color:"transparent",
        stroke:3,
        webkitTextStrokeWidth:1,
        webkitTextStrokeColor:'#D8C19A'
    },'a')

}
function strokHidden(elm){
    let fade=gsap.utils.toArray(elm.querySelectorAll('.faddedChild'));
    let highLight=elm.querySelector('.highlightedChild');
    let tl=gsap.timeline();
    tl.to(fade,{
        // webkitTextStroke:"1px solid #fff",
        color:"#D8C19A",
        stroke:3,
        webkitTextStrokeWidth:'.5px',
        webkitTextStrokeColor:'transparent'
    },'a')
    .to(highLight,{
        color:"#fff",
        stroke:3,
        webkitTextStrokeWidth:'.5px',
        webkitTextStrokeColor:'transparent'
    },'a')
   
}
let categories=document.querySelectorAll('#cList li');
let cards=document.querySelectorAll(".m-bg-txts");
for(let i=0;i<categories.length;i++){
    categories[i].addEventListener('mouseenter',()=>{
        prevRemove(cards[index])
        index=categories[i].dataset.index;
        setTimeout(()=>{
            elmEnter(cards[i])

        },500)

    })
    cards[i].querySelector('h1').addEventListener('mouseenter',()=>{
          strokVisible(cards[index])
        //   console.log('hello')
    })
    cards[i].querySelector('h1').addEventListener('mouseleave',()=>{
        strokHidden(cards[index])
      //   console.log('hello')
  })
 
}
