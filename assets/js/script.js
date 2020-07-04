// Browser specific popup
var button = document.getElementById('show-popup');
var close = document.getElementById('close');
var popup = document.getElementById('popup');

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

// Add and removve popup
close.addEventListener("click", function(e){
  popup.classList.add("close-popup");
});

button.addEventListener("click", function(e){
	e.preventDefault();
	popup.classList.add('display-popup');
	popup.classList.remove('close-popup');
  if(isChrome || isSafari) {
	  popup.classList.add("right-popup");    
  } else if(isFirefox) {
	  popup.classList.add("left-popup");    
	} else if(isEdge) {
	  popup.classList.add("center-bottom-popup");    
	} else {
	  popup.classList.add("all-center-popup");
	  var popupText = document.getElementById('popup-text');
	  popupText.innerHTML = 'Browser Not Supported  :(';   
	}
});

// Scroll to top functionality
var top = document.getElementById('top');

top.addEventListener("click", function(e){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});