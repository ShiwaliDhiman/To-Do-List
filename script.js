// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseenter", function(){
// 	console.log("CLICK!!!!");
// })
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	var div = document.createElement("div");
	var delButton = document.createElement("button");
	var img = document.createElement("img");
	img.src="trash.jpg";
	img.alt="delete";
	div.classList.add("wrapper");
	div.append(li, delButton);
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("item");
	delButton.append(img);
	delButton.classList.add("delete");
	ul.appendChild(div);
	input.value="";
}

function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}
function addListAfterKeyEnter(event){
	if(inputLength()>0 && event.keyCode==13){
		createListElement();
	}
}
function isDone(event){
	event.target.classList.toggle("done");
}

function deleteListElement(event){
	if(event.target.tagName=="IMG")
		event.target.parentElement.parentElement.remove();
	else
		event.target.parentElement.remove();
}

function handleClicks(event){
	if(event.target.tagName=="LI"){
		isDone(event);
	}
	if(event.target.tagName=="BUTTON" || event.target.tagName=="IMG"){
		deleteListElement(event);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyEnter);

ul.addEventListener("click", handleClicks);