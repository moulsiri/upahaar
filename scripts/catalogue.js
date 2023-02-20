import gsap from 'gsap';

let toggle=false;
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
if(toggle){
    tl.reverse();
    toggle=!toggle;
}else{
    tl.play();
    toggle=!toggle;
}
})
let categories=document.querySelectorAll('#cList li');
for(let i=0;i<categories.length;i++){
    categories[i].addEventListener('mousemove',()=>{
        // console.log(categories[i].dataset.index)
    })
}