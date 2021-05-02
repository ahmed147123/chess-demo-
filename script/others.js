//use this function every time u change the slidNum
function givingThePos() {
		for (var i = 0; i < slidsNum.length; i++) {
			var pos = slidsNum[i].getAttribute('slidNum')
			if(pos === "1"){
				slidsNum[i].setAttribute('slidPos',`1`)
			}
			else if(pos === `${slidsNum.length}`){
				slidsNum[i].setAttribute('slidPos',`5`)
			}
			else if(pos === `${slidsNum.length-1}`){
				slidsNum[i].setAttribute('slidPos',`4`)
			}
			else if(pos !== `2`){
				slidsNum[i].setAttribute('slidPos',`3`)
			}
			else {
				slidsNum[i].setAttribute('slidPos','2')

			}		
		
	}
}
//initialization
//adding classes to the slider and its nav
 

// $%%^$^$^^$^$^ impotant note $%^#$^$#%#$^%^#$^
//	you don't need to use slidNum slidPos to dispaly the slider
//   this way you can use only one index but you have to use css variables
//    of use javascript to style the slider don't forget to try this.

(function () {
	var spanArr = [];
	var slidsNum =[];
	var section = document.getElementsByClassName("slider")[0];
	var outter = document.getElementsByClassName("slid_content")[0];
	var spanOut = document.getElementsByClassName("nav_slid")[0];

	var outChild = outter.children
	for(var c = 0 ; c < outChild.length ; c++){
		if(outChild[c].classList[0] === "slider_item"){
			slidsNum.push(outChild[c])
		}
	}
	for (var i = 0; i < slidsNum.length; i++) {
		var cSpan =document.createElement("span");
		cSpan.setAttribute('spanUp',`${i}`);
		cSpan.classList.add('sNavS');
		spanArr.push(cSpan);
		spanOut.appendChild(cSpan);
	}
	spanOut.addEventListener("click",controlSpan)
	section.addEventListener("click",controlButton)
		
	
window.spanArr = spanArr;
window.slidsNum = slidsNum;
givingThePos();

})();
//end of initialization

//ordering the slids every time you go right 
function goRight() {
	for (var i = 0; i < slidsNum.length; i++) {
		var prev = slidsNum[i].getAttribute('slidNum')
		var preToInt = parseInt(prev);
		if (preToInt === 1) {
			slidsNum[i].setAttribute('slidNum',`${slidsNum.length}`)
		}
		else{
			slidsNum[i].setAttribute('slidNum',`${preToInt-1}`)
		}
	}
givingThePos();
changeSpan("right");

}


//ordering the slids every time you go left
function goLeft() {
	for (var i = 0; i < slidsNum.length; i++) {
		var prev = slidsNum[i].getAttribute('slidNum')
		var preToInt = parseInt(prev);
		if (preToInt === slidsNum.length) {
			slidsNum[i].setAttribute('slidNum',`1`)
		}
		else{
			slidsNum[i].setAttribute('slidNum',`${preToInt+1}`)
		}
	}
	givingThePos();
	changeSpan("left");

}


//contorlling slider using the buttons on the slider
function controlButton(event){

		if (event.target.classList[0] === "go_right") {
			goRight();
		}
		else if(event.target.classList[0] === "go_left"){
			goLeft();
		}
}
//change span with the change of the slid
function changeSpan(direct) {
	if (direct === "right") {
		for (var i = 0; i < spanArr.length; i++) {
			var prev = spanArr[i].getAttribute('spanUp')
			var preToInt = parseInt(prev);
			if (preToInt === 0) {
				spanArr[i].setAttribute('spanUp',`${spanArr.length-1}`)
			}
			else{
				spanArr[i].setAttribute('spanUp',`${preToInt-1}`)
			}
		}

	}
	else if(direct === "left"){
		for (var i = 0; i < spanArr.length; i++) {
			var prev = spanArr[i].getAttribute('spanUp')
			var preToInt = parseInt(prev);
			if (preToInt === spanArr.length-1) {
				spanArr[i].setAttribute('spanUp',`0`)
			}
			else{
				spanArr[i].setAttribute('spanUp',`${preToInt+1}`)
			}
		}

	}
}
function controlSpan (event){
	if (event.target.classList[0] === "sNavS") {
		var goal = event.target.getAttribute('spanUp');

		if(goal > 0){
			for(var i = 0; i < goal;i++){
				goRight();

			}
		}
}}

(function () {
	var dragged;
	const haha = document.getElementsByClassName('test')[0];
	// haha.addEventListener('dragstart',start);
	// haha.addEventListener('dragend',end);
	haha.addEventListener("drag", function(event) {

}, false);

haha.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.background = event.target.src;
}, false);

haha.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
haha.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

haha.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.style.background = "purple";
  }

}, false);

haha.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.style.background = "";
  }

}, false);

haha.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

})();






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
//********************************************************************
