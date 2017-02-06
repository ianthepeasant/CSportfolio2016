// JavaScript File
//var test= document.getElementById("test");
//var copy = document.getElementById("copy");
//var saveArea = document.getElementById("saveArea");
//copy.addEventListener("click", function(evt){
  
 // saveArea.innerHTML = document.innerHTML;
//});
  // document.getElementById(myForm).reset();
  //myForm.addEventListener("click", function(){
      
       //Reset.innerHTML = document.innerHTML;
  //});
  
//  var input = "something";

 
  
var input = document.getElementById("input");
var enter = document.getElementById("enter");
var output = document.getElementById("output");
var colorInput = document.getElementById("colorInput");

enter.addEventListener("click", function(){
  //output.innerHTML += "<br>" + input.value;

  //var listItem = document.createElement("li");
  //listItem.appendChild(document.createTextNode(input.value));          Committed out inorder to test if we can get the add to work without child nodes
  output.innerHTML += "<div style='color:" + colorInput.value + " '>" + input.value + "</div>";

  
});

output.addEventListener("click", function(evt) {
  var remove = evt.target;
  remove.parentNode.removeChild(remove);
});