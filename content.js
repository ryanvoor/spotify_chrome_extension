// make sure we only do this when the spotify window is really tall (like when I'm using vertical monitors)
if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
    // when the playing bar is on the page
    if ( typeof document.getElementsByClassName( 'now-playing-bar-container' )[0] !== 'undefined' ) {
        console.log( 'Putting extra space under the footer (place where the "now playing" bar is) for ease of viewing on vertical monitors' );
        document.getElementsByClassName( 'now-playing-bar-container' )[0].style.marginBottom = '500px';
        document.getElementsByClassName( 'main-view-container__content' )[0].style.marginBottom = '500px';
    }
}
