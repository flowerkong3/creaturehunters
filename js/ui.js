// Header | scrollMovingHeader 
const header = document.querySelector(".header");
const delta = 30;
let lastScrollTop = 0;

document.addEventListener("scroll", function(){
	scrollMovingHeader();
});

function scrollMovingHeader(){
	let scrollY = window.scrollY;
	if(scrollY > lastScrollTop + delta) {
		header.classList.add("active");
	}else if (scrollY < lastScrollTop){
		header.classList.remove("active");
	}
	lastScrollTop = scrollY;
}

// Mobile Toggle Menu 
const hamburger = document.querySelector(".hamburger")
const gnb = document.querySelector(".gnb")
function toggleHamburger(){
	hamburger.classList.toggle("active");
	gnb.classList.toggle("active");
}

// Fade In
const fadeIn = document.querySelectorAll(".fade-in");
window.addEventListener("scroll",() => {
	let a = window.innerHeight / 5 * 4;
	fadeIn.forEach(fadeIns => {
		let b = fadeIns.getBoundingClientRect().top;
		if(b < a) {
			fadeIns.classList.add("show")
		}else {
			fadeIns.classList.remove("show");
		}
	})
})