//-----------------------------------------------------
// 選択された年のボタン色を変える
//-----------------------------------------------------
$(".year").click(function () {
    const year = document.querySelectorAll(".year");
    for (i of year) {
        if (i === this) {
            $(this).addClass("on");
        } else {
            $(i).removeClass("on");
        }
    }
});
