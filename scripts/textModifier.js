
function splitLines(container, opentag, closingtag) {
    var spans = container.children,
 top = 0,
 tmp = '';

container.innerHTML = container.textContent.replace(/\S+/g, '<n>$&</n>');    
for (let i = 0; i < spans.length; i++) {
 var rect = spans[i].getBoundingClientRect().top;
 if (top < rect){
    tmp += closingtag + opentag;
 }
 top = rect;
 tmp += spans[i].textContent + ' ';
}
container.innerHTML = tmp += closingtag;
}
let txtTags=document.getElementsByClassName('split-by-line');

export const splitByLine=()=>{
    for(let i=0;i<txtTags.length;i++){
    splitLines(txtTags[i], '<span class="a-parent"> <span class="a-child">','</span> </span>')
    }  
}


export const wrapTxt=()=>{
    let wrapTags=document.querySelectorAll(".m-txt-wrap");
    wrapTags.forEach((elm)=>{
        let txt=elm.textContent;
        elm.innerHTML=`<span class='a-parent'><span class='a-abs-child'></span> <span class='a-child'>${txt}</span></span>`;
    })
}

// export const wrapLetter=()=>{
//     let container
// }