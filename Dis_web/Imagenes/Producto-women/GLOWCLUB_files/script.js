const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const contenedor = document.getElementById('contenedor');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

open.addEventListener("click", () => {
  nav.classList.add("visible");
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
  open.style.display = "block";
  close.style.display = "none";
});

const sr = ScrollReveal ({
	distane: '65px' ,
	duration:2600,
	delay:450,
	reset: true,
});
sr.reveal('.hero-seccion',{delay:200, origin:'top'});

const sr = ScrollReveal ({
	distane: '65px' ,
	duration:2600,
	delay:450,
	reset: true,
});
sr.reveal('.inicio-women',{delay:200, origin:'top'});

const sr = ScrollReveal ({
	distane: '65px' ,
	duration:2600,
	delay:450,
	reset: true,
});
sr.reveal('.inicio-men',{delay:200, origin:'top'});

const sr = ScrollReveal ({
	distane: '65px' ,
	duration:2600,
	delay:450,
	reset: true,
});
sr.reveal('.inicio-accesories',{delay:200, origin:'top'});
								   // JavaScript Document




let skewSetter = gsap.quickTo("img", "skewY"), // fast
	  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

ScrollSmoother.create({
	wrapper: "#wrapper",
	content: "#content",
	smooth: 2,
  speed: 3,
	effects: true,
	onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
	onStop: () => skewSetter(0)
});


// 💚 This just adds the GSAP link to this pen, don't copy this bit
import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js"
new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollSmoother/"});
// 💚 Happy tweening!


