interface RectInfo {
    size: string;
    color: string;
    radius: string;
}


window.onload = function () {

    let initRect = {
        size: '200',
        color: '#000000',
        radius: '5'
    }

    AppStorage.init();
    Editor.init();
    Output.init();
    Editor.load( initRect );
    Gallery.init( AppStorage.getRectList() );
};
