//Set des images de produits en background
function setImgInBg() {
	$("img.setInBg").each(function () {
	  $(this).hide().parent().css("background-image", "url(" + $(this).prop("src") + ")");
	});
} 
 
function lireCookie(szName)
{
 	var szValue =	  null;
	if(document.cookie)	   //only if exists
	{
       	var arr = 		  document.cookie.split((escape(szName) + '=')); 
       	if(2 <= arr.length)
       	{
           	var arr2 = 	   arr[1].split(';');
       		szValue  = 	   unescape(arr2[0]);
       	}
	}
	return szValue;
}

function ecrireCookie(sName, sValue, jours) {
	var today = new Date(), expires = new Date();
	expires.setTime(today.getTime() + (jours*24*60*60*1000));
	document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString() + ";path=/";		
}

function effacerCookie(sName){
	setCookie(sName,"",-1)
}

function getQueryString (field, url) {
	var href = url ? url : window.location.href;
	var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
	var string = reg.exec(href);
	return string ? string[1] : null;
};

function scrolling(elem, sticky) {
  document.getElementsByTagName("html")[0].style.scrollBehavior = "unset";
  var height = 0;
  if (sticky) {
    height = $(".header").height()
  }
  $('html, body').animate({
    scrollTop: $(elem).offset().top - height
  }, 800, function () {
    document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
  });
}

