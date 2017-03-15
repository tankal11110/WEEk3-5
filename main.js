if (!String.prototype.repeatt){
	
	String.prototype.repeatt = function(count){
		
		var new_line = this + " ";
		
		for(var i = 1; i < count; i++){
			new_line += this + " ";
		}
		return new_line;
	}
}
