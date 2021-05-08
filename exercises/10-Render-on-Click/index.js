let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let myDiv = document.createElement("div");
	myDiv.style.background = "yellow";
	myDiv.innerHTML = "Hello World";
	document.querySelector("body").appendChild(myDiv);
});
