				$(function() {
                    $("#menuIcon,nav ul li").click(function() {
                        if ($("#menuIcon").is(":visible")) { //防止宽屏上点击
                            $("nav ul").toggle(300);
                        };
                    });
                })