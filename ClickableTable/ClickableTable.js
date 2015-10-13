var changeStyle = function () {
	this.classList.toggle('clicked');
}

var tds = document.querySelectorAll('td');

for (var i = 0, length = tds.length; i < length; i++) {
	tds[i].addEventListener('click', chantyle );
}


// class that creates corousel
// events, keypress, *longkeypress
// parameters items[], viewport, itemwidth, *cyclic, conteiner[dom nod, i.e target div node]

//div with 3 visible elements, i.e.viewport = 3 
//class gets array items *for example read from json file
//change selection and if needed shift elements on click 

//selection : border for selected element

// till tuesday