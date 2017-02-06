module Editor {

    var BACKGROUND: HTMLInputElement;
    var BACKGROUND_VALUE: HTMLSpanElement;

    var SIZE: HTMLInputElement;
    var SIZE_VALUE: HTMLSpanElement;

    var BORDER_RADIUS: HTMLInputElement;
    var BORDER_RADIUS_VALUE: HTMLSpanElement;

    var SORT: HTMLSelectElement;


    export function init() {
        BACKGROUND = <HTMLInputElement>document.getElementById( "BackgroundColor" );
        BACKGROUND_VALUE = <HTMLSpanElement>document.getElementById( "BackgroundColorValue" );

        SIZE = <HTMLInputElement>document.getElementById( "Size" );
        SIZE_VALUE = <HTMLSpanElement>document.getElementById( "SizeValue" );

        BORDER_RADIUS = <HTMLInputElement>document.getElementById( "BorderRadius" );
        BORDER_RADIUS_VALUE = <HTMLSpanElement>document.getElementById( "BorderRadiusValue" );

        let save = <HTMLInputElement>document.getElementById( "Save" );
        save.onclick = saveCurrentRect;

        SORT = <HTMLSelectElement>document.getElementById( "GallerySort" );
        SORT.onchange = function () {
            Gallery.sort( <keyof RectInfo>getSortMethod() );
        };

        BACKGROUND.onchange = function () {
            updateBackgroundColor( BACKGROUND.value );
        };

        SIZE.onchange = function () {
            updateSize( SIZE.value );
        }

        BORDER_RADIUS.onchange = function () {
            updateBorderRadius( BORDER_RADIUS.value );
        }
    }


    export function getSortMethod() {
        return SORT.options[ SORT.selectedIndex ].value;
    }


    function saveCurrentRect() {
        var rect = {
            color: BACKGROUND.value,
            radius: BORDER_RADIUS.value,
            size: SIZE.value
        };

        AppStorage.addRect( rect );
        Gallery.add( rect );
    }


    function updateBackgroundColor( color: string ) {
        BACKGROUND.value = color;
        BACKGROUND_VALUE.textContent = color;
        Output.updateBackgroundColor( color );
    }


    function updateSize( size: string ) {
        SIZE.value = size;
        SIZE_VALUE.textContent = size;
        Output.updateSize( size );
    }


    function updateBorderRadius( radius: string ) {
        BORDER_RADIUS.value = radius;
        BORDER_RADIUS_VALUE.textContent = radius;
        Output.updateBorderRadius( radius );
    }


    export function load( initValues: RectInfo ) {
        updateBackgroundColor( initValues.color );
        updateSize( initValues.size );
        updateBorderRadius( initValues.radius );
    }
}