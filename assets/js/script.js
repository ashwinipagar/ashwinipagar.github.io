// Browser specific popup
var button = document.getElementById('show-popup');
var close = document.getElementById('close');
var popup = document.getElementById('popup');

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

button.addEventListener("click", function(e){
	e.preventDefault();
	popup.classList.add('display-popup');
  if(isChrome || isSafari) {
	  popup.classList.add("right-popup");    
  } else if(isFirefox) {
	  popup.classList.add("left-popup");    
	} else if(Edge) {
	  popup.classList.add("center-popup");    
	} else {
	  popup.classList.add("center-popup");
	  var popupText = document.getElementById('popup-text');
	  popupText.value = 'Browser Not Supported';   
	}
});

close.addEventListener("click", function(e){
  popup.classList.add("close-popup");
});