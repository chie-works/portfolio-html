// ------------------------------------//
// キービジュアルスライダー
// ------------------------------------//
window.onload = function () {
    const swiper = new Swiper(".swiper", {
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 2000,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
    });
};

// ------------------------------------//
// TOPへ戻る
// ------------------------------------//
$(function () {
    $(window).scroll(function () {
        if (window.scrollY > 100) {
            $("#to_top").show();
        } else {
            $("#to_top").hide();
        }
    });
});

// ------------------------------------//
// 下部画像
// ------------------------------------//
const bg_ob_func = (entries) => {
    const bg = document.querySelector(".bg");
    for (entry of entries) {
        if (entry.isIntersecting) {
            bg.classList.add("on");
        } else {
            bg.classList.remove("on");
        }
    }
};

const bg_ob_param = {
    rootMargin: "100px",
};

const bg_ob = new IntersectionObserver(bg_ob_func, bg_ob_param);
bg_ob.observe(document.querySelector(".bg_placeholder"));

// ------------------------------------//
// セクションタイトルを一文字づつ表示
// ------------------------------------//
//スクロールしたらクラス名を付与
document.addEventListener("DOMContentLoaded", () => {
    const objects = document.querySelectorAll(".anime-up");

    const cb = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("displayed");
                // observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove("displayed");
            }
        });
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    const io = new IntersectionObserver(cb, options);

    objects.forEach((object) => {
        io.observe(object);
    });
});

//一文字ずつspanで囲む
const animationTargetElements = document.querySelectorAll(".anime-up");
for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i];
    texts = targetElement.textContent;
    textsArray = [];

    targetElement.textContent = "";

    for (let j = 0; j < texts.split("").length; j++) {
        textsArray.push('<span><span style="animation-delay: ' + (j + 1) * 0.1 + 's" >' + texts.split("")[j] + "<span></span>");
    }
    for (let k = 0; k < textsArray.length; k++) {
        targetElement.innerHTML += textsArray[k];
    }
}

// ------------------------------------//
// スライダー
// ------------------------------------//
// ABOUTスライダー
$(".slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: false,
});
// ITEMスライダー
new Splide(".splide", {
    type: "loop", // ループあり
    arrows: false, // 矢印非表示
    pagination: false, // ページネーション非表示
    fixedWidth: "400px", // スライドのwidth
    gap: "10px", // スライド間の余白

    autoScroll: {
        speed: 0.5,
        pauseOnHover: (boolean = false),
        pauseOnFocus: (boolean = false),
    },

    breakpoints: {
        // 600px以下のスタイル
        600: {
            fixedWidth: "200px", // スライドのwidth
            gap: "5px", // スライド間の余白
        },
    },
}).mount(window.splide.Extensions);
