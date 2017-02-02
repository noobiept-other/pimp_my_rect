interface RectInfo {
    size: string;
    color: string;
    radius: string;
}


window.onload = function () {

    let initValues = {
        size: '200',
        color: '#000000',
        radius: '5'
    }

    Editor.init();
    Output.init();
    Editor.load( initValues );
};
