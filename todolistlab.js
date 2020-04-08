// Creating a list to add items into it
var inputValue=document.getElementById("myInput");
var list=document.getElementById('ul');
var button=document.getElementById('addbtn');
 button.addEventListener('click',function(event)
 {
 	var newli=document.createElement('li');
 	newli.innerHTML=inputValue.value;//add item to list
 	list.appendChild(newli);//add new item to list at the end
 	inputValue.value="";//Empties the input box
 });



// Removing items from list
 list.addEventListener('click',function(event)
 {
 	event.target.style.textDecoration="line-through";//to have a strike on item removed 
 	setTimeout(function(){
 		event.target.remove();
 	},2000)
 });