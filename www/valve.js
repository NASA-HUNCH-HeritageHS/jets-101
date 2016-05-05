//Check value of page
function onLoad() {
	if (localStorage.getItem("valve") == "4"){
		to4();
		}
	if (localStorage.getItem("valve") == "3"){
		to3();
		}
	if (localStorage.getItem("valve") == "2"){
		to2();
		}
	if (localStorage.getItem("valve") == "1"){
		to1();
		}
	if (localStorage.getItem("valve") == "0"){
		to0();
		}
	if (localStorage.getItem("valve") === null){
		to0();
		}
		}

function to0() {
    var graph = document.getElementsByClassName("Body");
	graph[0].style.display="initial";
	graph[1].style.display="none";
	graph[2].style.display="none";
	graph[3].style.display="none";
	graph[4].style.display="none";
	localStorage.setItem("valve", "0");
}
function to1() {
    var graph = document.getElementsByClassName("Body");
	graph[0].style.display="none";
	graph[1].style.display="initial";
	graph[2].style.display="none";
	graph[3].style.display="none";
	graph[4].style.display="none";
	localStorage.setItem("valve", "1");
}
function to2() {
    var graph = document.getElementsByClassName("Body");
	graph[0].style.display="none";
	graph[1].style.display="none";
	graph[2].style.display="initial";
	graph[3].style.display="none";
	graph[4].style.display="none";
	localStorage.setItem("valve", "2");
}
function to3() {
    var graph = document.getElementsByClassName("Body");
	graph[0].style.display="none";
	graph[1].style.display="none";
	graph[2].style.display="none";
	graph[3].style.display="initial";
	graph[4].style.display="none";
	localStorage.setItem("valve", "3");
}
function to4() {
    var graph = document.getElementsByClassName("Body");
	graph[0].style.display="none";
	graph[1].style.display="none";
	graph[2].style.display="none";
	graph[3].style.display="none";
	graph[4].style.display="initial";
	localStorage.setItem("valve", "4");
}
function prevG() {
	var valve = localStorage.getItem("valve");
	if(valve >= 1){
		valve--;
		localStorage.setItem("valve", valve);
		onLoad();
	}
}
function nextG() {
	var valve = localStorage.getItem("valve");
	if(valve <= 3){
		valve++;
		localStorage.setItem("valve", valve);
		onLoad();
	}
}