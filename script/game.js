//creating the board and inserting the global classes
// function domOperations(cls,element,newCls) {
// 	var totalClass ="";
// 	for(var a = 0 ; a < cls.length ;a++){
// 		 totalClass = totalClass + `${cls[a]}`
// 	};
// 	var opOn = document.getElementsByClassName(totalClass);
// 	var item = document.createElement(element);
// 	for(var i = 0;i < newCls.length ; i++){
// 		item.classList.add(newCls[i]);
// 	};
// 	opOn[0].appendChild(item);
// }

(function () {

	var outterB = document.getElementsByClassName("container")
	
	for (var r = 1; r < 9; r++) {
			for (var c = 1; c < 9; c++) {

				if ((r%2 === 1 && c%2 === 1)||(r%2 !== 1 && c%2 !== 1)) {
					var item = document.createElement("div");
					item.classList.add(`item`,`row-${r}`,`col-${c}`);
					outterB[0].appendChild(item);
					// domOperations(["container"],"div",["item",`row-${r}`,`col-${c}`])
				} else {
					var item = document.createElement("div");
					item.classList.add(`item`,`black`, `row-${r}`,`col-${c}`);
					outterB[0].appendChild(item);
					// domOperations(["container"],"div",["item","black",`row-${r}`,`col-${c}`])	
				}
			}
	};


})();
//adding  piceses in the initial position first solution 

(function(){
var apiecesW = [
 "images/r1.png","images/h1.png","images/b1.png","images/k1.png",
 "images/q1.png","images/b1.png","images/h1.png","images/r1.png",
];
var apiecesB = [
 "images/r2.png","images/h2.png","images/b2.png","images/k2.png",
 "images/q2.png","images/b2.png","images/h2.png","images/r2.png",
];

for (var r = 1; r < 9; r++) {
	if (r === 1) {
		for (var c = 1; c < 9; c++) {
		 	initialWS = document.getElementsByClassName(`row-1 col-${c}`)
 			var pieceWS = document.createElement("img");
			pieceWS.setAttribute("src",`${apiecesW[c-1]}`);
			initialWS[0].appendChild(pieceWS);
		}
	}
	else if (r === 7){
		for (var c = 1; c < 9; c++) {
		 	initialBS = document.getElementsByClassName(`row-8 col-${c}`)
 			var pieceBS = document.createElement("img");
			pieceBS.setAttribute("src",`${apiecesB[c-1]}`);
			initialBS[0].appendChild(pieceBS);
		}
	}
	else if (r === 2){
		for (var c = 1; c < 9; c++) {
		 	initialPS = document.getElementsByClassName(`row-2 col-${c}`)
			var piecePS = document.createElement("img");
			piecePS.setAttribute("src",`images/p1.png`);
			initialPS[0].appendChild(piecePS);
		}

	}
	else if (r === 8){
		for (var c = 1; c < 9; c++) {
		 	initialPSB = document.getElementsByClassName(`row-7 col-${c}`)
 			var piecePSB = document.createElement("img");
			piecePSB.setAttribute("src",`images/p2.png`);
			initialPSB[0].appendChild(piecePSB);
		}
	}
		
}

})();
//adding ranks for columns
(function (){
	var columnIt = ["h","g","f","e","d","c","b","a"]
	for (var r = 1; r < 9; r+=7) {
		for (var c = 1; c < 9; c++) {
			var oOitem = document.getElementsByClassName(`row-${r} col-${c}`);
			var rank = document.createElement("span");
			rank.setAttribute("class","cR");
			var contentSpan =document.createTextNode(`${columnIt[c-1]}`);
			rank.appendChild(contentSpan);
			oOitem[0].appendChild(rank);
		}
	}
})();
//adding ranks for rows
(function () {
	for (var c = 1; c < 9; c+=7) {
		for (var r = 1; r < 9; r++) {
			var oOitem = document.getElementsByClassName(`row-${r} col-${c}`);
			var rank = document.createElement("span");
			rank.setAttribute("class","rR");
			var contentSpan =document.createTextNode(`${r}`);
			rank.appendChild(contentSpan);
			oOitem[0].appendChild(rank);
		}
	}
})();

(function () {
	var outter = document.getElementsByClassName("container")
	var holder = [];
	outter[0].addEventListener('mousedown',hamada );
	function hamada(e) {
		var lala = e.target.nodeName;
		console.log(lala);
		if (lala === "IMG") {
			console.log (e.target.parentNode.classList)
			var locat = e.target.parentNode.classList.value;
			console.log(locat)

			var opeOn = document.getElementsByClassName(locat);
			console.log(opeOn)
			
			var inOpeOn = opeOn[0].firstChild;
			console.log(inOpeOn)
			holder.push(inOpeOn)
			outter[0].addEventListener('mouseup', haga );
		}		
		function haga(e) {
			var man = e.target.nodeName;
			if (man === "IMG") {
				console.log (e.target.parentNode.classList)
				var locat = e.target.parentNode.classList.value;
				console.log(locat)

				var opeOn = document.getElementsByClassName(locat);
				console.log(opeOn);
				
				var inOpeOn = opeOn[0].firstChild;
				console.log(inOpeOn)
				opeOn[0].removeChild(inOpeOn);
				opeOn[0].appendChild(holder[0]);
				holder.splice(0,1);
				outter[0].removeEventListener('mouseup', haga );
			}
			else if(man === "DIV"){
				var locat = e.target.classList.value;
				console.log(locat)
				var opeOn = document.getElementsByClassName(locat);
				opeOn[0].appendChild(holder[0]);
				holder.splice(0,1);
				outter[0].removeEventListener('mouseup', haga );
			}		
		}
	}
})();




//make sure to try using query selectors for 
//the next two functions and see if it will make 
//the code easier?????



//starting the game as white
function resetAsWhite() {
		
		resettingWC = document.getElementsByClassName(`container`)
		if (resettingWC[0].classList.contains("asBlack")) {
		resettingWC[0].classList.remove("asBlack")
		}
		resettingW = document.getElementsByClassName(`item`)
		for (var i = 0 ; i < resettingW.length ; i++) {
			cilderens = resettingW[i].children
			for (var c = 0 ; c < cilderens.length ;c++){
				if (cilderens[c].classList.contains("asBlack")) {
					cilderens[c].classList.remove("asBlack")
				}
			}
		}
}
//starting the game as black
function resetAsBlack() {
		resettingBC = document.getElementsByClassName(`container`)
		if (!(resettingBC[0].classList.contains("asBlack"))) {
		resettingBC[0].classList.add("asBlack")
		}
		resettingB = document.getElementsByClassName(`item`)
		for (var i = 0 ; i < resettingB.length ; i++) {
			cilderens = resettingB[i].children
			for (var c = 0 ; c < cilderens.length ;c++){
				if (!(cilderens[c].classList.contains("asBlack"))) {
					cilderens[c].classList.add("asBlack")
				}
			}
		}
}




//getting the width of the item should run 
//when the page loads and when resizing the browser
// add the (resize) event
function getwidth (){
		var item = document.getElementsByClassName(`row-1 col-1`);
		var obj = item[0].getBoundingClientRect();
		var itemWidth = obj.width
		return itemWidth;
};
var unit = getwidth();
var disCol = [0,unit,(2*unit),(3*unit),(4*unit),(5*unit)
				,(6*unit),(7*unit),(8*unit),(9*unit)]

var disRow = [0,unit,(2*unit),(3*unit),(4*unit),(5*unit)
				,(6*unit),(7*unit),(8*unit),(9*unit)]


//getting which box did the pointer click on 
//takes the clientX and clientY of the pointer onMouseDown
//or onMouseUp
function loacate (x,y){
disCol.push(x);
disRowow.push(y);
disCol.sort();
disRow.sort();
var col = disCol.indexOf(x);
var row = disRow.indexOf(y);
return col ,row ;	
}



// function locate (x,y) {
// 	var location = {
// 		col:
// 		,row
// 	};
// 	for (var i = 0; i < 2; i++) {
// 			if (location[i] < (4 * unit)) {
// 				if (location[i] < (2 * unit)) {
// 					if (location[i] < (1 * unit)) {
// 						col = 1;
// 					}
// 					else{
// 						col = 2;
// 					}
// 				else{
// 					if (location[i] < ( 3 * unit)) {
// 						col = 3;
// 					}
// 					else{
// 						col = 4;
// 					}
// 				}
// 			}
// 			else {
// 				if (location[i] < (6 * unit)) {
// 					if (location[i] < (5 * unit)) {
// 						col = 5;					
// 					}
// 					else {
// 						col = 6;
// 					}		
// 				}
// 				else {
// 					if (location[i] < (7 * unit)) {
// 					col = 7 ;
// 					}
// 					else{
// 					col = 8 ;	
// 					}					
// 				}

// 			}
// 		}	
// }
//adding piceses in the initial position second solution

// (function(){

//  var pieces = {
//  	pawn:{
//  		black:{
//  			source:"images/p2.png",
//  			position:{
//  				row:[7,7,7,7,7,7,7,7],
//  				col:[1,2,3,4,5,6,7,8]
//  			}
//  		},
//  		white:{
//  			source:"images/p1.png",
//  			position:{
//  				row:[2,2,2,2,2,2,2,2],
//  				col:[1,2,3,4,5,6,7,8]
//  			}
//  		}
//  	},
//  	bishob:{
//  		black:{
//  			source:"images/b2.png",
//  			position:{
//  				row:[8,8],
//  				col:[3,6]
//  			}
//  		},
//  		white:{
//  			source:"images/b1.png",
//  			position:{
//  				row:[1,1],
//  				col:[3,6]
//  			}
//  		}
//  	},
//  	knight:{
//  		black:{
//  			source:"images/h2.png",
//  			position:{
//  				row:[8,8],
//  				col:[2,7]
//  			}
//  		},
//  		white:{
//  			source:"images/h1.png",
//  			position:{
//  				row:[1,1],
//  				col:[2,7]
//  			}
//  		}
//  	},
//  	rook:{
//  		black:{
//  			source:"images/r2.png",
//  			position:{
//  				row:[8,8],
//  				col:[1,8]
//  			}
//  		},
//  		white:{
//  			source:"images/r1.png",
//  			position:{
//  				row:[1,1],
//  				col:[1,8]
//  			}
//  		}
//  	},
//  	queen:{
//  		black:{
//  			source:"images/q2.png",
//  			position:{
//  				row:[8],
//  				col:[5]
//  			}
//  		},
//  		white:{
//  			source:"images/q1.png",
//  			position:{
//  				row:[1],
//  				col:[5]
//  			}
//  		}
//  	},
//  	king:{
//  		black:{
//  			source:"images/k2.png",
//  			position:{
//  				row:[8],
//  				col:[4]
//  			}
//  		},
//  		white:{
//  			source:"images/k1.png",
//  			position:{
//  				row:[1],
//  				col:[4]
//  			}
//  		}
// 	}
// };

// for (var piece in pieces) {
// 		var numberOfPositions = pieces[piece].black.position.row.length;
// 		for (var color in pieces[piece]){
// 			for (var i = 0; i < numberOfPositions; i++)  {
// 				var initialP = document.getElementsByClassName(`row-${pieces[piece][color].position.row[i]} col-${pieces[piece][color].position.col[i]}`)
// 				var pPic = document.createElement("img");
// 				pPic.setAttribute("src",`${pieces[piece][color].source}`);
// 				initialP[0].appendChild(pPic);
// 			}
// 		}

// 	}
// })();

// adding pieces function second solution:


// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }
		// resettingW = document.getElementsByClassName(`item`)
		// 	cilderens = resettingW[0].children
		// 	console.log(cilderens[0]);

		// for (var c = 1; c < 9; c++) {
	// 	initialBo1 = document.getElementsByClassName(`row-2 col-${c}`)
	// 	var pieceBo1 = document.createElement("img");
	// 	pieceBo1.setAttribute("src","images/bo1.png")
	// 	initialBo1[0].appendChild(pieceBo1);

	// 	initialBo2 = document.getElementsByClassName(`row-7 col-${c}`)
	// 	var pieceBo2 = document.createElement("img");
	// 	pieceBo2.setAttribute("src","images/bh3.png")
	// 	initialBo2[0].appendChild(pieceBo2);

	// }
