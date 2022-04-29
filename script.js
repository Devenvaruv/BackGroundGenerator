var userColor = document.querySelector(".colorInput1");
var userColor2 = document.querySelector(".colorInput2");
var css = document.querySelector("h3");
var body = document.getElementById("chest");

setGradient = () => {
	body.style.background =
	"linear-gradient(to right, "
	+ userColor.value
	+ ", " 
	+ userColor2.value 
	+ ")";
}

userColor.addEventListener("input",setGradient)

userColor2.addEventListener("input",setGradient)
