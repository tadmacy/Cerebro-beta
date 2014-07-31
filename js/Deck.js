//	Works with Flashcard.js to provide decks by type.

function Deck(type) {
	this.cardNum = 0;
	this.category = type;
	// Holds Flashcard objects
	this.cards = Array();
	// this.DEBUG = 10;
}

Deck.prototype.addCard = function(flashcardObj) {
//	if (this.DEBUG < 10) {
//	alert("addcard: len="+this.cards.length+"; content="+flashcardObj.getContentById(0));
//	}
//	this.DEBUG++;
	this.cards.push(flashcardObj);
}

Deck.prototype.getCard = function(cardNum) {
	if (cardNum < 0 || cardNum >= this.cards.length) {
		alert("cardNum ("+cardNum+") out of range (length="+this.cards.length+")");
	}
	return(this.cards[cardNum]);
}

Deck.prototype.getCategory = function() {
	return(this.category);
}

Deck.prototype.getIndexCurrent = function() {
	return(this.cardNum);
}

Deck.prototype.getIndexNext = function() {
	return(((this.cardNum + 1) < this.getSize()) ? ++this.cardNum : this.cardNum);
}

Deck.prototype.getIndexPrevious = function() {
	return(((this.cardNum - 1) >= 0) ? --this.cardNum : this.cardNum);
}

Deck.prototype.getNextCard = function() {
	if ((this.cardNum + 1) < this.cards.length) {
		return(this.cards[++this.cardNum]);
	}
	return(this.cards(this.cardNum));
}

Deck.prototype.getSize = function() {
	return(this.cards.length);
}

Deck.prototype.getType = function(flashcardObj) {
	return(this.getCategory(flashcardObj));
}

Deck.prototype.setIndexTo = function(index) {
	this.cardNum = index;
	return(this.cardNum);
}