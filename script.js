let text= document.getElementById('text')
const byteSize = (str) => {
  // write your code here
	text.innerText= str +" "+ str.split("").length
	
	return str.split("").length
	
};


// Do not change the code below


const str = prompt("Enter some string.");
alert(byteSize(str));
