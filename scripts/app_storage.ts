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


    export function getRectList() {
        return RECT_LIST;
    }


    export function addRect( rect: RectInfo ) {
        RECT_LIST.push( rect );

        set( "rect_list", RECT_LIST );
    }
}