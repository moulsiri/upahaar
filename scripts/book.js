gsap.set(".a", { x: 30, y: 0 });
var tl = gsap.timeline();
tl
  // .to(".a",1,{
  //     x:-100,
  //     ease:Bounce
  // })
  .to("#cu", 2, {
    y: -50,
    opacity: 0,
    display: "none",
    // duration: ,
    delay: 0.7,
  })
  .to("#cre", 1, {
    display: "initial",
    opacity: 1,
  })
  .to("#cre", {
    y: -50,
    // display: "none",
    // y: -50,
    opacity: 0,
  })
  .to(
    "#page1",
    {
      top: "-110%",
      ease: Bounce,
      delay: 1,
    },
    "ok"
  )
  .to(
    "#page2",
    {
      top: "-100%",
      ease: Bounce,
      duration: 1,
      delay: 1,
    },
    "ok"
  )
  .to(
    "#main",
    {
      display: "none",
      duration: 1,
      delay: 1,
    },
    "ok"
  )
  .to("#page3", {
    width: "100%",
    ease: Bounce,
    duration: 1,
    // delay: 1,
  });

///////////////////////////////

var icon = document.querySelectorAll(".icon");
icon.forEach(function (val) {
  val.addEventListener("click", function (dets) {
    console.log(dets.target.src);
    document.querySelector("#overlay").style.display = "flex";
    document.querySelector("#overlay").style.width = "100%"
    document.getElementById("myImg").src = dets.target.src;

  });
});

document.querySelector("#second").addEventListener("click", function () {
  document.querySelector("#overlay").style.width = "0";
  document.querySelector("#overlay").style.display = "none";
});