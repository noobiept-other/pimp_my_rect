module AppStorage {

    var RECT_LIST: RectInfo[];


    export function init() {
        RECT_LIST = get( "rect_list" );

        if ( !RECT_LIST ) {
            RECT_LIST = [];
        }
    }


    function get( key: string ) {
        var value = localStorage.getItem( key );
        return value && JSON.parse( value );
    }


    function set( key: string, value: Object ) {
        localStorage.setItem( key, JSON.stringify( value ) );
    }


    function saveRectList() {
        set( "rect_list", RECT_LIST );
    }


    export function getRectList() {
        return RECT_LIST;
    }


    export function addRect( rect: RectInfo ) {
        RECT_LIST.push( rect );
        saveRectList();
    }


    export function removeRect( rect: RectInfo ) {
        var index = RECT_LIST.indexOf( rect );

        if ( index >= 0 ) {
            RECT_LIST.splice( index, 1 );
            saveRectList();
        }
    }
}