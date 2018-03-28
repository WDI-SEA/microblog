var input = document.createElement("Input");
//input.focus();
input.setAttribute("id", "obj1");
//input.setAttrubyte("align", "right");
input.setAttribute("type", "text");
input.setAttribute("name", "textbox");

var deleteMessagebtn = document.createElement("button");
var deleteMessage = document.createTextNode("delete Messages");
deleteMessagebtn.appendChild(deleteMessage);
var messages = document.getElementById("messages");
messages.appendChild(deleteMessagebtn);
//input.focus();
//input.setAttrubyte("align", "right");
//var textnode = document.createTextNode("Please write something in this text box");
//input.appendChild(textnode);
var text = document.getElementById("inputArea");
text.focus();
text.appendChild(input);

var btn = document.createElement("button");
var buttonText = document.createTextNode("Post");
btn.appendChild(buttonText);
btn.setAttribute("id", "mybtn");
var temp = document.getElementById("btn");
temp.appendChild(btn);

//btn.addEventListener("click", addPost);
var text = [];
let addPost = () => {
	//var text = [];
	//console.log("inside function");
	text.push(input.value);
	//console.log(text);
	postMessages();
}

btn.addEventListener("click", addPost);

postMessages = ()=>{
	//var tableOfContents = document.createElement("TABLE");
	//console.log("inside  the post");
	//var myLabel;
	//var myLabel = document.createElement("LABEL");
	var messages = document.getElementById("messages");
	for(var i = 0; i <text.length; i++){
		var myLabel = document.createElement("LABEL");
		myLabel.innerHTML = text[i];
		var breakline = document.createElement("BR");
		messages.appendChild(myLabel);
		messages.appendChild(breakline);
		text.shift();
	}
	//messages.appendChild(myLabel);
 
}
//text.appendChild(input);