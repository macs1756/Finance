

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


