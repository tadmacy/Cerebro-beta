// For quizor
//
// Class to holds a multisided flash card...
//	May move to AJAX for speed?

function Flashcard(node) {
	this.NOUN  = 0;
	this.VERB  = 1;
	this.VOCAB = 2;
	// Card's content by sides
	this.content = Array();
	this.category = "";
	// Each side has a "name", e.g., "side1", "side2", etc.
	//this.sideNames = Array();
	this.init(node);
}


Flashcard.prototype.init = function(node) {
	this.sideElem = node.getElementsByTagName("side");
	//alert(this.sideElem[0].childNodes[0].nodeValue);
	
	for (var i = 0; i < this.sideElem.length; i++) {
		if (i < this.sideElem.length) {
			this.content[i] = this.sideElem[i].childNodes[0].nodeValue;
		}
		//alert("content:"+this.content[i]);
	}
	
	// Type is VOCAB unless found VOCABwise
	this.category = this.VOCAB;
	
	if (this.sideElem.length == 3) {
	    //alert("len:"+this.sideElem.length+"; string="+this.sideElem[2].childNodes[0].nodeValue.substr(0, 2)+";");
		if (this.sideElem[2].childNodes[0].nodeValue.substr(0, 3) == "to ") {
	    	//alert("category set to VERB");
			this.category = this.VERB;
		} else {
			this.category = this.NOUN;
	    	//alert("category set to NOUN");
		}
	    //alert("category set to:"+this.category);
	}
}


//Flashcard.prototype.NOUN = function() {
//	return (this.NOUN);
//}


//Flashcard.prototype.VOCAB = function() {
//	return (this.VOCAB);
//}


//Flashcard.prototype.VERB = function() {
//	return (this.VERB);
//}


Flashcard.prototype.getCategory = function() {
	return (this.category);
}


Flashcard.prototype.getContentById = function(sideId) {
	return (sideId < this.content.length) ? this.content[sideId] : "";
}

//Flashcard.prototype.getContentByName = function(sideName) {
//	return(this.content[this.sideNames[sideName]]);
//}

Flashcard.prototype.getNumberOfSides = function() {
	return(this.content.length);
}


Flashcard.prototype.isType = function(type) {
	return ((type == this.category) ? true : false);
}


Flashcard.prototype.setContentById = function(sideId, str) {
	this.content[sideId] = str;
}

//Flashcard.prototype.setContentByName = function(sideName) {
//	this.content[sideName] = str;
//}