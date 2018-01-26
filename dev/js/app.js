$(document).ready(function() {
	var s;
	$(".nav-link-tab").on("click", function(a) {

		a.preventDefault();
		$(this).parent().addClass("nav-item-active");
		$(this).parent().siblings().removeClass("nav-item-active");

		var 	t = $(this).attr("href"),
					e = "sj-tabs-box--" + $(this).data("tab");


		$(t).siblings().removeClass("is-active");
		$(t).parent().removeClass(s).addClass(e);
		$(t).addClass("is-active");

		s = e

	})


	$(".close-this").on("click", function(s) {
		var $tab = $('.nav-item');
		$tab.removeClass("nav-item-active")
		s.preventDefault(), $(".ap-slide").removeClass("is-active")
	})
});




