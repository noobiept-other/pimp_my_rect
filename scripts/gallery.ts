module Gallery {

    var GALLERY_LIST: HTMLDivElement;


    export function init( items: RectInfo[] ) {
        GALLERY_LIST = <HTMLDivElement>document.getElementById( "GalleryList" );

        for ( let a = 0; a < items.length; a++ ) {
            add( items[ a ] );
        }
    }


    export function add( rect: RectInfo ) {

        var container = document.createElement( "div" );
        var item = document.createElement( "div" );
        var remove = document.createElement( "div" );

        item.className = "item";
        item.style.backgroundColor = rect.color;

        item.setAttribute( "data-color", rect.color );
        item.setAttribute( "data-size", rect.size );
        item.setAttribute( "data-radius", rect.radius );

        item.onclick = function () {
            Editor.load( rect );
        };

        remove.textContent = "X";
        remove.className = "removeItem";
        remove.onclick = function () {
            GALLERY_LIST.removeChild( container );
            AppStorage.removeRect( rect );
        }

        container.className = "itemContainer";
        container.appendChild( item );
        container.appendChild( remove );

        GALLERY_LIST.appendChild( container );

        // need to adjust the border radius, since the gallery rect doesn't have the same size as the original one
        var itemSize = item.offsetWidth;
        item.style.borderRadius = ( Number( itemSize ) * Number( rect.radius ) / Number( rect.size ) ) + 'px';
    }
}