function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    
    if (sidebar.style.width === "500px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "500px";
    }
}
toggleMenu()
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("sidebar").style.width = "0";
});


function capsule() {
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top top",
            scrub:2,
            pin:true
        }
    })
    tl
    .to("#navbar",{
        top:"-20%"
    },"a")
    
    .to("#capsule",{
        bottom:"0%"
    },"a")
    
    .from("#c1",{
        top: "18%",
        left: "0%",
    },"a")
    .from("#c2",{
        top: "38%",
        left: "5%",
    
    },"a")
    .from("#c3",{
        top: "55%",
        left: "5%",
    
    },"a")
    .from("#c4",{
        top: "5%",
        left: "17%",
    
    },"a")
    
    .from("#c5",{
        top: "17%",
        left: "26%",
    
    },"a")
    .from("#c6",{
        top: "35%",
        left: "19.5%",
    
    },"a")
    .from("#c7",{
        top: "57%",
        left: "25%",
    
    },"a")
    .from("#c8",{
        top: "5%",
        left: "36%",
    
    },"a")
    .from("#c10",{
        top: "30%",
        left: "61%",
    
    },"a")
    .from("#c11",{
        top: "52%",
        left: "64.5%",
    
    },"a")
    .from("#c12",{
        top: "70%",
        left: "43%",
    
    },"a")
    .from("#c13",{
        top: "6%",
        left: "70%",
    
    },"a")
    .from("#c14",{
        top: "21%",
        left: "78%",
    
    },"a")
    .from("#c15",{
        top: "46%",
        left: "78%",
    
    },"a")
    .from("#c16",{
        top: "67%",
        left: "80%",
    
    },"a")
    .from("#c17",{
        top: "55%",
        left: "90%",
    
    },"a")
     
}
capsule()

function load() {
    var h1 = document.querySelector("#loader h1")
    var num = 0
    setInterval(() => {
        num++
        var val = num + Math.floor(Math.random()*10)
        h1.textContent = `${val}%`
        if (val < 100) {
            h1.textContent = `${val}%`
        }else{
        h1.textContent = "100%"
        }
    }, 20);  
}

var vid = document.querySelector("#page1 video")
vid.pause()
var tl = gsap.timeline()
tl
.to("#loader",{
    onStart:load(),
    opacity:0,
    delay:3,
    onComplete:function(){
    vid.play()
    }
})
.from("#page1 h1",{
    y:120,
    duration:0.8,
    stagger:0.3,
    delay:2
})
.from("#page1 svg",{
    opacity:0,

})

gsap.to("#page3 #yellow",{
    top:"-5%",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        scrub:2
    }
})



function  canvas() {
    
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./canvas/egg1.jpeg
  ./canvas/egg2.jpeg
  ./canvas/egg3.jpeg
  ./canvas/egg4.jpeg
  ./canvas/egg5.jpeg
  ./canvas/egg6.jpeg
  ./canvas/egg7.jpeg
  ./canvas/egg8.jpeg
  ./canvas/egg9.jpeg
  ./canvas/egg10.jpeg
  ./canvas/egg11.jpeg
  ./canvas/egg12.jpeg
  ./canvas/egg13.jpeg
  ./canvas/egg14.jpeg
  ./canvas/egg15.jpeg
  ./canvas/egg16.jpeg
  ./canvas/egg17.jpeg
  ./canvas/egg18.jpeg
  ./canvas/egg19.jpeg
  ./canvas/egg20.jpeg
  ./canvas/egg21.jpeg
  ./canvas/egg22.jpeg
  ./canvas/egg23.jpeg
  ./canvas/egg24.jpeg
  ./canvas/egg25.jpeg
  ./canvas/egg26.jpeg
  ./canvas/egg27.jpeg
  ./canvas/egg28.jpeg
  ./canvas/egg29.jpeg
  ./canvas/egg30.jpeg
  ./canvas/egg31.jpeg
  ./canvas/egg32.jpeg
  ./canvas/egg33.jpeg
  ./canvas/egg34.jpeg
  ./canvas/egg35.jpeg
  ./canvas/egg36.jpeg
  ./canvas/egg37.jpeg
  ./canvas/egg38.jpeg
  ./canvas/egg39.jpeg
  ./canvas/egg40.jpeg
  ./canvas/egg41.jpeg
  ./canvas/egg42.jpeg
  ./canvas/egg43.jpeg
  ./canvas/egg44.jpeg
  ./canvas/egg45.jpeg
  ./canvas/egg46.jpeg
  ./canvas/egg47.jpeg
  ./canvas/egg48.jpeg
  ./canvas/egg49.jpeg
  ./canvas/egg50.jpeg
  ./canvas/egg51.jpeg
  ./canvas/egg52.jpeg
  ./canvas/egg53.jpeg
  ./canvas/egg54.jpeg
  ./canvas/egg55.jpeg
  ./canvas/egg56.jpeg
  ./canvas/egg57.jpeg
  ./canvas/egg58.jpeg
  ./canvas/egg59.jpeg
  ./canvas/egg60.jpeg
 `;
  return data.split("\n")[index];
}
const frameCount = 60;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

var tl2 = gsap.timeline(({
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page4>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
        // markers:true,
      }
}))
tl2
.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  onUpdate: render,
})
.to("footer",{
    top:"-20vh",
    duration:.5
})

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page4",
  pin: true,
//   markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});

}

canvas()