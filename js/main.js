!function(t){"use strict";t("a.page-scroll").bind("click",function(o){var i=t(this);t("html, body").stop().animate({scrollTop:t(i.attr("href")).offset().top-50},1250,"easeInOutExpo"),o.preventDefault()}),t("body").scrollspy({target:".navbar-fixed-top",offset:51}),t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("h1").fitText(1.2,{minFontSize:"35px",maxFontSize:"65px"}),t("#mainNav").affix({offset:{top:100}}),(new WOW).init()}(jQuery),$(function(){$('[data-toggle="tooltip"]').tooltip()});