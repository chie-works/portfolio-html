// ------------------------------------//
// ハンバーガーメニュークリック時
// ------------------------------------//
$(".hum").on("click", () => {
    $(".header_inner").toggleClass("on");
    $("nav").removeClass("on");
});

// ------------------------------------//
// ハンバーガーメニューリンククリック時
// ------------------------------------//
$("nav").on("click", () => {
    // const menu = document.querySelector('.hum_menu');
    $(".header_inner").removeClass("on");
    $("nav").addClass("on");
});

//-----------------------------------------------------
// アクティブページのリンク色変える
//-----------------------------------------------------
$(".header_inner nav li").click(function () {
    const menu = document.querySelectorAll(".header_inner nav li");
    for (i of menu) {
        if (i == this) {
            $(this).addClass("current");
        } else {
            $(i).removeClass("current");
        }
    }
});
