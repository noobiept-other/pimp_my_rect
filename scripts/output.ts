module Output {
    var RECT: HTMLDivElement;


    export function init() {
        RECT = <HTMLDivElement>document.getElementById( "Output" );
    }


    export function updateSize( size: string ) {
        RECT.style.width = size + 'px';
        RECT.style.height = size + 'px';
    }


    export function updateBackgroundColor( color: string ) {
        RECT.style.backgroundColor = color;
    }


    export function updateBorderRadius( radius: string ) {
        RECT.style.borderRadius = radius + 'px';
    }
}