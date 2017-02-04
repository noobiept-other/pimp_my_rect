interface RectInfo {
    size: string;
    color: string;
    radius: string;
}


window.onload = function () {

    AppStorage.init();
    Editor.init();
    Output.init();

    let allRects = AppStorage.getRectList();
    let initRect;

    if ( allRects.length > 0 ) {
        initRect = allRects[ 0 ];
    }

    else {
        initRect = {
            size: '200',
            color: '#000000',
            radius: '5'
        };
    }

    Editor.load( initRect );
    Gallery.init( allRects );
};
