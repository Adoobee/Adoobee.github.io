var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("ヽ(✿ﾟ▽ﾟ)ノ", "ヾ(ﾟ∀ﾟゞ)", "ヾ(･ω･`｡)", "ヾ(=ﾟ･ﾟ=)ﾉ喵♪", "ヾ(｡｀Д´｡)", "ヾﾉ≧∀≦)o", "ヾ(o◕∀◕)ﾉヾ", "ヽ(*。>Д<)o゜", "ヽ(=^･ω･^=)丿", "ヾ(＠⌒ー⌒＠)ノ", "φ(≧ω≦*)♪", "Ψ(￣∀￣)Ψ");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#F596AA"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
