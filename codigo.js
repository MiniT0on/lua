let game = document, Player = window;
let consejo = document.querySelector(".Sacha");
let tittlePage = "un cafesito con lua"
document.title = tittlePage;
let buttonArg = {
	Menu: document.querySelector('.menu'),
};

if (localStorage.getItem('MenuWOP') == 'si' ) {
	document.querySelector('.HerramientasToolBox').style.width = "15%";
	$(".botones").css('display', 'block');
	$(".Cartel").css('display', 'block');
}else{
	document.querySelector('.HerramientasToolBox').style.width = "0.1%";
	$(".botones").css('display', 'none');
	$(".Cartel").css('display', 'none');
};

const print = (Mensaje)=>{
	console.log(Mensaje);
};

let CodeBar = document.querySelector("#BuscarCode")

const Kick = function(){
	window.location.href = "https://www.roblox.com/library/" + CodeBar.value ;
};
var numeroRandom = 1;
let windowCrs = "1199";
let number = parseInt(windowCrs);
buttonArg["Menu"].onclick = function() {
	if ($(window).width() <= number) {

		if (numeroRandom == 1) {
			numeroRandom = 2;
			$(".Menu-Phone").css("display", "block");
			numeroRandom = 2;
		}else{
			$(".Menu-Phone").css("display", "none");
			numeroRandom = 1;
		}
	}else{
		if (localStorage.MenuWOP === 'si') {

			document.querySelector('.HerramientasToolBox').style.width = "0.1%";
			$(".botones").css('display', 'none');
			$(".Cartel").css('display', 'none');
			localStorage.setItem('MenuWOP', 'no');

		}else if (localStorage.MenuWOP === 'no'){

			localStorage.setItem('MenuWOP', 'si');
			document.querySelector('.HerramientasToolBox').style.width = "15%";
			$(".botones").css('display', 'block');
			$(".Cartel").css('display', 'block');

		};
	}
};
do{
	if (document.title == tittlePage) {
		document.querySelector('.LoadingFrame').remove();
		print('Se termino de cargar  correctamente los datos almacenados en la pagina.');
		break;
	};
}
while (document.title == tittlePage);

$(document).ready(function(){
	print('Termino de cargar el DOM!');
	$("#btnGame").click(function(){
		let caso = parseInt($("#BuscarCode").val(), 10);
		if (caso){
			print("Abandonando pagina");
			Kick();
		}else{
			alert("No es un numero lo que insertastes");
		};
	});
});

$(window).resize(()=>{
	if ($(window).width() <= number) {
		print(number);
	}else{
		$(".Menu-Phone").css("display", "none");
	};
});

$("#close").click(function(){
	$(".Menu-Phone").css("display", "none");
});

$(consejo).text("Post subidos");

$("#wideoURL").click(()=>{
	window.open("https://www.youtube.com/channel/UCvDGmkWohXcqaQMDw4qEdiA", "_blank");
});

$("#wideoURL2").click(function(){window.open("https://www.youtube.com/channel/UCvDGmkWohXcqaQMDw4qEdiA/videos", "_blank");});

$("#uno").click(function(){
	window.open("https://www.youtube.com/channel/UCvDGmkWohXcqaQMDw4qEdiA", "_blank");
});

$("#dos").click(function(){
	if (document.querySelector(".Handler").style.display == "block") {
		alert("Esta pagina ya esta abierta");
	}else{
		document.querySelector(".Handler").style.display = "block";
		document.querySelector(".Handler2").style.display = "none";
		$(consejo).text("Post subidos");
	};
});

$("#tres").click(function(){
	if (document.querySelector(".Handler2").style.display == "block") {
		alert("Esta pagina ya esta abierta");
	}else{
		document.querySelector(".Handler").style.display = "none";
		document.querySelector(".Handler2").style.display = "block";
		$(consejo).text("IDE subidas")
	};
});

// Esto es para el telefono :3

$("#PosRT").click(function(){
	if (document.querySelector(".Handler").style.display == "block") {
		alert("Esta pagina ya esta abierta");
	}else{
		document.querySelector(".Handler").style.display = "block";
		document.querySelector(".Handler2").style.display = "none";
		$(consejo).text("Post subidos");
		$(".Menu-Phone").css("display", "none");
	};
});

$("#IDEWE").click(function(){
	if (document.querySelector(".Handler2").style.display == "block") {
		alert("Esta pagina ya esta abierta");
	}else{
		document.querySelector(".Handler").style.display = "none";
		document.querySelector(".Handler2").style.display = "block";
		$(consejo).text("IDE subidas");
		$(".Menu-Phone").css("display", "none");
	};
}); 
