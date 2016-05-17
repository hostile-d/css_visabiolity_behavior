var child = document.createElement('iframe');
child.src = './frame.html';                
child.width = child.height = '300px';
child.frameBorder = '0';
child.style['position'] = 'absolute';
child.style['top'] = child.style['left'] = '30px';
child.id = "iframeTest"
document.body.appendChild(child);

function GetCheckedState () {
    var input = document.getElementById ("visibilityCheck");
    var isChecked = input.checked;
    if (isChecked) {
    	isChecked = "checked";
    	child.style['visibility'] = 'visible';
    } else {
    	isChecked = "not checked";
    	child.style['visibility'] = 'hidden';
    }
}