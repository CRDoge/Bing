$(document).ready(function() {
    "use strict";
    //wap-nav
    (function() {
        var nav_btn = $(".wap-menu");
        var nav_box = $(".wap-sub");
        var nav_header = $(".g-header");
        nav_btn.click(function(e) {
            e.preventDefault();
            $(this).toggleClass("on");
            nav_box.toggleClass("on");
            nav_header.toggleClass("on");
        });
        var nav_first = nav_box.find(".s-row");
        nav_first.click(function() {
            $(this).toggleClass("on");
            nav_first.not($(this)).removeClass("on");
            var nav_sub = $(this).find(".s-sub");
            nav_sub.click(function(e) {
                e.stopPropagation();
            });
            nav_sub.slideToggle();
            nav_first.not($(this)).find(".s-sub").slideUp();
        });
        var nav_link = nav_box.find("a");
        nav_link.click(function() {
            nav_box.removeClass("on");
            nav_btn.removeClass("on");
        });

    })();
 //
    function k(id) {
        var tp = $(id);
        if (tp.length === 0) {
            return false;
        }
        var tpx = tp[0].getBoundingClientRect().top; //
        return tpx;
    }
    function b(id, type, delay) {
        var tar = $(id);
        tar.addClass(type);
        if (delay) {
            for (var i = 0; i < tar.length; i++) {
                tar.eq(i).css({
                    animationDelay: i * 0.2 + "s"
                });
            }
        }
    }
    function m(json) {
        if (json.data) {
            var t = $(window).height(); //
            for (var i = 0; i < json.data.length; i++) {
                if (k(json.data[i]) < t * 0.9) {
                    b(json.data[i], json.type, json.delay);
                }
            }
        }
    }
    function action() {

        m({
            data: [".g-about .s-pic", ".g-lb .m-c ul li",".g-jj ul li",
			".tit h1",".g-gl ul li"
			,".footer ul li",".footer_g ul li",'.g-about ul li','.p-about img',
			'.g-hz ul li','.g-about .m-c .table table tr','.g-tone .m-c img','.g-fp .m-c',
			'.g-team .swiper-slide','.g-project3 .m-c',".g-lb .swiper .swiper-slide",".g-map .s-info ul li",''],
            type: "topLoop",
            delay: true
        });
        m({
            data: [".g-banner .s-info", ".g-about .s-info",'.g-jj .s-info','.g-banner .s-pic .txt p','.votebox',".g-gl .m-c"],
            type: "zoomIn",
            delay: true
        });
    }
    action();
    window.addEventListener("scroll",
    function() {
        action();
    });
});