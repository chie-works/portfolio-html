$(function () {
    lightbox.option({
        alwaysShowNavOnTouchDevices: false, //trueにするとスマホでスライドの矢印を常に表示
        albumLabel: "Image %1 of %2", //スライドの画像番号のテキストを変更できる
        disableScrolling: true, //trueにするとLightboxが開いている時はスクロール禁止
        fadeDuration: 600, //Lightboxのフェードイン、フェードアウトの時間を指定
        fitImagesInViewport: true, //trueにするとLightbox画像が画面に収まるように縮小される
        imageFadeDuration: 600, //読み込まれてから画像がフェードインするまでの時間を設定
        maxWidth: 900, //画像の最大幅を設定
        maxHeight: 900, //画像の最大高さを設定
        positionFromTop: 50, //Lightboxコンテナの表示領域上からの位置を設定
        resizeDuration: 700, //異なるサイズの画像を表示する際のアニメーションの時間を設定
        showImageNumberLabel: true, //falseにすると画像番号が非表示になる
        wrapAround: true, //trueにすると最後のスライド画像の後に最初のスライド画像に戻る
    });
});
