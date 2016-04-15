//Check value of page
function onLoad() {
	if (localStorage.getItem("valve") == "1"){
		toFRC();
		}
	if (localStorage.getItem("valve") == "0"){
		toFTC();
		}
		}
//Set page to FTC
function toFTC() {
    var team = document.getElementsByClassName("team");
	team[1].style.display="none";
	team[0].style.display="initial";
    team[0].style.textIndent="initial";
	var e=document.getElementById("left");
		e.className="off";
	var e=document.getElementById("right");
		e.className="on";
		localStorage.setItem("valve", "0");
	document.title = "C5CC - FTC " + page;
}

//Set page to FRC
function toFRC() {
	var team = document.getElementsByClassName("team");
    team[0].style.display="none";
    team[1].style.display="initial";
    team[1].style.textIndent="initial";
	var e=document.getElementById("right");
		e.className="off";
	var e=document.getElementById("left");
		e.className="on";
		localStorage.setItem("valve", "1");
	document.title = "C5CC - FRC " + page;
}
