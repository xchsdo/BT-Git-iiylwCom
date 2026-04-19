(function(a) {
    a(window).on("load", function() {
        a(".preloader-wrap").fadeOut(1000)
    });
    var i = false;
    var g = false;
    var d = true;
    var e = true;
    var f = true;
    var h = true;
    var j = "no";
    var k = new Date(a("#count-down-date").val()).getTime();

    function c() {
        var v = a(".years");
        var t = a(".months");
        var q = a(".days");
        var r = a(".hours");
        var s = a(".minutes");
        var u = a(".seconds");
        var p = a(".expired-text");
        var l = a(".count-down-list");
        var m = new Date().getTime();
        var o = k - m;
        if (o < 0) {
            clearInterval(b);
            a(p).removeClass("hidden");
            a(l).addClass("hidden")
        } else {
            if (!i && !g && !d && !e && !f && !h) {
                a("#countdown-boxes").hide()
            } else {
                if (h) {
                    var z = Math.floor(o / 1000);
                    a("#years").hide();
                    a("#months").hide();
                    a("#days").hide();
                    a("#hours").hide();
                    a("#minutes").hide();
                    a("#seconds").show()
                }
                if (f) {
                    var x = Math.floor(o / (1000 * 60));
                    var z = Math.floor(o % (1000 * 60) / 1000);
                    a("#years").hide();
                    a("#months").hide();
                    a("#days").hide();
                    a("#hours").hide();
                    a("#minutes").show();
                    a("#seconds").show()
                }
                if (e) {
                    var w = Math.floor(o / (1000 * 60 * 60));
                    var x = Math.floor(o % (1000 * 60 * 60) / (1000 * 60));
                    var z = Math.floor(o % (1000 * 60) / 1000);
                    a("#years").hide();
                    a("#months").hide();
                    a("#days").hide();
                    a("#hours").show();
                    a("#minutes").show();
                    a("#seconds").show()
                }
                if (d) {
                    var n = Math.floor(o / (1000 * 60 * 60 * 24));
                    var w = Math.floor(o % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    var x = Math.floor(o % (1000 * 60 * 60) / (1000 * 60));
                    var z = Math.floor(o % (1000 * 60) / 1000);
                    a("#years").hide();
                    a("#months").hide();
                    a("#days").show();
                    a("#hours").show();
                    a("#minutes").show();
                    a("#seconds").show()
                }
                if (g) {
                    var y = Math.floor(o / (1000 * 60 * 60 * 24 * 30.436875));
                    var n = Math.floor(o % (1000 * 60 * 60 * 24 * 30.436875) / (1000 * 60 * 60 * 24));
                    var w = Math.floor(o % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    var x = Math.floor(o % (1000 * 60 * 60) / (1000 * 60));
                    var z = Math.floor(o % (1000 * 60) / 1000);
                    a("#years").hide();
                    a("#months").show();
                    a("#days").show();
                    a("#hours").show();
                    a("#minutes").show();
                    a("#seconds").show()
                }
                if (i) {
                    var A = Math.floor(o / (1000 * 60 * 60 * 24 * 30.436875 * 12));
                    var y = Math.floor(o % (1000 * 60 * 60 * 24 * 30.436875 * 12) / (1000 * 60 * 60 * 24 *
                        30.436875));
                    var n = Math.floor(o % (1000 * 60 * 60 * 24 * 30.436875) / (1000 * 60 * 60 * 24));
                    var w = Math.floor(o % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    var x = Math.floor(o % (1000 * 60 * 60) / (1000 * 60));
                    var z = Math.floor(o % (1000 * 60) / 1000);
                    a("#years").show();
                    a("#months").show();
                    a("#days").show();
                    a("#hours").show();
                    a("#minutes").show();
                    a("#seconds").show()
                }
                if ("yes" == j) {
                    a("#hours").hide();
                    a("#minutes").hide();
                    a("#seconds").hide()
                }
            }
            if (A < 10) {
                A = "0" + A
            }
            if (y < 10) {
                y = "0" + y
            }
            if (n < 10) {
                n = "0" + n
            }
            if (w < 10) {
                w = "0" + w
            }
            if (x < 10) {
                x = "0" + x
            }
            if (z < 10) {
                z = "0" + z
            }(A > 0) ? a(v).text(A): a("#years").hide();
            (y > 0) ? a(t).text(y): a("#months").hide();
            (n > 0) ? a(q).text(n): a("#days").hide();
            a(r).text(w);
            a(s).text(x);
            a(u).text(z)
        }
    }
    c();
    var b = setInterval(function() {
        c()
    }, 1000);
    if (a.fn.final_countdown) {
        a(".countdown").final_countdown({
            start: 1362139200,
            end: 1388461320,
            now: 1387461319
        })
    }
}(jQuery));
