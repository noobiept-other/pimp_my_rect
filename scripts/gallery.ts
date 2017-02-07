module Gallery {

    var GALLERY_LIST: HTMLDivElement;
    var SELECTED: HTMLDivElement;


    export function init( items: RectInfo[] ) {
        GALLERY_LIST = <HTMLDivElement>document.getElementById( "GalleryList" );

        buildGallery( items );
        sort( "size" );

        // start the application with the first rect selected
        let first = GALLERY_LIST.firstElementChild;

        if ( first ) {
            select( <HTMLDivElement>first );
        }

        // add an initial rect
        else {
            Editor.add( {
                size: '200',
                color: '#000000',
                radius: '5'
            });
        }
    }


    function buildGallery( items: RectInfo[] ) {
        for ( let a = 0; a < items.length; a++ ) {
            add( items[ a ], false );
        }
    }


    function clearGallery() {
        GALLERY_LIST.innerHTML = '';
    }


    export function add( rect: RectInfo, sortAfter = true ) {

        var container = document.createElement( "div" );
        var item = document.createElement( "div" );
        var remove = document.createElement( "div" );

        container.setAttribute( "data-color", rect.color );
        container.setAttribute( "data-size", rect.size );
        container.setAttribute( "data-radius", rect.radius );

        item.className = "item";
        item.style.backgroundColor = rect.color;
        item.onclick = function () {
            select( container );
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

        if ( sortAfter ) {
            sort( <keyof RectInfo>Editor.getSortMethod() );
        }

        return container;
    }


    export function sort( property: keyof RectInfo ) {
        var items = [];

        // get a list with all the rects
        for ( var a = 0; a < GALLERY_LIST.childElementCount; a++ ) {
            items.push( GALLERY_LIST.children[ a ] );
        }

        // sort them based on the given property (size/radius/etc)
        items.sort( function ( a, b ) {
            return Number( b.getAttribute( 'data-' + property ) ) - Number( a.getAttribute( 'data-' + property ) );
        });

        // rebuild the list
        clearGallery();

        for ( var a = 0; a < items.length; a++ ) {
            GALLERY_LIST.appendChild( items[ a ] );
        }
    }


    export function select( rect: HTMLDivElement ) {

        let rectInfo = {
            size: rect.getAttribute( "data-size" ) !,
            radius: rect.getAttribute( "data-radius" ) !,
            color: rect.getAttribute( "data-color" ) !
        };
        Editor.load( rectInfo );

        if ( SELECTED ) {
            SELECTED.classList.remove( 'selected' );
        }

        rect.classList.add( 'selected' );
        SELECTED = rect;
    }
}