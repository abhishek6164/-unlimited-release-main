// GSAP ScrollTrigger aur Locomotive Scroll ka setup
function show() {
    gsap.registerPlugin(ScrollTrigger); // GSAP ke ScrollTrigger plugin ko register karna

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"), // Yeh wahi element hai jisme smooth scroll chahiye
        smooth: true // Smooth scroll on
    });

    locoScroll.on("scroll", ScrollTrigger.update); // Jab scroll ho, GSAP ko batao

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update()); // Refresh pe Locomotive update
    ScrollTrigger.refresh(); // ScrollTrigger ka internal refresh
}

show(); // Function ko call kar diya




// 🌪️ Bottle ko rotate karte jao scroll ke saath
gsap.to("#bottle", {
    rotate: -15, // Ghumana hai -15 deg
    scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main",
        start: "top 5%",   // Jab bottle top se 5% pe ho
        end: "top -416%",  // Jab bottle bahut upar chala jaye
        scrub: true,
        pin: true
    }
});

// 📏 Bottle ko chhota karna scroll pe
gsap.to("#bottle", {
    scale: 0.5, // Zoom out
    scrollTrigger: {
        trigger: "#page5 h1",
        scroller: "#main",
        start: "top 450%",
        end: "top -450%",
        scrub: true,
        pin: true
    }
});

// 🐶 Page load pe dog image animate
let t1 = gsap.timeline();

t1.from("#main #page1_dog_image", {
    opacity: 0,
    duration: 1,
    scale: 0.1
});

// 🥤 Page load pe bottle animate
t1.from("#bottle", {
    opacity: 0,
    duration: 1,
    scale: 0.2
});

// 🧭 Nav ke buttons animate
t1.from("#nav_top>button", {
    xPercent: 200,
    opacity: 0,
    duration: 0.8
});

// 👇 Page 2 ke button scroll pe animate
gsap.from("#page2_part1>button", {
    scrollTrigger: {
        trigger: "#page2_part1>button",
        scroller: "#main",
        start: "top 70%",
    },
    xPercent: -300,
    duration: 1,
    opacity: 0
});

// 👇 Page 6 ke button scroll pe right se aata hai
gsap.from("#page6_part6>button", {
    scrollTrigger: {
        trigger: "#page6_part6>button",
        scroller: "#main",
        start: "top 70%",
    },
    xPercent: 600,
    duration: 1,
    opacity: 0
});
