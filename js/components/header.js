// =======  [ scroll Moving Header ] ======= 
// const header = document.querySelector(".header");
// const delta1 = 30;
// let lastScrollTop = 0;

// document.addEventListener("scroll", function(){
// 	scrollMovingHeader();
// });

// function scrollMovingHeader(){
// 	let scrollY = window.scrollY;
// 	if(scrollY > lastScrollTop + delta1) {
// 		header.classList.add("active");
// 	}else if (scrollY < lastScrollTop){
// 		header.classList.remove("active");
// 	}
// 	lastScrollTop = scrollY;
// }


// =======  [ nav Color Change ] ======= 
// Callback Function for run the code privetly and immediatly 

 	// Callback Function for run the code privetly and immediatly 

 	const section = document.querySelectorAll(".section"); 	// select the all section dom element
 	const sectionList = Array.from(section);// Made an array from the node list
 	const sectionObject = {}//store the section id and offset

 	sectionList.forEach(function (event) { //loop over array 
 		sectionObject[event.id] = event.offsetTop; 		//store the 
 	})

 	//addevent windows scroll event listener to body
 	window.addEventListener("scroll", function() {
 		const position = document.documentElement.scrollTop || document.body.scrollTop;// 스크롤 높이값 구하기

 		for (let i in sectionObject) {
 			if (sectionObject[i] <= position) {
 				document.querySelector(".nav-color-change .color").setAttribute("class", " ");
 				document.querySelector(".nav-color-change a[href*=" + i + "]").setAttribute("class", "color");
 			}
 		}
 	})