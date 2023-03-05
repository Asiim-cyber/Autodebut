// CUSTOM RADIO BUTTONS

$(document).ready(function(){

	$(window).on('load',function(){
		var header = document.getElementById("aside_pts");
		function scrollSticky() {
			if (window.pageYOffset > 225) {
				header.classList.add("sticky_aside");
			} else {
				header.classList.remove("sticky_aside");
			}
		}

		var widthDoc = $( document ).width();
	});

	var title = document.getElementsByClassName("title_serie");

	for (var i = 0; i < title.length; i++) {
		longueur = title[i].text.trim().length;

		if(longueur > 20){
			var resultat = title[i].text.substr(0, 20);
			document.getElementsByClassName("title_serie").innerHTML = resultat + "...";
		}
	}

});


(function($){

	$('document').ready(function() {

		$('#modal-open').modal('show');

		$(".progress-bar").animate({
			width: "100%"
		}, 2900);

		// set up radio boxes
		$('.radioholder').each(function(){
			$(this).children().hide();
			var description = $(this).children('label').html();
			$(this).append('<span class="desc">'+description+'</span>');
			// on click, update radio boxes accordingly
			if($(this).hasClass('radiodisabled')){
				// console.log("disabled");
			} else {
				// console.log($(this));
				$(this).click(function(){
					$(this).children('input').prop('checked', true);
					$(this).children('input').trigger('change');
				});
			}
		});
		// update radio holder classes when a radio element changes
		$('.questions-acces input[type=radio]').change(function(){
			$('input[type=radio]').each(function(){
				if($(this).prop('disabled') == true) {
					$(this).parent().addClass('radiodisabled');
				} else {
					if($(this).prop('checked') == true) {
						$(this).parent().addClass('activeradioholder');
					} else $(this).parent().removeClass('activeradioholder');
				}
			});
		});
		// manually fire radio box change event on page load
		$('.questions-acces input[type=radio]').change();

		// (début selection accès nouveau utilisateur)
		$('.panel-acces input[type=radio]').change(function(){
			$('.panel-acces input[type=radio]').each(function(){
				if($(this).prop('disabled') == true) {
					$(this).parent().addClass('radiodisabled');
				} else {
					if($(this).prop('checked') == true) {
						$(this).parents(".panel-acces").addClass('activeradioacces');
						$(this).siblings(".btn").removeClass('btn-primary');
						$(this).siblings(".btn").addClass('btn-success');
						$(this).siblings(".btn").html("Choisi <i class=\"far fa-check-square\" style=\"margin-left: 5px;\"></i>");

						var img_acces = $(this).parents(".panel-acces-prix").siblings(".panel-acces-img").find("img").attr('src');
						var txt_acces = $(this).parents(".panel-acces-prix").siblings(".panel-acces-desc").find("h3").text();
						var prix_acces = $(this).parents(".panel-acces-prix").find("strong").text();
						var val_input_acces = $(this).parents(".panel-acces-prix").find("input").val();

						$(".recap-acces").find("img").attr('src', img_acces);
						$(".recap-acces").find("p").text(txt_acces);
						$(".recap-acces").find("strong").text(prix_acces);

						$(".recap-acces-nextstep").find("img").attr('src', img_acces);
						$(".recap-acces-nextstep").find("p").text(txt_acces);
						$(".recap-acces-nextstep").find("strong").text(prix_acces);

						// $('html, body').delay(500).animate({scrollTop: $("#newuser-nextstep").offset().top}, 500, function(){
						$(".newuser-nextstep").css({"visibility": "visible", "opacity": "1", "height" : "auto", "bottom" : "0"});
						$(".newuser-txt").css({"visibility": "visible", "opacity": "1", "height" : "auto", "bottom" : "0"});
						$(".newuser-title").css({"visibility": "visible", "opacity": "1", "height" : "auto", "bottom" : "0"});
						$(".newuser-logo").css({"visibility": "visible", "opacity": "1", "height" : "auto", "bottom" : "0"});
						// });
					} else {
						$(this).parents(".panel-acces").removeClass('activeradioacces');
						$(this).siblings(".btn").removeClass('btn-success');
						$(this).siblings(".btn").addClass('btn-primary');
						$(this).siblings(".btn").html("Choisir <i class=\"far fa-square\" style=\"margin-left: 5px;\"></i>");
					}
				}
			});
		});

		$(window).scroll(function() {
			if ($(".activeradioacces").length > 0) {
				// Hauteur "from-top" de l'élément selectionné
				var height_to_top = $(".activeradioacces").offset().top;
				var curr_scrolling = $(window).scrollTop();
				var limit_to_show = height_to_top + 250;

				if(curr_scrolling >= limit_to_show){
					$(".wrap-recap-acces").css("top", "0");
				} else {
					$(".wrap-recap-acces").css("top", "-100px");
				}
			}
		});

		$(".nextstep-hide").click(function(){
			$(".wrap-acces").hide();
			$(".wrap-form-acces").show();
			$('html, body').animate({scrollTop: $("#wrap-form-acces").offset().top}, 800);
		});
		$(".newuser-prevstep").click(function(){
			$(".wrap-form-acces").hide();
			$(".wrap-acces").show();
			$(".newuser-nextstep").css({"visibility": "visible", "opacity": "1", "height" : "auto", "bottom" : "0"});
		});

		$('.panel-acces input[type=radio]').change();
		// (fin selection accès nouveau utilisateur)

		$('.panel-acces').hover(function() {
			$(this).addClass("shrink-acces");
		}, function() {
			$(this).removeClass("shrink-acces");
		})

		$("#loader-wrapper").fadeOut();

		$('.panel-rdv').hover(function() {
			$(this).children(".panel-score").addClass('display-fade');
		}, function() {
			$(this).children(".panel-score").removeClass('display-fade');
		});

		if ($(".msg-flash .alert").length){

			setTimeout(function(){
				$(".msg-flash").slideUp("slow");
			}, 20000);

		}

		$('.carousel').carousel({
			interval: 4000
		});

		$(".btn-feedback").click(function() {
			if($(".feedback").hasClass('feedback-open')){
				$(".feedback").removeClass('feedback-open');
			} else {
				$(".feedback").addClass('feedback-open');
			}
		});

		$(".accueil-module .btn-1").on('click', function(evt){
			$("#rendezvous-pedagogique").hide();
			$("#perception-des-risques").hide();
			$("#questionnaire-code-de-la-route").show().delay(200);
			// bloquer le comportement par défaut: on ne rechargera pas la page
			evt.preventDefault();
			// enregistre la valeur de l'attribut  href dans la variable target
			var target = $(this).attr('href');
			/* le sélecteur $(html, body) permet de corriger un bug sur chrome
            et safari (webkit) */
			$('html, body')
			// on arrête toutes les animations en cours
				.stop()
				/* on fait maintenant l'animation vers le haut (scrollTop) vers
                notre ancre target */
				.animate({scrollTop: $(target).offset().top}, 500 );
		});

		$(".accueil-module .btn-2").on('click', function(evt){
			$("#perception-des-risques").hide();
			$("#questionnaire-code-de-la-route").hide();
			$("#rendezvous-pedagogique").show().delay(200);
			// bloquer le comportement par dééfaut: on ne rechargera pas la page
			evt.preventDefault();
			// enregistre la valeur de l'attribut  href dans la variable target
			var target = $(this).attr('href');
			/* le sélecteur $(html, body) permet de corriger un bug sur chrome
            et safari (webkit) */
			$('html, body')
			// on arrête toutes les animations en cours
				.stop()
				/* on fait maintenant l'animation vers le haut (scrollTop) vers
                notre ancre target */
				.animate({scrollTop: $(target).offset().top}, 500 );
		});

		$(".accueil-module .btn-3").on('click', function(evt){
			$("#rendezvous-pedagogique").hide();
			$("#questionnaire-code-de-la-route").hide();
			$("#perception-des-risques").show().delay(200);
			// bloquer le comportement par défaut: on ne rechargera pas la page
			evt.preventDefault();
			// enregistre la valeur de l'attribut  href dans la variable target
			var target = $(this).attr('href');
			/* le sélecteur $(html, body) permet de corriger un bug sur chrome
            et safari (webkit) */
			$('html, body')
			// on arrête toutes les animations en cours
				.stop()
				/* on fait maintenant l'animation vers le haut (scrollTop) vers
                notre ancre target */
				.animate({scrollTop: $(target).offset().top}, 500 );
		});

		$(".pay_btn").click(function(){
				$(".pay_btn").attr("readonly", true).html("Vérification en cours...");
				$(".pay_btn").toggleClass("btn-primary btn-default");
				$(".pay_btn").toggleClass("pay_btn pay_btn_alt");
			setTimeout(function(){
				$(".pay_btn_alt").toggleClass("btn-primary btn-default");
				$(".pay_btn_alt").attr("readonly", false).html("Payer maintenant <i class=\"fas fa-arrow-right\" style=\"margin-left: 5px;\"></i>");
				$(".pay_btn_alt").toggleClass("pay_btn pay_btn_alt");
			}, 5000)
		})

	});

})(jQuery);