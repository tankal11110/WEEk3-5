(function(){
	if(!window.FileReader) return;

	var fileInput = document.querySelector("#fileInput"),
		fileArea = document.querySelector("#file__html"),
		copyArea = document.querySelector("#text_copy"),
		btn = document.querySelector("#btn_copy");

	
	function copyHTML(){
		var textarea = document.createElement("textarea");

		textarea.innerHTML = fileArea.innerHTML;
		textarea.className = "textarea"; 

		copyArea.appendChild(textarea);
		copyArea.style.display = "block";

		textarea.select();

	}

	function newHTML(someFile) {

        var converter = new showdown.Converter({
            noHeaderId: true
        });

        return converter.makeHtml(someFile);

    };

	function createHTML(someFile){
		var html = newHTML(someFile);
		
		fileArea.innerHTML = html;

		btn.style.display = "block";
		btn.onclick = copyHTML;
		
	}

	fileInput.addEventListener('change', function(e){

		var file = e.target.files[0];

		var reader = new FileReader();

		reader.onload = function(){
			createHTML(this.result);
		};

		reader.readAsText(file);
	}, false);

})();
