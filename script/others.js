
//initialization
//adding classes to the slider and its nav

(function () {
	var numImgs =[]
	var numSpans =[]
	var outter = document.getElementsByClassName("slid_content")[0];
	var outChild = outter.children
	for(var c = 0 ; c < outChild.length ; c++){
		if(outChild[c].classList[0] === "slider_item"){
			numImgs.push(outChild[c])
		}
	}
	var nav = document.getElementsByClassName("nav_slid");
	nav[0].addEventListener("click",controlSpan)
	outter.addEventListener("click",controlButton)
	
	for (var i = 0; i < numImgs.length; i++) {
	
		numImgs[i].classList.add(`slid${i+1}`)
		var item = document.createElement("span");
		item.classList.add(`sNavS`,`slid${i+1}`);
		// var contentSpan =document.createTextNode(`${i+1}`);
		// item.appendChild(contentSpan);
		nav[0].appendChild(item);
	}
	var sS = nav[0].children;
	for(var c = 0 ; c < sS.length ; c++){
		if(sS[c].classList[0] === "sNavS"){
			numSpans.push(sS[c])
		}
	}
	numImgs[0].classList.add(`show_slid`);
	numSpans[0].classList.add(`clicked`);

 window.slidsNum = numImgs;
 window.numSpans =numSpans;
})();
//end of initialization


//contorlling slider using the buttons on the slider
function controlButton(event){
		var goNav = document.getElementsByClassName("show_slid")[0];

		if (event.target.classList[0] === "go_right") {
			goRight();
		}
		else if(event.target.classList[0] === "go_left"){
			goLeft();
		}
		changeSpan();
}


//controling  slider using the span under the slider 
function controlSpan (event){
	if (event.target.classList[0] === "sNavS") {
		var current = document.getElementsByClassName("clicked")[0].classList[1].slice(4);
		var goal = event.target.classList[1].slice(4)
		if(goal > current){
			for(var i = 0; i < goal-current;i++){
				goRight();

			}
		}
		else{
			for(var i = 0; i < current-goal;i++){
				goLeft();
			}
		}
	}
	changeSpan();
}


//changing the highlighted span every time the slider
//is changed
function changeSpan() {
		for (var i = 0; i < numSpans.length; i++) {
			numSpans[i].classList.remove("clicked")
		}
		var cls = document.getElementsByClassName("show_slid")[0].classList[1];
		var goNav = document.getElementsByClassName(`sNavS ${cls}`)[0];
		goNav.classList.add("clicked")

}


//ordering the slids every time you go right 
function goRight() {
	var goNav = document.getElementsByClassName("show_slid")[0];
	if(goNav.nextElementSibling && goNav.nextElementSibling.classList[0] === "slider_item"){
		goNav.classList.remove("show_slid")
		goNav.classList.add("next_left")
		goNav.nextElementSibling.classList.add("show_slid")
	}
	else{
		goNav.classList.remove("show_slid")
		for(var i = 0 ; i < slidsNum.length ; i++){
			slidsNum[i].classList.remove("next_left")
		}
		slidsNum[0].classList.add("show_slid")

	}

}


//ordering the slids every time you go left
function goLeft() {
	var goNav = document.getElementsByClassName("show_slid")[0];
	if(goNav.previousElementSibling && goNav.previousElementSibling.classList[0] === "slider_item"){
		goNav.classList.remove("show_slid")
		goNav.previousElementSibling.classList.remove("next_left")
		goNav.previousElementSibling.classList.add("show_slid")

	}
	else{
		goNav.classList.remove("show_slid")
		slidsNum[slidsNum.length-1].classList.add("show_slid")
		for(var i = 0 ; i < slidsNum.length-1 ; i++){
			slidsNum[i].classList.add("next_left")
		}
	}
}



//*************** pls check why the next function has a problem


// function replace(event){
// 		var goNav = document.getElementsByClassName("show_slid")[0];

// 		if (event.target.classList[0] === "go_right") {
// 				if(goNav.nextElementSibling && goNav.nextElementSibling.classList[0] === "slider_item"){
// 					goNav.classList.remove("show_slid")
// 					goNav.classList.add("next_left")
// 					goNav.nextElementSibling.classList.add("show_slid")
// 				}
// 				else{
// 					goNav.classList.remove("show_slid")
// 					var reset = document.getElementsByClassName("next_left")
// 					for(var i = 0 ; i < reset.length ; i++){
// 						reset[i].classList.remove("next_left")
// 					}
// 					slidsNum[0].classList.add("show_slid")

// 				}
// 		}
// 		else if(event.target.classList[0] === "go_left"){

// 		}
// }


