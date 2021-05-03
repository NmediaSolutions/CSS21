//Ouvrir un popup en mobile
$(".openPopin").click(function () {
  if ($(window).width() < 768) {
    $(window).scrollTop(0);
  }
});

setImgInBg();
$(".defaultFacet").bind("templatingCompleted", function () {
	setImgInBg();
});

//Ajout de classe pour notre beau IE
if (navigator.userAgent.indexOf("Trident") > -1) {
  document.getElementsByTagName("html")[0].classList.add("IE11");
}

if (navigator.userAgent.indexOf("Edge") > -1) {
  document.getElementsByTagName("html")[0].classList.add("IEedge");
}

//Faire afficher le menu mobile
$(".toggleMenuMobile").click(function(){
  $(this).toggleClass("selected");
  $(".menuMobile").slideToggle();
});

//Fonctionnement en toggle du menu principal mobile
$(".menuMobile").find("li.parent").each(function () {
  //Enleve un paquet d'evenements qu'on a plus besoin, enleve le href sur le lien, et change quelques css
  $(this).removeAttr("onkeydown").removeAttr("onkeypress").removeAttr("expansionmode").find(">a").removeAttr("href").next().hide();
  $(this).find("*").css("visibility", "visible");
  $(this).parents("ul.MenuBar").removeClass("MenuBar");

  //A chaque click sur sur les liens d'un li parent, ferme les sous-menus puis ouvre celui qu'on veut
  $(this).find(">a").click(function () {
    if ($(this).next().css("display") === "block") {
      $(this).closest("ul").find("div").slideUp(500, function () {
				$(window).scrollTop(0);
      });
      $(this).parent().removeClass("open");
    }
    else {
      var currentElement = $(this);
      currentElement.closest("ul").find("li").removeClass("open").find("div").slideUp();
			currentElement.next().slideDown(500, function () {
				$(window).scrollTop(currentElement.offset().top);
      });
      currentElement.parents("ul").find("a").removeClass("open");
      currentElement.parent().addClass("open");
    }
  })
});