/*
*
* Template Name: Chloe
* Template URI: http://www.zaferyardimci.com
* Template Author: Zafer Yardimci
* License: GNU General Public License version 3.0
* License URI: http://www.gnu.org/licenses/gpl-3.0.html
* Version: 1.1
*
*
*/


(function ($) {

    "use strict";


	// css3 logo bounce down animate
	$("#logo").addClass('animated bounceInDown');


	$("article:first .date,article:first .read-more").show();
	$("article:first .date,article:first .read-more").addClass('animated bounceInDown');


    // Find Me button jquery
    $("#find_me").click(function () {
        if ($(this).hasClass('click')) {
            $("header").animate({
                height: "180px"
            }, 100);
            $("section").animate({
                marginTop: "264px"
            }, 100);
            $("#header_opened").hide();
            $(this).removeClass("click");
            $(this).addClass("cliked");

        }
        else {
            $('#header_opened').load('/ajax/map.html');
            $("header").animate({
                height: "490px"
            }, 100);
            $("section").animate({
                marginTop: "574px"
            }, 100);
            $("#header_opened").show();
            $(this).removeClass("cliked");
            $(this).addClass("click");
        }
    });




    // Contact Page Map Area Show For Always
    if ($(".header-opened-active").is(":visible")) {
        $("#find_me").click();
        $("#find_me").hide();
    }




    // Search Show Icon
    $("#search-icon").click(function (e) {
        e.preventDefault();
		$("#search-form input").removeClass('animated bounceOutLeft');
		$("#search-form input").addClass('animated bounceInLeft');
		$("#search-form input").show();
        $("#search-form input").focus();
    });




    // Hide Search Input On Click Document
    $(document).click(function () {
        if ($("#search-form input").is(":visible")) {
            if (!$("#search-form input").is(":focus")) {
				$("#search-form input").removeClass('animated bounceInLeft');
				$("#search-form input").addClass('animated bounceOutLeft');
            }
        }
    });




	// Article on hover Date And Read More Do Show
	$(".blog article").hover(

		function () {
			if($(this).find('.date').css("display") != "block")
				{
				$('.date').stop(true, true).delay(200).hide(0);
				$('.read-more').stop(true, true).delay(200).hide(0);
				$(this).find('.date,.read-more').addClass("animated bounceInDown");
				$(this).find('.date').stop(true, true).show(0);
				$(this).find('.read-more').stop(true, true).show(0);
				}
		}, function () {
			$(this).find('.date,.read-more').removeClass("bounceInDown");
		}

    );




    // Article Thumbnails on hover  Show icons
    $("article .link,article .zoom").hover(

		function () {
			$(this).find('span').fadeIn(100);
			$(this).find('span .icon').animate({
				top: "50%",
				borderWidth: "2px"
			}, 200);
		}, function () {
			$(this).find('span').fadeOut(200);
			$(this).find('span .icon').animate({
				top: "-100px",
				borderWidth: "0px"
			}, 200);
		}

    );




    // Projects Thumbnails Hover Show Icons
    $(".projects-list .link,.projects-list .zoom,.projects-list .video").hover(

		function () {
			$(this).find('span').fadeIn(100);
			$(this).find('span .icon').animate({
				top: "50%"
			}, 200);
		}, function () {
			$(this).find('span').fadeOut(200);
			$(this).find('span .icon').animate({
				top: "-100px"
			}, 200);
		}

    );



    // article Javascript
    $('.type-quote').parent().parent().css("borderBottom", "1px solid #eee");
    $('.type-quote').parent().parent().css("marginBottom", "13px");
    $('.type-quote').parent().parent().find('.post-title').css("marginBottom", "3px");




    // Section Min height is 100%
	var newHeight = $(window).height() - $("header").height() - $("footer").height() - "115" + "px";
	$("section").css("min-height", newHeight);




    // Navigation Submenu
    $(".menu li a").click(function (e) {
        if ($(this).parent().find("ul").length > 0) {
            e.preventDefault();
            $(".menu li ul").hide("slow");
            $(".menu li").removeClass("selected");
            $(this).parent().find("ul").stop(true, false).slideToggle('slow');
            $(this).parent().addClass("selected");
        }
    });




	// Navigation: Add " + " and "-" for sub menu.
	$(".menu li a").each(function () {

		if ($(this).parent().find("ul").length > 0) {

			if ($(this).parent().find("ul").css("display") == "block") {
				$(this).append(" <span>-</span>");
			}else{
				$(this).append(" <span>+</span>");
				}

		}

	});



	// remove last border from menu
    $('.menu li ul li:last-child').css("border-bottom", "0px");



    // On Scrolling hide google map area
    $(window).scroll(function () {

		if($('html').scrollTop() > 150){

			if ($("header[class='affix']").length > 0) {
				$("section").css("margin-top", "264px");
			}
			else {
				if ($("#find_me").hasClass('click')) {
					if ($("#find_me").css('display') == "block") {
						$("#find_me").click();
					}
				}

			}

		}

			if($(document).scrollTop() > 210)
			{
				$(".nav-affix").addClass("fixed");
			}else{
				$(".nav-affix").removeClass("fixed");
			}

    });



    // Add icon for on hover
    $(".link,.zoom,.video").each(function () {
        $(this).prepend("<span><i class='icon'></i></span>");
    });




	// Add tooltip on menu for mobile
    $(".menu li a").each(function () {
        $(this).attr("data-toggle","tooltip");
		$(this).attr("data-placement","right");
		var title = $(this).text().replace("+","").replace("-","");
		$(this).attr("title",title);
		$(this).addClass("tip");
    });



    // Read-more and Post date auto position
    $("article").each(function () {

		$(this).find('.thumbnails').parent('a').css("margin-bottom","12px");

		if($(this).find('.date').length > 0) {

			var post_header = $(this).find('.post-header').height();

				if($(this).find('.read-more').length > 0) {
					var post_date_position = parseInt("25") + parseInt(post_header) + "px";
				}else{
					var post_date_position = parseInt("10") + parseInt(post_header) + "px";
				}

			$(this).find(".date").css("top", post_date_position);

		}

		if($(this).find('.read-more').length > 0) {

			var read_more_position = "100";
			var read_more_position = parseInt(post_date_position) + parseInt(read_more_position) + "px";
			$(this).find(".read-more").css("top", read_more_position);

		}

    });




	// Auto position for first article
	if($('section').hasClass('blog'))
		{
			var first_date = $('.blog article:first').find('.date').css("top").replace("px","");
			var first_readmore = $('.blog article:first').find('.read-more').css("top").replace("px","");
			$('.blog article:first').find('.date').css("top",parseInt(first_date)-parseInt(13)+"px");
			$('.blog article:first').find('.read-more').css("top",parseInt(first_readmore)-parseInt(13)+"px");
		}



    // Carausel Plugin
    $('.caroufredsel').carouFredSel({

        auto: {},

        swipe: {
            onMouse: true,
			onTouch: true
        }

    });



    // Play carousel when colorbox closed
    $(document).bind('cbox_closed', function () {
        $(".caroufredsel").trigger("play");
    });


    // Pause carousel when colorbox opened
    $(document).bind('cbox_open', function () {
        $(".caroufredsel").trigger("pause");
    });


	// mouse hover carousel pause
    $(".caroufredsel").mouseenter(function () {
        $(this).trigger("pause");
    });


	// play carousel on mouse leave
    $(".caroufredsel").mouseleave(function () {
        if ($("#cboxOverlay").css("display") == "block") {
            $(this).trigger("pause");
        }
        else {
            $(this).trigger("play");
        }
    });




	// carausel plugin chrome and opera fix
    $('head').append('<style type="text/css">@media screen and (-webkit-min-device-pixel-ratio:0){.list_carousel ul{top:6px!important;}header #search-form input{padding-right:3.2%;}}</style>');
	$(".list_carousel").append('<div class="fix_carousel"></div>');




    // portfolio mixitup plugin
    $('#portfolio-area').mixitup();



    // .zoom class click open colorbox
	$("article .zoom,#portfolio-area .zoom").colorbox({
			fixed: "true",
			maxWidth:'95%',
			maxHeight:'95%'
		});



	// .video class click open colorbox
	$("article .video,#portfolio-area .video").colorbox({
			iframe: true,
			innerWidth: 700,
			innerHeight: 500,
			maxWidth:'95%',
			maxHeight:'95%'
		});




	// .zoom class click open colorbox for carousel
	$(".caroufredsel .zoom").click(function (e) {
		e.preventDefault();
		if($('.caroufredsel').css("left") == "0px" || $('.caroufredsel').css("left") == undefined)
			{
				$(this).colorbox(
					{
						fixed: "true",
						maxWidth:'95%',
						maxHeight:'95%'
					});
			}
	 });




	// .video class click open colorbox for carousel
	$(".caroufredsel .video").click(function (e) {
		e.preventDefault();
		if($('.caroufredsel').css("left") == "0px" || $('.caroufredsel').css("left") == undefined)
			{
				$(".video").colorbox(
					{
						iframe: true,
						innerWidth: 700,
						innerHeight: 500,
						maxWidth:'95%',
						maxHeight:'95%'
					});
			}
	 });



	// Bootstrap Tooltip Plugin
    $('.tip').tooltip();


})(jQuery);