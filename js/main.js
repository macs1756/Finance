

const btnBurger = document.querySelector(".header__burger");
const contentBurger = document.querySelector(".burger__active");

btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("header__burger_close");
		contentBurger.classList.toggle("burger__open");
});


//initial list 




const initialList = document.querySelector(".search__bth-list");
const initialBtn = document.querySelector("#initialBtn");

initialBtn.addEventListener("click", click=>{
	initialList.classList.toggle("activeList");
	initialBtn.classList.toggle("btnBorder");
});

initialList.addEventListener("click", listClick=>{
	initialList.classList.remove("activeList");
	initialBtn.classList.remove("btnBorder");
});

//btn content

const listItem = document.querySelectorAll(".search__bth-list-item");


listItem.forEach(content=>{
	content.addEventListener("click", clickContent=>{
		initialBtn.innerHTML = content.innerHTML;

	});
});


	new Swiper(".swiper",{
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	autohight: true,
	pagination:{
		el: ".dots",
	},
	breakpoints: {
		20:{
			slidesPerView: 1,
		},
		600:{
			slidesPerView: 2,
		},
		992:{
			slidesPerView: 3,
			mousewheel:{
				eventsTarget: ".swiper-wrapper"
			},
			freeMode: true,
		},
	},
});