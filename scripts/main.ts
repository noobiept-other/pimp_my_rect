interface RectInfo {
    size: string;
    color: string;
    radius: string;
}


window.onload = function () {

    AppStorage.init();
    Output.init();
    Editor.init();

    let allRects = AppStorage.getRectList();

    Gallery.init( allRects );
};
