var child = document.createElement('iframe');
child.src = './frame.html';                
child.width = child.height = '300px';
child.frameBorder = '0';
child.style['position'] = 'absolute';
child.style['top'] = child.style['left'] = '30px';
child.id = "iframeTest";
var wrapper = document.getElementById ("iframeWrapper");
wrapper.appendChild(child);
function GetCheckedState () {
    var input = document.getElementById ("visibilityCheck");
    var isChecked = input.checked;
    if (isChecked) {
    	isChecked = "checked";
    	wrapper.style['visibility'] = 'visible';
    } else {
    	isChecked = "not checked";
    	wrapper.style['visibility'] = 'hidden';
    }
}