function Toggler(selector){
	this._object = document.querySelector(selector);
	this._object.style.display = "none";
};

Toggler.prototype.getElem = function(){
	return this._object;
}

Toggler.prototype.show = function(){
	
	if (this._object.style.display === "none"){
		
		return this._object.style.display = "block";
	}
	return;
}


Toggler.prototype.hide = function(){
	if (this._object.style.display = "block"){
		return this._object.style.display = "none";
	}
	return;
}

var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);
