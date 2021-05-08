let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let myLi = document.createElement("li");
	myLi.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(myLi);
});
