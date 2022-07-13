jQuery(function () {
  $("html").click(function (e) {
    $.ajax({
      url: "https://v1.jinrishici.com/shuqing/aiqing",
      success: function (result) {
        var color1 = Math.floor((Math.random() * 255));
        var color2 = Math.floor((Math.random() * 255));
        var color3 = Math.floor((Math.random() * 255));
        var x = e.pageX,
          y = e.pageY;

        var $i = $("<span />");

        $i.html(
          '“' + result.content + '” —— ' + result.author + ' ·《' + result.origin + '》'
        );

        $i.css({
          "z-index": 9999999999999,
          "top": y - 20,
          "left": x,
          "position": "absolute",
          "font-family": "mmm",
          // 文字大小(px)
          "fontSize": Math.floor((Math.random() * 5) + 10),
          "font-weight": "bold",
          "color": "rgb(" + color1 + "," + color2 + "," + color3 + ")",
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        });

        $("body").append($i);

        $i.animate({
            "top": y - 200,
            "opacity": 0
          },
          // 文字悬浮时间(ms)
          4000,
          function () {
            $i.remove();
          }
        );
      }
    });
  });
});