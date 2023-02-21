canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
img_width = 300;
img_height = 100;

var img_image;

var Img_imgTag;

img_x = 100;
img_y = 100;

function add() {
	Img_imgTag = new Image() //definindo uma variável com uma nova imagem???????
	Img_imgTag.onload = uploadimg(); // ajustando uma função, ao carregar essa variável?????
	Img_imgTag.src = img_image;   // carregar uma imagem???????
}

function uploadimg() {

	ctx.drawImage(Img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
		document.getElementById("d1").value = "Você pressionou uma Tecla alfabética";
		aplhabetkey()
	}

	else if ((keyPressed >= 48 && keyPressed <= 57)) {
		document.getElementById("d1").value = "Você pressionou um número";
		numberkey()
	}

	else if ((keyPressed >= 37 && keyPressed <= 40)) {
		document.getElementById("d1").value = "Você pressionou uma setinha";
		arrowkey()
	}

	else if ((keyPressed = 18, 19, 27)) {
		document.getElementById("d1").value = "Você pressionou uma tecla especial";
		specialkey()
	}


	else {
		otherkey();
		document.getElementById("d1").innerHTML = "Você pressionou um símbolo ou outra tecla";
	}
}

function aplhabetkey() {
	img_image = "alfabeto.png";
	add();
	console.log(my_keydown)
}
function numberkey() {
	img_image = "número.png";
	add();
}
function arrowkey() {
	img_image = "direcional.png";
	add();
}
function specialkey() {
	img_image = "especial.png";
	add();
}
function otherkey() {
	img_image = "outras.png";
	add();
}

