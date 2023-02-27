//your code here
const textElement = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

textElement.addEventListener('input',()=>{
	let sentence = e.target.value;
	let count = sentence.split(" ").trim().length;
	h3Element.textContent = count;
	alert('dsf')
})