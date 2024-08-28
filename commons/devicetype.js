
var form_factor = ""

function form_factor_specific_actions(){
	console.log("device type: "+  form_factor)
	if (["smartphone","tablet", "feature phone", "other mobile"].includes(form_factor.toLowerCase())){
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.href = '/styles/phone_and_tablet.css';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	/*elif (["desktop","other non-mobile", "smart-tv"].includes(form_factor.toLowerCase())){
		 pass 
	}*/
}


function planB_loaded(){
	var md = new MobileDetect(window.navigator.userAgent);	
	if (md.phone()){ form_factor = "smartphone";}
	if (md.mobile()){ form_factor = "smartphone";}
	if (md.tablet()){ form_factor = "tablet";}
	/* no cookie for you dirty boy */
	form_factor_specific_actions();
}

function wurfl_loaded(){
	if (typeof WURFL == 'object'){
		form_factor = WURFL.form_factor;
		document.cookie = "form_factor="+ WURFL.form_factor;
		form_factor_specific_actions();
	}
	else{
		/* plan B just in case something happens with WURLF */
		var mobiledetect = document.createElement('script');
		mobiledetect.src = "https://cdn.jsdelivr.net/npm/mobile-detect@1.4.4/mobile-detect.min.js";
		mobiledetect.addEventListener('load', planB_loaded);
		document.body.appendChild(mobiledetect);
	}
}

$(function(){
	form_factor = document.cookie.replace(/(?:(?:^|.*;\s*)form_factor\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	if (form_factor == ""){
		var wurfl = document.createElement('script');
		wurfl.src = "http://wurfl.io/wurfl.js";
		wurfl.addEventListener('load', wurfl_loaded);
		document.body.appendChild(wurfl);
	}
	else{
		form_factor_specific_actions()
	}
});
