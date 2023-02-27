//your code here
const textElement = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

textElement.addEventListener('input',(event)=>{
	 let sentence = e.target.value.trim();
  let count = sentence === "" ? 0 : sentence.split(/\s+/).length;
  h3Element.textContent = count;
	}
	
	
})