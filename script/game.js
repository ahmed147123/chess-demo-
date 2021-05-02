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

function initialPieces(place , sepSource) {

	var box = document.getElementsByClassName(place)
	var cImg = document.createElement("img");
	cImg.setAttribute("src",sepSource);
	cImg.setAttribute("pAwhite",false);
	cImg.classList.add("piece");
	box[0].appendChild(cImg);
}
for (var r = 1; r < 9; r++) {
	if (r === 1) {
		for (var c = 1; c < 9; c++) {
			initialPieces(`row-1 col-${c}`,`${apiecesW[c-1]}`)
		}
	}
	else if (r === 7){
		for (var c = 1; c < 9; c++) {
			initialPieces(`row-8 col-${c}`,`${apiecesB[c-1]}`)
		}
	}
	else if (r === 2){
		for (var c = 1; c < 9; c++) {
			initialPieces(`row-2 col-${c}`,`images/p1.png`)
		}
	}
	else if (r === 8){
		for (var c = 1; c < 9; c++) {
			initialPieces(`row-7 col-${c}`,`images/p2.png`)
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
			rank.setAttribute("pAwhite",false);
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
			rank.setAttribute("pAwhite",false);
			var contentSpan =document.createTextNode(`${r}`);
			rank.appendChild(contentSpan);
			oOitem[0].appendChild(rank);
		}
	}
})();

//make sure to try using query selectors for 
//the next two functions and see if it will make 
//the code easier?????



//change the view
function resetAs(condition) {
	//set the condition to true to get white view
	//set the condition to false to get the black view
		var outter = document.getElementsByClassName(`container`)
		
		outter[0].setAttribute("pAWhite",condition)
		
		var box = outter[0].children;
		for (var i = 0 ; i < box.length ; i++) {
			var applyOn = box[i].children;
			for (var c = 0; c < applyOn.length; c++) {
				if (applyOn[c].hasAttribute("pAWhite")) {
					applyOn[c].setAttribute("pAWhite",condition)
				}
			}
		}
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

// this function is for moveing pieces without using drag events


// (function () {
// 	var outter = document.getElementsByClassName("container")
// 	var holder = [];
// 	outter[0].addEventListener('mousedown',hamada );
// 	function hamada(e) {
// 		if (e.target.classList.contains("piece")) {
// 			// console.log (e.target.parentNode.classList)
// 			var locat = e.target.parentNode.classList;
// 			// console.log(locat)


// 			var opeOn = e.target;
			

			

// 			holder.push(opeOn)
// 			outter[0].removeEventListener('mousedown', hamada );
// 			outter[0].addEventListener('mouseup', haga );


		
// 		}	
// 	}	
// 	function haga(e) {
// 		if (e.target.classList.contains("piece")) {
// 			// console.log (e.target.parentNode.classList)
// 			var locat = e.target.parentNode.classList.value;
// 			// console.log(locat)

// 			var opeOn = document.getElementsByClassName(locat);
// 			// console.log(opeOn);
			
// 			var inOpeOn = e.target;
// 			// console.log(inOpeOn)
// 			opeOn[0].removeChild(inOpeOn);
// 			opeOn[0].appendChild(holder[0]);
// 			holder.splice(0,1);
// 			outter[0].removeEventListener('mouseup', haga );
// 			outter[0].addEventListener('mousedown',hamada );
// 			if(outter[0].classList.contains("asBlack")){
// 				resetAsBlack();

// 			}
// 			else{
// 			resetAsWhite();
				
// 			}
// 		}
		
// 		else if(e.target.classList.contains("item")){
// 			var locat = e.target.classList.value;
// 			// console.log(locat)
// 			var opeOn = document.getElementsByClassName(locat);
// 			opeOn[0].appendChild(holder[0]);
// 			holder.splice(0,1);
// 			outter[0].removeEventListener('mouseup', haga );
// 			outter[0].addEventListener('mousedown',hamada );
// 			if(outter[0].classList.contains("asBlack")){
// 				resetAsBlack();

// 			}
// 			else{
// 			resetAsWhite();
				
// 			}

// 		}		
	
// 	}

// })();



