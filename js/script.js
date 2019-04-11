function init(){
//add your javascrip between these two lines of code

  function processClickFunction(){
    alert("Thomas Fracassi: " + inputvar.value);
    document.getElementById("textoutput").innerHTML = inputvar.value;
  }

  var buttonvar = document.getElementById('entrybutton');
  var inputvar = document.getElementById('entryinput');
  
  buttonvar.addEventListener('click', processClickFunction);

}
window.addEventListener('load', init);