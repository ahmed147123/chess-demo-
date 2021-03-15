//htmldocument ????????
//document.addEventListener("DOMContentLoaded",function) 
// allow you to but the java script on the head of 
//the html page
// .textContent
// .innerHTML
// .querySelector 
/*

				Events
you can place it on the html tags dierctly but it's not recommended
the better way:
			 Unobsrusive event binding 
	.addEventListener("click", function)
onther way
	(.onclick) added to the document.(getElementById/querySelector)



					DOM
	***choosing elements****
	.getElementById()
	.getElementsByTagName()
	.getElementsByClassName()
	.querySelectorAll()
	.creatElement()
	.creatTextNode()
	=========================
	.title ==> page title
	.image ==> all the images in the page 
	.forms ==> all the forms form the page
	.body
	.getAttributr
	.setAttribute
	.hasAttribute boolean 
	.removeAttribute
	.classlList{
		.contains
		.item
		.add
		.remove
		.toggle
	}
	============================================
	.children{
		.childElementCount
		.firstElementChild
		.secondElementChild
	}
	.childNodes
	.appendChild
	.insertBefore
	.insertAfter
	.removeChild
	***note the difference between childElement and
	***the childNodes 
	=============================================
	********** nodes *********
	.nodeName
	.tageName
	.nodeValue
	.nodeType --- comment: 8  element :1 text: 3 
							  attribute: 2
	=============================================
	*******cloneing elements********

	.cloneNode(false by defualt) if it's true the element 
								 with it's content will be
								 cloned. if it's false only 
								 the element with it's attribute
								 will be cloned.
	================================================
	 .parentElement
	 .parentNode 
	===============================================
	.nextSibling  oR previousSibling
	.nextElementSibling
	=====================================
	.focus()
	.blur()
	.click()
   	====================================
   	.clientHeight /.clientWidth
  			viewable area : including padding
  							no border
  							no margin 
  							no scroll
	=======================================
	.scorllHeight / .scrollWidth
			viewable area : including padding 
  							no border
  							no margin 
  							yes scroll and invisable area
	=======================================
	.offsetHeight / .offsetWidth
			viewable area : including padding 
  							yes border
  							no margin 
  							yes scroll and invisable area
	========================================
	.clientLeft / .clientTop
		calculates the border in px
	========================================
	.scrollLeft / .scrollTop
	========================================
	elemetnt.style.property = "value";
	========================================
	****Document *****
	.inputEncoding (utf-8)
	.lastModified
	.URL
	=================================
	*****  on  *********
	.onclick
	.onload
	.onscroll
	.onresize
	.onfocus
	.onblur
	.onsubmit 
					


*/
