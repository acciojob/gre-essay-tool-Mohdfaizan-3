//your code here
const textElement = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

textElement.addEventListener('input',(event)=>{
	let sentence = event.target.value;
	if(sentence.trim() === ""){
		h3Element.textContent = 0;
	}else{
	let count = sentence.trim().split(/\s+/).length;
	h3Element.textContent = count;
	}
	
	
})