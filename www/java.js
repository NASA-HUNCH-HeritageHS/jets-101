function appBar() {
	
    if($('#test').hasClass('moved')) {
    
        $('#test').removeClass('moved');
    }
    else{
        $('#test').addClass('moved');
    }
    
}
// http://jsfiddle.net/yFy5n/103/

window.move = function() {
    if($('#test').hasClass('moved')) {
    
        $('#test').removeClass('moved');
    }
    else{
        $('#test').addClass('moved');
    }
    
}

function load_home(){
document.getElementById("content").innerHTML='<object type="text/html" data="calender.html" ></object>';
}

function supportsImports() {
  return 'import' in document.createElement('link');
}
if (supportsImports()) {
  // Good to go!
} else {
  // Use other libraries/require systems to load files.
}