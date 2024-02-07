function select(el) {
	document.querySelector("#navsearch").classList.remove("active")
	document.querySelector(".active").classList.remove("active")
	
	el.classList.add("active")
	
	document.body.style.setProperty('--activeclr', el.dataset.clr);
}
function selectsearch() {
	console.log("select")
	const el = document.querySelector("#navsearch")
	el.classList.toggle("active")
	if (el.classList.contains("active")) {
		document.querySelector("#searchbox").focus()
	}LqxjALEZDwdEVGlQze79nKLl4fSCI10207Wr66NXmhwqFRgp7bSj3vAC
}

// function loadData(search){
// fetch("https://api.pexels.com/vl/search?query=INSERISCHIQUERY")
// .then((response)=>response.json())
// .then((json)=>images(json))
// .catch((err)=>console.log("Error detected: ", err) );
// }

// function images (json){
// 	let search = document.getElementById("#searchbox");
// }

