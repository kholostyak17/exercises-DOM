window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	let select = document.querySelector("#mySelect").innerHTML;
	select =
		"<option value=" +
		countries[0].indexOf.toString +
		">" +
		countries[0] +
		"</option><option value=" +
		countries[1].indexOf.toString +
		">" +
		countries[1] +
		"</option><option value=" +
		countries[2].indexOf.toString +
		">" +
		countries[2] +
		"</option><option value=" +
		countries[3].indexOf.toString +
		">" +
		countries[3] +
		"</option><option value=" +
		countries[4].indexOf.toString +
		">" +
		countries[4] +
		"</option><option value=" +
		countries[5].indexOf.toString +
		">" +
		countries[5] +
		"</option><option value=" +
		countries[6].indexOf.toString +
		">" +
		countries[6] +
		"</option>";
};
