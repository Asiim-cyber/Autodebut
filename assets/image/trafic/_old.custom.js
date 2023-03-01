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

        // if(widthDoc > 1199){
        // 	window.onscroll = function() {scrollSticky();};
        // } else {
        // 	var MyDiv1 = document.getElementById('aside_pts_1');
        // 	var MyDiv2 = document.getElementById('aside_pts_2');
        // 	MyDiv2.innerHTML = MyDiv1.innerHTML;
        // 	MyDiv1.innerHTML = "";
        // }

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
                console.log("disabled");
            } else {
                console.log($(this));
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
            // bloquer le comportement par d�faut: on ne rechargera pas la page
            evt.preventDefault();
            // enregistre la valeur de l'attribut  href dans la variable target
            var target = $(this).attr('href');
            /* le s�lecteur $(html, body) permet de corriger un bug sur chrome
            et safari (webkit) */
            $('html, body')
            // on arr�te toutes les animations en cours
                .stop()
                /* on fait maintenant l'animation vers le haut (scrollTop) vers
                notre ancre target */
                .animate({scrollTop: $(target).offset().top}, 500 );
        });

        $(".accueil-module .btn-2").on('click', function(evt){
            $("#perception-des-risques").hide();
            $("#questionnaire-code-de-la-route").hide();
            $("#rendezvous-pedagogique").show().delay(200);
            // bloquer le comportement par d�faut: on ne rechargera pas la page
            evt.preventDefault();
            // enregistre la valeur de l'attribut  href dans la variable target
            var target = $(this).attr('href');
            /* le s�lecteur $(html, body) permet de corriger un bug sur chrome
            et safari (webkit) */
            $('html, body')
            // on arr�te toutes les animations en cours
                .stop()
                /* on fait maintenant l'animation vers le haut (scrollTop) vers
                notre ancre target */
                .animate({scrollTop: $(target).offset().top}, 500 );
        });

        $(".accueil-module .btn-3").on('click', function(evt){
            $("#rendezvous-pedagogique").hide();
            $("#questionnaire-code-de-la-route").hide();
            $("#perception-des-risques").show().delay(200);
            // bloquer le comportement par d�faut: on ne rechargera pas la page
            evt.preventDefault();
            // enregistre la valeur de l'attribut  href dans la variable target
            var target = $(this).attr('href');
            /* le s�lecteur $(html, body) permet de corriger un bug sur chrome
            et safari (webkit) */
            $('html, body')
            // on arr�te toutes les animations en cours
                .stop()
                /* on fait maintenant l'animation vers le haut (scrollTop) vers
                notre ancre target */
                .animate({scrollTop: $(target).offset().top}, 500 );
        });

    });

})(jQuery);